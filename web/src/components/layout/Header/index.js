import React from "react"
import logo from "../../../images/eslogo-new-png@2x.png"
import Container from "../../containers/Container"
import Button from "../../pieces/Button"
import { StyledHeader, Logo, NavContainer, H1 } from "./styled"
import Nav from "./Nav"

const dummyLinks = [
  { title: "Home Energy Advising", to: "/home-energy-advising/" },
  { title: "Services", to: "/services/" },
  { title: "Rebates & Financing", to: "/rebates-and-financing/" },
  { title: "Español", to: "/español/" },
  { title: "About Us", to: "/about-us/" },
  { title: "Contact", to: "/contact/" },
]

const Header = () => {
  return (
    <StyledHeader>
      <Container>
        <Logo src={logo} />
        <NavContainer>
          <div>
            <H1>
              <span>Free </span>Home Energy Advising
            </H1>
            <Button
              to="/contact/"
              uppercase
              ml={"2rem"}
              bg="primary"
              px="4rem"
              py=".7rem"
              hoverBg=""
            >
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
