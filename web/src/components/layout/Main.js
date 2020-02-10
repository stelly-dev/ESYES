import styled from "styled-components"

const Main = styled.main`
  max-width: 100%;
  position: relative;
  transition: all 340ms ease-in-out;
  left: ${props => (props.isMenuOpen ? "100%" : 0)};
  z-index: 0;
  > section:not(:first-of-type) {
    margin-bottom: 50px;
  }
  > section:last-of-type {
    padding-top: 50px;
  }

  @media only screen and (min-width: 600px) {
    left: ${props => (props.isMenuOpen ? "450px" : 0)};
  }

  @media only screen and (min-width: 1200px) {
    > section:not(:first-of-type) {
      margin-top: 100px;
      margin-bottom: 100px;
    }
    > section:last-of-type {
      padding-top: 100px;
    }
  }
`

export default Main
