import styled from "styled-components"
import { typography } from "styled-system"

export const P = styled.p`
  ${typography};
  margin: 0 auto;
  margin-top: 36px;
  strong {
    color: ${props => props.theme.colors.secondary};
  }

  @media only screen and (min-width: 1024px) {
    margin-top: 2.25vw;
    max-width: 834px;
  }
  @media only screen and (min-width: 1200px) {
    max-width: 69.5vw;
  }
  @media only screen and (min-width: 2000px) {
    margin-top: 45px;
    max-width: 1390px;
  }
`
