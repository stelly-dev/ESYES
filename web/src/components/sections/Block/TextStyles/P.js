import styled from "styled-components"
import { typography, space } from "styled-system"

export const P = styled.p`
  ${typography};
  margin: 0 auto;
  strong {
    color: ${props => props.theme.colors.secondary};
  }

  @media only screen and (min-width: 1024px) {
  }
  @media only screen and (min-width: 1200px) {
  }
  @media only screen and (min-width: 2000px) {
  }
`
