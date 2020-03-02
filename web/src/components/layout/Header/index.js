import React, { useState, useEffect } from "react"
import Grid from "../../containers/Grid"
import { graphql, StaticQuery } from "gatsby"
import { StyledHeader, LogoContainer } from "./styled"
import Nav from "../Nav"
import Img from "gatsby-image"
import slugify from "slugify"
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
  const { toggleMenu, isMenuOpen, scrolled, location } = props
  console.log(location)
  return (
    <StaticQuery
      query={query}
      render={data => {
        if (!data.sanityHeader.logo) {
          throw new Error(
            'Missing "Site Logo". Open the studio and add "Site Logo" Data'
          )
        }
        const testLink =
          data.sanityHeader.headerLinks.linkList[0].linkName.linkDestination
            .pageName

        console.log(`/${slugify(testLink)}/`)
        // console.log(
        //   `/${slugify(
        //     data.sanityHeader.headerLinks.linkList[0].linkName.linkDestination
        //   )}/`
        // )
        return (
          <StyledHeader scrolled={scrolled} id="header">
            <Grid.Container>
              <LogoContainer to="/" alt="Link Home" scrolled={scrolled}>
                <Img
                  fluid={data.sanityHeader.logo.asset.fluid}
                  alt={data.sanityHeader.logoAlt}
                />
              </LogoContainer>
              <Nav
                location={location}
                scrolled={scrolled}
                tagLine={data.sanityHeader._rawTagLine}
                ctaButton={data.sanityHeader.ctaBtn}
                isMenuOpen={isMenuOpen}
                toggleMenu={toggleMenu}
                navLinks={data.sanityHeader.headerLinks}
              />
            </Grid.Container>
          </StyledHeader>
        )
      }}
    />
  )
}

export default Header
