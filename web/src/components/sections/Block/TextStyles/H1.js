import styled from "styled-components"
import { typography } from "styled-system"

export const H1 = styled.h1`
  ${typography};
  text-align: center;
  font-weight: 400;
  line-height: 1.307;
  margin: 0 auto;
  margin-top: 26px;
  margin-bottom: 18px;
  @media only screen and (min-width: 768px) {
    margin-top: 43px;
    margin-bottom: 16px;
  }
  @media only screen and (min-width: 1024px) {
    max-width: 60.5vw;
    margin-top: 4.75vw;
    margin-bottom: 1.5vw;
  }
  @media only screen and (min-width: 2000px) {
    max-width: 1210px;
    margin-top: 95px;
    margin-bottom: 30px;
  }
`
