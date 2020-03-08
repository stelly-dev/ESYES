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

const Nav = ({
  scrolled,
  toggleMenu,
  isMenuOpen,
  navLinks,
  ctaButton,
  tagLine,
  location,
}) => {
  return (
    <NavContainer scrolled={scrolled}>
      <NavMenuButtonWrapper>
        <MenuButton isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
      </NavMenuButtonWrapper>
      <NavCtaWrapper>
        <TagLine scrolled={scrolled}>
          <BlockContent blocks={tagLine} />
        </TagLine>
        <StyledButton
          scrolled={scrolled}
          to={`/${slugify(
            ctaButton.buttonDestination.pageName
          ).toLowerCase()}/`}
        >
          {ctaButton.buttonText}
        </StyledButton>
      </NavCtaWrapper>
      <StyledNav scrolled={scrolled}>
        <NavList>
          {navLinks &&
            navLinks.linkList.map(navItem => (
              <NavListItem
                isOnPage={
                  location ==
                  `/${slugify(
                    navItem.linkName.linkDestination.pageName
                  )}/`.toLowerCase()
                }
                scrolled={scrolled}
                key={navItem.linkName.linkName}
              >
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
            <Search scrolled={scrolled} />
          </NavListItem>
        </NavList>
      </StyledNav>
    </NavContainer>
  )
}

export default Nav
