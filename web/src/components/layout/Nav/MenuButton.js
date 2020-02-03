import React from "react"
import styled from "styled-components"

const StyledMenuButton = styled.div`
  cursor: pointer;
  border: none;
  height: 16px;
  width: 22px;
  position: relative;
  > div {
    height: 2px;
    background-color: ${props => props.theme.colors.black};
    position: absolute;
    width: 100%;
  }
  > div:first-of-type {
    transition: all 350ms ease-in;
    transform: ${props =>
      props.isMenuOpen ? "translateY(-100%) rotate(-45deg)" : "rotate(0deg)"};
    top: ${props => (props.isMenuOpen ? "50%" : "0")};
  }
  > div:nth-of-type(2) {
    top: 50%;
    transform: translateY(-50%);
    transition: all 200ms ease-in;
    opacity: ${props => (props.isMenuOpen === true ? "0" : "1")};
  }
  > div:last-of-type {
    bottom: ${props => (props.isMenuOpen ? "50%" : 0)};
    transition: all 360ms ease-in;
    transform: ${props =>
      props.isMenuOpen ? "translateY(-50%) rotate(45deg)" : "rotate(0deg)"};
  }
`

const MenuButton = ({ isMenuOpen, toggleMenu }) => (
  <StyledMenuButton isMenuOpen={isMenuOpen} onClick={toggleMenu}>
    <div />
    <div />
    <div />
  </StyledMenuButton>
)

export default MenuButton
