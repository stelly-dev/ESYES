import React, { useState, useEffect } from "react"
import Container from "../../containers/Container"
import { graphql, StaticQuery } from "gatsby"
import { StyledHeader, LogoContainer } from "./styled"
import Nav from "../Nav"
import Img from "gatsby-image"
import "./styles.css"

const query = graphql`
  query HeaderQuery {
    sanityHeader {
      logo {
        asset {
          fluid(maxWidth: 792) {
            ...GatsbySanityImageFluid_noBase64
          }
        }
      }
      logoAlt
      ctaBtn {
        buttonText
        buttonDestination {
          pageName
        }
      }
      _rawTagLine
      headerLinks {
        linkList {
          linkChildren {
            _key
            linkName
            linkDestination {
              pageName
            }
          }
          linkName {
            linkName
            linkDestination {
              pageName
            }
          }
        }
      }
    }
  }
`

const Header = props => {
  const [state, setState] = useState({
    scrolled: false,
  })

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10
      if (isScrolled !== state.scrolled) {
        setState({
          scrolled: !state.scrolled,
        })
      }
    }
    document.addEventListener("scroll", handleScroll, { passive: true })
    return () => {
      document.removeEventListener("scroll", handleScroll)
    }
  }, [state.scrolled])

  const { toggleMenu, isMenuOpen } = props
  return (
    <StaticQuery
      query={query}
      render={data => {
        if (!data.sanityHeader.logo) {
          throw new Error(
            'Missing "Site Logo". Open the studio and add "Site Logo" Data'
          )
        }
        return (
          <StyledHeader scrolled={state.scrolled} id="header">
            <Container>
              <LogoContainer to="/" alt="Link Home" scrolled={state.scrolled}>
                <Img
                  fluid={data.sanityHeader.logo.asset.fluid}
                  alt={data.sanityHeader.logoAlt}
                />
              </LogoContainer>
              <Nav
                tagLine={data.sanityHeader._rawTagLine}
                ctaButton={data.sanityHeader.ctaBtn}
                isMenuOpen={isMenuOpen}
                toggleMenu={toggleMenu}
                navLinks={data.sanityHeader.headerLinks}
              />
            </Container>
          </StyledHeader>
        )
      }}
    />
  )
}

export default Header
