import styled from "styled-components"

const ImageBackground = styled.div`
  background-image: url(${props => props.image});
  background-size: cover;
  max-width: 100vw;
  width: 100%;
  overflow: hidden;
  height: calc(100vh - 143px);
  margin: 0 auto;
`

export default ImageBackground
