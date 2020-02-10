import React from "react"
import { Link, graphql, StaticQuery } from "gatsby"

import { FiSearch } from "react-icons/fi"
import Button from "../../pieces/Button"
import HoverLink from "./HoverLink"
import {
  NavContainer,
  NavMenuButtonWrapper,
  StyledNav,
  NavList,
  NavListItem,
  NavCtaWrapper,
  TagLine,
  NavContentContainer,
  StyledButton,
  DropDownContainer,
  DropDown,
} from "./styled"
import MenuButton from "./MenuButton"
import Search from "./Search"
import BlockContent from "@sanity/block-content-to-react"
const slugify = require("slugify")

const Nav = ({ toggleMenu, isMenuOpen, navLinks, ctaButton, tagLine }) => {
  console.log("NavLinks!", navLinks)
  return (
    <NavContainer>
      <NavMenuButtonWrapper>
        <MenuButton isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
      </NavMenuButtonWrapper>
      <NavCtaWrapper>
        <TagLine>
          <BlockContent blocks={tagLine} />
        </TagLine>
        <StyledButton
          to={`/${slugify(
            ctaButton.buttonDestination.pageName
          ).toLowerCase()}/`}
        >
          {ctaButton.buttonText}
        </StyledButton>
      </NavCtaWrapper>
      <StyledNav>
        <NavList>
          {navLinks &&
            navLinks.linkList.map(navItem => (
              <NavListItem key={navItem.linkName.linkName}>
                <Link
                  to={`/${slugify(
                    navItem.linkName.linkDestination.pageName
                  ).toLowerCase()}/`}
                >
                  {navItem.linkName.linkName}
                </Link>
                {navItem.linkChildren.length > 0 ? (
                  <HoverLink>
                    <ul>
                      {navItem.linkChildren.map((child, i) => (
                        <li key={child._key}>
                          <Link
                            to={`/${slugify(
                              child.linkDestination.pageName
                            ).toLowerCase()}/`}
                          >
                            {child.linkName}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </HoverLink>
                ) : null}
              </NavListItem>
            ))}
          <NavListItem>
            <MenuButton isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
          </NavListItem>
          <NavListItem>
            <Search />
          </NavListItem>
        </NavList>
      </StyledNav>
    </NavContainer>
  )
}

export default Nav
