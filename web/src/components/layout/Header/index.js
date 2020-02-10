import React from "react"
import Container from "../../containers/Container"
import { graphql, StaticQuery } from "gatsby"
import { StyledHeader, LogoContainer } from "./styled"
import Nav from "../Nav"
import Img from "gatsby-image"
import HeadRoom from "react-headroom"
import "./styles.css"

const query = graphql`
  query HeaderQuery {
    sanityHeader {
      logo {
        asset {
          fluid(maxWidth: 396) {
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
    }

    allSanityHeader {
      nodes {
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
  }
`

const Header = props => {
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
        if (!data.allSanityHeader.nodes) {
          throw new Error(
            'Missing "Header Links" Open the studio and add at least one Header Link'
          )
        }
        console.log("headerData", data)
        return (
          <HeadRoom disableInlineStyles>
            <StyledHeader>
              <Container>
                <LogoContainer to="/" alt="Link Home">
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
                  navLinks={data.allSanityHeader.nodes[0].headerLinks}
                />
              </Container>
            </StyledHeader>
          </HeadRoom>
        )
      }}
    />
  )
}

export default Header
