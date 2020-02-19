import styled from "styled-components"
import { typography } from "styled-system"

export const H2 = styled.h2`
  ${typography}
  text-align: center;
  font-style: italic;
  font-weight: normal;

  @media only screen and (min-width: 1024px) {
    margin-top: 1.45vw;
    margin-bottom: 2.5vw;
  }

  @media only screen and (min-width: 2000px) {
    margin-top: 29px;
    margin-bottom: 50px;
  }
`
