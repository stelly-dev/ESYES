import styled from "styled-components"
import Container from "../../containers/Container"
import Img from "gatsby-image"
import { Link } from "gatsby"
import { FaChevronRight } from "react-icons/fa"

export const StyledImage = styled(Img)`
  width: 100%;
`

export const StyledSection = styled.section`
  margin-top: 50px;
  ${Container} {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr auto;
    grid-gap: 40px;
  }
  @media only screen and (min-width: 720px) {
    ${Container} {
      grid-template-columns: 1fr 1fr;
      grid-template-rows: 1fr;
    }
  }
`

export const Article = styled.article`
  h3,
  h4 {
    color: ${props => props.theme.colors.primary};
  }
  h4 {
    font-style: italic;
  }
  h3 {
    font-size: 21px;
    line-height: 28px;
  }
  strong {
    color: ${props => props.theme.colors.secondary};
  }
  strong {
    font-size: 16px;
    line-height: 25.6px;
    display: inline;
  }
  div {
    margin-top: 33px;
  }
  p {
    line-height: 25.6px;
    color: ${props => props.theme.colors.black};
  }
  @media only screen and (min-width: 1310px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-left: 42px;
    p,
    strong {
      font-size: 20px;
      line-height: 34px;
    }
    h3 {
      font-size: 45px;
      line-height: 58px;
    }
    h4 {
      font-size: 35px;
      line-height: 57px;
    }
  }
`

export const ArticleLink = styled(Link)`
  text-decoration: none;
  color: ${props => props.theme.colors.secondary};
  font-weight: 800;
  font-size: 18px;
  line-height: 23px;
  transition: color 250ms ease-in;
  :visited {
    color: ${props => props.theme.colors.secondary};
  }
  :hover {
    color: ${props => props.theme.colors.primary};
  }
  @media only screen and (min-width: 1310px) {
    font-size: 27px;
    line-height: 33px;
  }
`

export const StyledChevron = styled(FaChevronRight)`
  vertical-align: center;
  padding-top: 4px;
`
