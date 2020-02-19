import styled from "styled-components"
import { typography } from "styled-system"

export const H3 = styled.h3`
  ${typography};
  margin-top: 2.4375rem;
  line-height: 1.75rem;
  font-weight: bold;
  color: ${props => props.theme.colors.primary};
  @media only screen and (min-width: 1024px) {
    line-height: 1.2888;
    margin-top: 2.2vw !important;
    margin-bottom: 1.2vw !important;
  }

  @media only screen and (min-width: 2000px) {
    margin-top: 44px !important;
    margin-bottom: 24px !important;
  }
`
