import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import logo from "../../images/eslogo-new-png@2x.png"

const dummyLinks = [
  { title: "Home Energy Advising", to: "/home-energy-advising/" },
  { title: "Services", to: "/services/" },
  { title: "Rebates & Financing", to: "/rebates-and-financing/" },
  { title: "Español", to: "/español/" },
  { title: "About Us", to: "/about-us/" },
  { title: "Contact", to: "/contact/" },
]

const Logo = styled.img`
  box-sizing: border-box;
  width: ${props => props.theme.logo.width[0]}px;
  height: ${props => props.theme.logo.height[0]}px;
  @media only screen and (min-width: 1024px) {
    width: ${props => props.theme.logo.width[1]}px;
    height: ${props => props.theme.logo.height[1]}px;
  }
`

const StyledHeader = styled.header`
  background-color: ${props => props.theme.colors.white};
  box-shadow: ${props => props.theme.shadows.large};
  padding: 2rem;
`
const Container = styled.div`
  max-width: ${props => props.theme.sizes.maxWidth[0]};
  margin: 0 auto;
  display: flex;
  align-items: center;
  @media only screen and (min-width: 1024px) {
    max-width: ${props => props.theme.sizes.maxWidth[1]};
  }
`

const NavContainer = styled.div`
  display: flex;
  margin-left: auto;
`

const Button = styled.button`
  padding: ${props => (props.py ? props.py : 0)}rem
    ${props => (props.px ? props.px : 0)}rem
    ${props => (props.py ? props.py : 0)}rem
    ${props => (props.px ? props.px : 0)}rem;
  background-color: ${props => props.theme.colors[props.bg] || "red"};
  color: white;
  border: none;
  text-transform: ${props => (props.uppercase ? "uppercase" : "capitalize")};
  margin: ${props => (props.margin ? props.margin : 0)}rem;
  margin-left: ${props => (props.ml ? props.ml : 0)}rem;
  margin-right: ${props => (props.mr ? props.mr : 0)}rem;
  margin-top: ${props => (props.mt ? props.mt : 0)}rem;
  margin-bottom: ${props => (props.mb ? props.mb : 0)}rem;
`
const H1 = styled.h1``

const StyledNav = styled.nav`
  ul {
    display: flex;
    list-style: none;
    li a,
    li a:visited {
      color: ${props => props.theme.colors.black};
      font: 22px/30px Lato;
    }
  }
`

const Nav = ({ links }) => (
  <StyledNav>
    <ul>
      {links.map(link => (
        <li key={link.title}>
          <Link to={link.to}>{link.title}</Link>
        </li>
      ))}
    </ul>
  </StyledNav>
)

const Header = ({}) => {
  return (
    <StyledHeader>
      <Container>
        <Logo src={logo} />
        <NavContainer>
          <div>
            <h1>
              <span>Free </span>Home Energy Advising
            </h1>
            <Button to="/contact/" ml="2" bg="primary" px="3">
              Sign Up Today
            </Button>
          </div>
          <Nav links={dummyLinks} />
        </NavContainer>
      </Container>
    </StyledHeader>
  )
}

export default Header
