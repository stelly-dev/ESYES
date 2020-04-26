import styled from "styled-components"
import { typography, space } from "styled-system"

export const H3 = styled.h3`
  ${space};
  ${typography};
  font-weight: bold;
  color: ${props => props.theme.colors.primary};
  font-style: italic;
`
