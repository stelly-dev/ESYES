import styled from "styled-components"
import { SimpleCTAContainer } from "../sections/SimpleCTA/styled"

const Main = styled.main`
  padding-top: 222px;
  max-width: 100%;
  position: relative;
  transition: all 340ms ease-in-out;
  left: ${props => (props.isMenuOpen ? "100%" : 0)};
  z-index: 0;

  @media only screen and (min-width: 768px) {
    left: ${props => (props.isMenuOpen ? "450px" : 0)};
  }

  div ul {
    /* margin: -1.6rem 0; */
  }
  div ul li {
    /* margin-top: 1.6em
    margin-bottom: 1.6em; */
    line-height: 1.6;
    list-style-position: inside !important;
    font-size: 1em;
  }

  > ${SimpleCTAContainer} {
    margin-top: 10.48vw !important;
    margin-bottom: 8.87vw !important;
  }

  @media only screen and (min-width: 768px) {
    padding-top: 152px;
    div ul li {
      /* margin-top: 4.56vw;
      margin-bottom: 4.56vw;
      font-size: 2.08vw; */
    }
    > ${SimpleCTAContainer} {
      margin-top: 5.08vw !important;
      margin-bottom: 4.69vw !important;
    }
  }

  @media only screen and (min-width: 1024px) {
    padding-top: 160px;
    > ${SimpleCTAContainer} {
      margin-top: 1.6vw !important;
      margin-bottom: 2.5vw !important;
    }
    div ul li {
      /* font-size: 12px;
      margin-top: 14px;
      margin-bottom: 14px; */
    }
  }
  @media only screen and (min-width: 1200px) {
    div ul li {
      /* font-size: 1vw;
      margin-top: 2.2vw;
      margin-bottom: 2.2vw; */
    }
  }

  @media only screen and (min-width: 2000px) {
    div ul li {
      /* font-size: 20px;
      margin-top: 44px;
      margin-bottom: 44px; */
    }
  }
`
export default Main
