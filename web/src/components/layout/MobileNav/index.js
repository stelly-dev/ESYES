import React, { useState } from "react"
import Accordion from "./Accordion"
import styled from "styled-components"
import { StaticQuery, graphql, Link } from "gatsby"
import slugify from "slugify"

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
const Triangle = styled.div`
  width: 0;
  height: 0;
  border-left: 5px solid transparent;
  border-right: 5px solid transparent;
`

const StyledMenu = styled.ul`
  list-style: none;
  li {
    margin: 20px 0;
  }
  li:first-of-type {
    margin-top: 36px;
  }
  li:last-of-type {
    margin-bottom: 0;
  }
  li a div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    ${Triangle} {
      border-bottom: 5px solid ${props => props.theme.colors.black};
      transform: rotate(180deg);
    }
    ul {
      display: ${props => (props.open ? "block" : "block")};
      list-style: none;
      li:first-of-type {
        margin-top: 20px;
      }
      li {
        margin-left: 2ch;
      }
    }
  }

  li a {
    color: ${props => props.theme.colors.secondary};
  }

  li a:hover {
    color: ${props => props.theme.colors.black};
  }
`

const MenuItem = ({ childList, to, pageName }) => {
  if (childList.length > 0) {
    return (
      <ul>
        {childList.map(child => (
          <li key={child._key}>
            <div>
              <Link to={`/${slugify(to).toLowerCase()}/`}>child.pageName</Link>
            </div>
          </li>
        ))}
      </ul>
    )
  }
}

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
