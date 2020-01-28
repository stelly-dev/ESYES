import styled from "styled-components"

const Main = styled.main`
  max-width: 100%;
  position: relative;
  left: ${props => (props.isMenuOpen ? "450px" : 0)};
  z-index: 0;
`

export default Main
