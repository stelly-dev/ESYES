import styled from "styled-components"

const Container = styled.div`
  max-width: ${props => props.theme.sizes.maxWidth[0]};
  margin: 0 auto;
  display: flex;
  height: 100%;
  align-items: center;
  @media only screen and (min-width: 1024px) {
    max-width: ${props => props.theme.sizes.maxWidth[1]};
  }
`

export default Container
