import React from "react"
import styled from "styled-components"
import Button from "../../pieces/Button"
export const NavContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  @media only screen and (min-width: 600px) {
    flex-direction: column;
    align-items: flex-end;
    height: 100%;
  }
`

export const NavMenuButtonWrapper = styled.div`
  @media only screen and (min-width: 600px) {
    display: none;
  }
`

export const StyledButton = styled(Button)`
  border: 1px solid ${props => props.theme.colors.primary};
  transition: all 250ms ease-in;
  :hover {
    background-color: white;
    color: ${props => props.theme.colors.primary};
  }
`

export const StyledNav = styled.nav`
  @media only screen and (min-width: 600px) {
    width: 75px;
  }
  @media only screen and (min-width: 1650px) {
    width: 100%;
    max-width: 1105px;
  }
`

export const NavList = styled.ul`
  list-style: none;
  li:not(:last-of-type) {
    display: none;
  }
  @media only screen and (min-width: 600px) {
    li:nth-last-child(-n + 2) {
      display: inline-block;
    }
    li:not(:nth-last-child(-n + 2)) {
      display: none;
    }
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  @media only screen and (min-width: 1650px) {
    li:not(:nth-last-child(-n + 2)) {
      display: block;
    }
    li:nth-last-child(2) {
      display: none;
    }
  }
`

export const NavListItem = styled.li`
  a {
    color: ${props => props.theme.colors.black};
    text-decoration: none;
    font-size: 22px;
    position: relative;
  }
  a:visited {
    color: ${props => props.theme.colors.black};
  }

  a::after {
    content: "";
    position: absolute;
    top: calc(100% + 8px);
    left: 50%;
    transform: translateX(-50%);
    height: 5px;
    background-color: ${props => props.theme.colors.secondary};
    width: 0%;
    transition: all 250ms ease-in-out;
  }
  a:hover:after {
    width: 100%;
  }
`
export const TagLine = styled.div`
  display: none;
  @media only screen and (min-width: 1650px) {
    display: block;
  }
`

export const NavCtaWrapper = styled.div`
  @media only screen and (min-width: 1650px) {
    display: flex;
    align-items: center;
    font-size: 27px;
    p {
      margin-right: 27px;
    }
  }
`

export const NavContentContainer = styled.div`
  display: flex;
  align-items: center;
  font-size: 27px;
  p {
    margin-right: 27px;
  }
`
