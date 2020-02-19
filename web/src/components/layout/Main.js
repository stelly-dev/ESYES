import styled from "styled-components"
import Container from "../containers/Container"
import { SimpleCTAContainer } from "../sections/SimpleCTA/styled"

const Main = styled.main`
  max-width: 100%;
  position: relative;
  transition: all 340ms ease-in-out;
  left: ${props => (props.isMenuOpen ? "100%" : 0)};
  z-index: 0;


  @media only screen and (min-width: 600px) {
    left: ${props => (props.isMenuOpen ? "450px" : 0)};
  }


  div ul li {
    margin-top: 1.1vw; 
    margin-bottom: 1.1vw; 
  }
  div ul li {
    list-style-position: inside !important; 
  }

    > ${SimpleCTAContainer} {
      margin-top: 1.6vw !important;
      margin-bottom: 2.5vw !important;
    }
  }
`

export default Main
