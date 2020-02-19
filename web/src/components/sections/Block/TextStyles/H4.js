import styled from "styled-components"
import { typography } from "styled-system"

export const H4 = styled.h4`
  ${typography};
  color: ${props => props.theme.colors.primary};
  font-style: italic;
  a {
    text-decoration: underline;
    color: ${props => props.theme.colors.primary};
  }
  a:hover {
    color: ${props => props.theme.colors.secondary};
  }

  @media only screen and (min-width: 1024px) {
    margin-top: 1.3vw !important;
    margin-bottom: 1.75vw !important;
  }

  @media only screen and (min-width: 2000px) {
    margin-top: 26px !important;
    margin-bottom: 35px !important;
  }
`
