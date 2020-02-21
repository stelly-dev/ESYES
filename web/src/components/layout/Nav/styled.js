import React from "react"
import styled from "styled-components"
import Button from "../../pieces/Button"

// Hover Menu Styles
export const Box = styled.div`
  display: none;
  transition: all 0.3s ease-in-out;
`
export const BoxTriangle = styled.div`
  width: 60px;
  height: 15px;
  position: absolute;
  left: 50%;
  top: -17px;
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
    align-items: flex-end;
    height: 100%;
  }
`

export const NavMenuButtonWrapper = styled.div`
  @media only screen and (min-width: 768px) {
    display: none;
  }
`

export const StyledButton = styled(Button)`
  /* font-size: 16px !important; */
  border-radius: 0.2vw;
  @media only screen and (min-width: 1024px) {
    font-size: 1.1vw;
    width: 12.7vw;
    height: 2.75vw;
  }
  border: 1px solid ${props => props.theme.colors.primary};
  transition: all 250ms ease-in;
  :hover {
    background-color: white;
    color: ${props => props.theme.colors.primary};
  }

  @media only screen and (min-width: 2000px) {
    font-size: 22px;
    width: 254px;
    border-radius: 4px;
    height: 55px;
  }
`

export const StyledNav = styled.nav`
  @media only screen and (min-width: 768px) {
    width: 75px;
  }
  @media only screen and (min-width: 1024px) {
    width: 55.25vw;
  }
  @media only screen and (min-width: 2000px) {
    max-width: 1105px;
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
    color: ${props => props.theme.colors.black};
    text-decoration: none;
    /* font-size: 18px; */
    position: relative;
    z-index: 1;
  }
  a:visited {
    color: ${props => props.theme.colors.black};
  }

  a::after {
    content: "";
    position: absolute;
    top: calc(100% + 4px);
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
      padding: 1vw;
      justify-content: center;
      align-items: center;
      background-color: white;
      color: ${props => props.theme.colors.black};
      min-width: 13.75vw;
      width: 13.75vw;
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
          margin: 0.1vw 0;
        }
        li:first-of-type {
          margin-top: 0;
        }
        li:last-of-type {
          margin-bottom: 0;
        }
        li a {
          display: block;
          font-size: 0.9vw;
          line-height: 1.333;
          color: ${props => props.theme.colors.black};
          min-width: 100%;
          margin-right: auto;
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
    font-size: 1.1vw;
  }
  /* @media only screen and (min-width: 1600px) {
    a {
      font-size: 20px;
    }
  } */

  @media only screen and (min-width: 2000px) {
    a {
      font-size: 22px;
    }
  }
`
export const TagLine = styled.div`
  display: none;
  @media only screen and (min-width: 1024px) {
    display: block;
    font-size: 1.35vw;
  }

  @media only screen and (min-width: 2000px) {
    font-size: 27px;
  }
`

export const NavCtaWrapper = styled.div`
  @media only screen and (min-width: 1024px) {
    display: flex;
    align-items: center;
    font-size: 1.35vw;
    p {
      margin-right: 1.35vw;
    }
  }
  @media only screen and (min-width: 2000px) {
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
