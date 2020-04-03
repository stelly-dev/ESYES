import React  from "react"
import Accordion from "./Accordion"
import styled from "styled-components"
import { StaticQuery, graphql } from "gatsby"

const query = graphql`
  query MenuQuery {
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

const StyledMenuContainer = styled.nav`
  width: ${props => (props.isMenuOpen ? "100%" : 0)};
  position: fixed;
  top: ${props => (props.scrolled ? "60px" : "222px")};
  left: ${props => (props.isMenuOpen ? 0 : "-100%")};
  padding: 20px;
  max-width: 100vw;
  height: 100vh;
  right: 0;
  transition: all 340ms ease-in-out;
  @media only screen and (min-width: 768px) {
    width: ${props => (props.isMenuOpen ? "450px" : 0)};
    top: ${props => (props.scrolled ? "120px" : "152px")};
  }
  @media only screen and (min-width: 1024px) {
    top: ${props => (props.scrolled ? "150px" : "195px")};
  }
  z-index: 1;
`

const MobileNav = ({ isMenuOpen, scrolled }) => (
  <StaticQuery
    query={query}
    render={data => {
      const { headerLinks } = data.allSanityHeader.nodes[0]
      const { linkList } = headerLinks
      return (
        <StyledMenuContainer isMenuOpen={isMenuOpen} scrolled={scrolled}>
          <Accordion links={linkList} />
        </StyledMenuContainer>
      )
    }}
  />
)

export default MobileNav
