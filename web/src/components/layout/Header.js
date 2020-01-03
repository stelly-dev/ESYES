import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import logo from "../../images/eslogo-new-png@2x.png"
import { FiSearch } from "react-icons/fi"

const dummyLinks = [
  { title: "Home Energy Advising", to: "/home-energy-advising/" },
  { title: "Services", to: "/services/" },
  { title: "Rebates & Financing", to: "/rebates-and-financing/" },
  { title: "Español", to: "/español/" },
  { title: "About Us", to: "/about-us/" },
  { title: "Contact", to: "/contact/" },
]

const Logo = styled.img`
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
`
const Container = styled.div`
  max-width: ${props => props.theme.sizes.maxWidth[0]};
  margin: 0 auto;
  display: flex;
  height: 100%;
  align-items: center;
  @media only screen and (min-width: 1024px) {
    max-width: ${props => props.theme.sizes.maxWidth[1]};
  }
`

const NavContainer = styled.div`
  margin: 0;
  min-height: 100%;
  padding: 1rem 0 0;
  margin-left: auto;
  > div {
    margin-bottom: 1.75rem;
    display: flex;
    align-items: center;
    justify-content: flex-end;
  }
`

const Button = styled.button`
  height: 0%; // needed to prevent flex grow
  border-radius: 4px;
  text-transform: ${props => (props.uppercase ? "uppercase" : "capitalize")};
  font: bold 22px/30px Lato;
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
const H1 = styled.h1`
  margin: 0;
  font: normal 27px/33px Lato;
  span {
    font-weight: bold;
  }
`

const StyledNav = styled.nav`
  ul {
    width: 100%;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    margin-left: auto;
    padding: 0;
    margin: 0;
    margin-bottom: 0.75rem;
    li {
      list-style: none;
      padding: 0;
      margin: 0;
    }
    li a {
      width: 100%;
      height: 100%;
      margin: 0 1.75rem;
      position: relative;
    }
    li a:before {
      content: "";
      position: absolute;
      width: 100%;
      height: 5px;
      bottom: -5px;
      left: 50%;
      background-color: ${props => props.theme.colors.secondary[0]};
      transform: translateX(-50%) scaleX(0);
      filter: hue-rotate(-300deg) opacity(0.23);
      transition: all 0.3s ease-in-out 0s;
    }
    li a:hover:before {
      transform: translateX(-50%) scaleX(1);
      filter: hue-rotate(30deg) opacity(1);
    }

    li a,
    li a:visited {
      color: ${props => props.theme.colors.black};
      font: 22px/30px Lato;
      text-decoration: none;
    }
  }
`

const Search = () => {
  const [searchTerm, setSearchTerm] = React.useState("")

  return (
    <FiSearch
      style={{
        width: 22,
        height: 22,
      }}
    />
  )
}

const Nav = ({ links }) => (
  <StyledNav>
    <ul>
      {links.map(link => (
        <li key={link.title}>
          <Link to={link.to}>{link.title}</Link>
        </li>
      ))}
      <li>
        <Search />
      </li>
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
            <H1>
              <span>Free </span>Home Energy Advising
            </H1>
            <Button to="/contact/" uppercase ml={2} bg="primary" px="4" py=".7">
              Sign Up Today!
            </Button>
          </div>
          <Nav links={dummyLinks} />
        </NavContainer>
      </Container>
    </StyledHeader>
  )
}

export default Header
