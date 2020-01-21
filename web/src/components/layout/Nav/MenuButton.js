import React from "react"
import styled from "styled-components"

const StyledMenuButton = styled.div`
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
    top: 0;
  }
  > div:nth-of-type(2) {
    top: 50%;
    transform: translateY(-50%);
  }
  > div:last-of-type {
    bottom: 0;
  }
`

const MenuButton = ({ isMenuOpen, toggleMenu }) => (
  <StyledMenuButton>
    <div />
    <div />
    <div />
  </StyledMenuButton>
)

export default MenuButton
