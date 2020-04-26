import styled from "styled-components"
import Container from "../../containers/Container"
import Img from "gatsby-image"
import { Link } from "gatsby"
import { FaChevronRight } from "react-icons/fa"

export const StyledImage = styled(Img)`
  height: 71.51vw;
  margin: 0 auto;
  @media only screen and (min-width: 768px) {
    width: 46.22vw;
    height: 35.94vw;
  }
  @media only screen and (min-width: 1024px) {
  }
  @media only screen and (min-width: 2000px) {
  }
`

export const StyledSection = styled.section`
  @media only screen and (min-width: 768px) {
    > ${Container} {
      display: flex;
      justify-content: space-between;
      ${Container} {
        padding: 1rem;
      }
    }
  }
`

export const Article = styled.article`
  margin-bottom: 13.44vw;
  ${Container} {
    padding: 0;
  }
  @media only screen and (min-width: 768px) {
    margin-bottom: 6.58vw;
    width: 46.22vw;
    h3 {
      margin-top: 0;
    }
  }
`
export const ArticleLink = styled(Link)``

export const StyledChevron = styled(FaChevronRight)``
