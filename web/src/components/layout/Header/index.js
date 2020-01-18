import React from "react"
import styled from "styled-components"
import Container from "../../containers/Container"
import logo from "../../../images/eslogo-new-png@2x"
import { Link, graphql } from "gatsby"
import Img from "gatsby-image"

const LogoWrapper = styled(Link)``

const Nav = styled.nav``

const Logo = styled(Image)
const Header = ({ isMenuOpen, toggleMenu }) => (
  <StyledHeader>
    <Container>
      <LogoWrapper>
        <Logo src={logo} />
      </LogoWrapper>

      <NavContainer>
        <Nav />
        <NavButton />
      </NavContainer>
      <Button primary to="/contact/">
        Sign Up Today!
      </Button>
      <Search />
    </Container>
  </StyledHeader>
)

export default Header
