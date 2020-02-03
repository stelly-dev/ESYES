import React from "react"
import { Link } from "gatsby"
import { FiSearch } from "react-icons/fi"
import Button from "../../pieces/Button"
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
          to={`/${slugify(ctaButton.buttonDestination.pageName).toLowerCase()}`}
        >
          {ctaButton.buttonText}
        </StyledButton>
      </NavCtaWrapper>
      <StyledNav>
        <NavList>
          {navLinks.map(link => (
            <NavListItem key={link.pageName}>
              <Link
                to={`/${slugify(link.linkDestination.pageName).toLowerCase()}`}
              >
                {link.linkName}
              </Link>
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
