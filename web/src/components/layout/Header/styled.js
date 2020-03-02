import styled from "styled-components"
import { Link } from "gatsby"

export const StyledHeader = styled.header`
  box-shadow: 0px 3px 6px #00000029;
  background-color: white;
  box-sizing: border-box;
  height: ${props => (props.scrolled ? "60px" : "222px")};
  position: fixed;
  transition: height 200ms ease-in;
  top: 0;
  left: 0;
  right: 0;
  max-width: 100vw;
  z-index: 1;
  > div {
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    height: 100%;
    padding-top: 1.75vw;
    padding-bottom: 1.75vw;
  }
  @media only screen and (min-width: 768px) {
    height: ${props => (props.scrolled ? "120px" : "152px")};
    > div {
      flex-direction: row;
    }
  }
  @media only screen and (min-width: 1024px) {
    height: ${props => (props.scrolled ? "150px" : "195px")};
    > div {
      flex-direction: row;
    }
  }
  @media only screen and (min-width: 2000px) {
    height: 195px;
    > div {
      padding: 35px 0;
    }
  }
`

export const LogoContainer = styled(Link)`
  transition: min-width 200ms ease-in;
  min-width: ${props => (props.scrolled ? 0 : "343px")};
  @media only screen and (min-width: 768px) {
    min-width: ${props => (props.scrolled ? "200px" : "343px")};
  }
  @media only screen and (min-width: 1024px) {
    min-width: ${props => (props.scrolled ? "17vw" : "19.8vw")};
    margin-right: 8.6vw;
    max-height: auto;
  }
  @media only screen and (min-width: 2000px) {
    max-width: 396px;
    max-height: 118px;
    min-width: 396px;
  }
`
