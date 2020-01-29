import styled from "styled-components"
import Container from "../../containers/Container"
import Img from "gatsby-image"

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
  h3 {
    color: ${props => props.theme.colors.primary};
    font-size: 21px;
    line-height: 28px;
  }
  strong {
    color: ${props => props.theme.colors.secondary};
  }
  p,
  strong {
    font-size: 16px;
    line-height: 25.6px;
    display: inline;
  }
  div {
    margin-top: 33px;
  }
  @media only screen and (min-width: 1310px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    p,
    strong {
      font-size: 20px;
      line-height: 34px;
    }
    h3 {
      font-size: 45px;
      line-height: 58px;
    }
  }
`
