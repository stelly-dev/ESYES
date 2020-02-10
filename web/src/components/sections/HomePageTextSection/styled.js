import styled from "styled-components"
import { Link } from "gatsby"

export const HPTextSection = styled.section`
  margin: 24px auto;
  font-size: 16px;
  line-height: 25.6px;

  p {
    margin-top: 36px;
    text-align: center;
  }
  @media only screen and (min-width: 600px) {
    margin-top: 43px;
  }
  @media only screen and (min-width: 1310px) {
    font-size: 20px;
    line-height: 34px;
    max-width: 1390px;
  }
`

export const H1 = styled.h1`
  text-align: center;
  font-style: italic;
  font-size: 22px;
  line-height: 30px;
  span {
    font-weight: 300;
    font-style: normal;
  }
  @media only screen and (min-width: 600px) {
    font-size: 30px;
    line-height: 41px;
  }
  @media only screen and (min-width: 1310px) {
    font-size: 65px;
    line-height: 85px;
  }
`

export const H2 = styled.h2`
  text-align: center;
  font-style: italic;
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
  @media only screen and (min-width: 1310px) {
    font-size: 22px;
    line-height: 27px;
  }
`

export const TextLink = styled(Link)`
  color: ${props => props.theme.colors.secondary};
  cursor: pointer;
  :hover {
    color: ${props => props.theme.colors.black};
  }
`
