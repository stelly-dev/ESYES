import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
// Hover Menu Styles
export const Box = styled.div`
  display: none;
  /* transition: all 0.3s ease-in-out; */
`
export const BoxTriangle = styled.div`
  width: 60px;
  height: 15px;
  position: absolute;
  left: 50%;
  top: -19px;
  transform: translateX(-50%);
`

export const SvgTriangle = props => (
  <BoxTriangle>
    <svg width="60px" height="15px" viewBox="0 0 60 15">
      <polygon
        points="30,0 60,15 0,15 30,0"
        fill="white"
        strokeDasharray="33.541019 60 33.541019"
        stroke="#0ea6c6"
        strokeWidth="1px"
      />
    </svg>
  </BoxTriangle>
)

// Nav Menu Styles
export const NavContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  @media only screen and (min-width: 768px) {
    flex-direction: column;
    flex: 1 0 auto;
    align-items: flex-end;
    height: calc(150px - 3.5rem);
    padding-top: ${props => (props.scrolled ? "1rem" : 0)};
    margin-top: -1.25rem;
  }
  @media only screen and (min-width: 1024px) {
    height: ${props => (props.scrolled ? "6rem" : "7rem")};
    margin-top: -1rem;
  }
`

export const NavMenuButtonWrapper = styled.div`
  @media only screen and (min-width: 768px) {
    display: none;
  }
`

export const StyledButton = styled(Link)`
  text-decoration: none;
  background-color: ${props => props.theme.colors.primary};
  color: white;
  font-weight: bold;
  border-radius: 4px;
  font-size: ${props => (props.scrolled ? ".9rem" : "1rem")};
  padding: ${props => (props.scrolled ? "0.3rem 1.1rem" : "0.5rem 1.5rem")};
  border: 1px solid ${props => props.theme.colors.primary};
  transition: background-color 300ms ease-in-out;
  :visited {
    color: white;
  }
  :hover {
    background-color: white;
    color: ${props => props.theme.colors.primary};
  }
  @media only screen and (min-width: 768px) {
    padding: ${props => (props.scrolled ? ".4rem 1.1rem" : "0.5rem 1.5rem")};
  }
`
export const StyledNav = styled.nav`
  transition: width 300ms ease-in-out;
  @media only screen and (min-width: 768px) {
    width: 75px;
  }
  @media only screen and (min-width: 1024px) {
    width: ${props => (props.scrolled ? "700px" : "800px")};
  }
`

export const NavList = styled.ul`
  list-style: none;
  > li:not(:last-of-type) {
    display: none;
  }
  @media only screen and (min-width: 768px) {
    > li:nth-last-child(-n + 2) {
      display: inline-block;
    }
    > li:not(:nth-last-child(-n + 2)) {
      display: none;
    }
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  @media only screen and (min-width: 1024px) {
    > li:not(:nth-last-child(-n + 2)) {
      display: block;
    }
    > li:nth-last-child(2) {
      display: none;
    }
  }
`

export const NavListItem = styled.li`
  position: relative;
  a {
    color: ${props =>
      props.isOnPage ? props.theme.colors.secondary : props.theme.colors.black};
    text-decoration: none;
    font-size: ${props => (props.scrolled ? ".9rem" : "1.1rem")};
    position: relative;
    font-weight: ${props => (props.isOnPage ? "bold" : "normal")};
    z-index: 1;
    outline: none;
  }
  a:visited {
    color: ${props =>
      props.isOnPage ? props.theme.colors.secondary : props.theme.colors.black};
  }

  a:focus:after {
    width: 100%;
  }

  a::after {
    content: "";
    position: absolute;
    top: calc(100% + 4px);
    left: 50%;
    transform: translateX(-50%);
    height: 4px;
    background-color: ${props => props.theme.colors.secondary};
    width: 0%;
    transition: all 250ms ease-in-out;
  }
  a:hover:after {
    width: 100%;
  }
  :hover {
    a:after {
      width: 100%;
    }
    ${Box} {
      /* display: flex; */
      display: block;
      ${BoxTriangle} {
        position: absolute;
        left: 50%;
        /* transform: translateX(-50%); */
      }
      position: relative;
      padding: 1rem;
      justify-content: center;
      align-items: center;
      background-color: white;
      color: ${props => props.theme.colors.black};
      min-width: 15rem;
      /* min-width: 13.75vw;
      width: 13.75vw; */
      /* padding-top: 48px; */
      top: 3px;
      z-index: 100;
      left: 50%;
      transform: translateX(-50%);
      border: 1px solid ${props => props.theme.colors.secondary};
      font-size: 16px;
      ul {
        list-style: none;
        display: block;

        li {
          display: block;
          text-align: left;
          min-width: 100%;
        }
        li:first-of-type {
          margin-top: 0;
        }
        li:last-of-type {
          margin-bottom: 0;
        }
        li a {
          display: block;
          font-size: 1rem;
          line-height: 1.333;
          color: ${props => props.theme.colors.black};
          min-width: 100%;
          margin-right: auto;
          padding: 0.5rem 0;
        }
        li a:hover {
          text-decoration: underline;
          color: ${props => props.theme.colors.secondary};
        }
        li a:after {
          display: none;
        }
      }
    }
  }
  @media only screen and (min-width: 1024px) {
    font-size: 1rem;
  }
  /* @media only screen and (min-width: 1600px) {
    a {
      font-size: 20px;
    }
  } */
`
export const TagLine = styled.div`
  display: none;
  transition: font-size 300ms ease-in-out;
  @media only screen and (min-width: 1024px) {
    display: block;
    font-size: ${props => (props.scrolled ? "1rem" : "1.25rem")};
  }
`

export const NavCtaWrapper = styled.div`
  @media only screen and (min-width: 1024px) {
    display: flex;
    align-items: center;
    p {
      margin-right: 1rem;
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
