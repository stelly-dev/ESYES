import styled from "styled-components"
import { Link } from "gatsby"

export const StyledHeader = styled.header`
  box-shadow: 0px 3px 6px #00000029;
  background-color: white;
  box-sizing: border-box;
  height: ${props => (props.scrolled ? "60px" : "222px")};
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  max-width: 100vw;
  z-index: 20;
  will-change: height, padding;
  > div {
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    height: 100%;
    padding-top: ${props => (props.scrolled ? ".5rem" : "1.5rem")};
    padding-bottom: ${props => (props.scrolled ? "1rem" : "1.5rem")};
    will-change: padding;
  }
  @media only screen and (min-width: 768px) {
    padding-top: ${props => (props.scrolled ? ".5rem" : "1.5rem")};
    height: ${props => (props.scrolled ? "120px" : "152px")};
    > div {
      flex-direction: row;
    }
  }
  @media only screen and (min-width: 1024px) {
    height: ${props => (props.scrolled ? "7rem" : "10rem")};
    > div {
      flex-direction: row;
    }
  }
`
export const LogoLink = styled(Link)``

export const LogoContainer = styled.div`
  /* transition: all 400ms ease-in-out; */
  opacity: ${props => (props.scrolled ? 0.5 : 1)};
  min-width: ${props => (props.scrolled ? 0 : "343px")};
  @media only screen and (min-width: 768px) {
    opacity: 1;
    min-width: ${props => (props.scrolled ? "300px" : "343px")};
    position: absolute;
    top: ${props => (props.scrolled ? "1rem" : "1.5rem")};
  }
  @media only screen and (min-width: 1024px) {
    top: ${props => (props.scrolled ? "1.3rem" : "1rem")};
    min-width: ${props => (props.scrolled ? "15rem" : "17rem")};
    max-height: auto;
  }
  @media only screen and (min-width: 1150px) {
    top: ${props => (props.scrolled ? "1.3rem" : "2rem")};
  }
`
