import styled from "styled-components"
import { typography, space } from "styled-system"

export const P = styled.p`
  ${typography};
  ${space};
  color: ${props => props.theme.colors.black};
  strong {
    color: ${props => props.theme.colors.secondary};
  }
`
