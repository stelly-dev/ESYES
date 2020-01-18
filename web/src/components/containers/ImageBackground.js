import styled from "styled-components"

const ImageBackground = styled.div`
  background-image: url(${props => props.image});
  background-size: cover;
  max-width: 100vw;
  width: 100%;
  overflow: hidden;
  height: 321px;
  @media only screen and (min-width: 768px) {
    height: 420px;
  }
  @media only screen and (min-width: 1024px) {
    height: calc(100vh - 143px);
  }
`

export default ImageBackground
