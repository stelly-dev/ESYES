import styled from "styled-components"

export const Logo = styled.img`
  width: ${props => props.theme.logo.width[0]}px;
  height: ${props => props.theme.logo.height[0]}px;
  @media only screen and (min-width: 1024px) {
    width: ${props => props.theme.logo.width[1]}px;
    height: ${props => props.theme.logo.height[1]}px;
  }
`

export const StyledHeader = styled.header`
  background-color: ${props => props.theme.colors.white};
  box-shadow: ${props => props.theme.shadows.large};
  position: relative;
  z-index: 1000;
`

export const NavContainer = styled.div`
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

export const H1 = styled.h1`
  margin: 0;
  font: normal 27px/33px Lato;
  span {
    font-weight: 600;
  }
`

export const StyledNav = styled.nav`
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
