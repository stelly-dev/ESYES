import styled from "styled-components"
import { typography, space } from "styled-system"

export const H3 = styled.h3`
  ${space};
  ${typography};
  /* line-height: 1.75rem; */
  font-weight: bold;
  color: ${props => props.theme.colors.primary};
  font-style: italic;
  @media only screen and (min-width: 1024px) {
  }

  @media only screen and (min-width: 2000px) {
  }
`
