import styled from "styled-components"
import { typography } from "styled-system"
import { Link } from "gatsby"
import Img from "gatsby-image"
import Container from "../../containers/Container"
import { FaQuoteLeft, FaChevronRight } from "react-icons/fa"

export const QuoteSection = styled.section``

export const QuoteText = styled.blockquote`
  padding-left: 40px;
  padding-top: 32px;
  font-weight: bold;
  font-style: italic;
  line-height: 25.6px;
  a {
    color: ${props => props.theme.colors.secondary};
    text-decoration: underline;
  }
  a:hover {
    color: ${props => props.theme.colors.primary};
  }
  @media only screen and (min-width: 1024px) {
    font-size: 20.4px;
    padding-left: 3.6vw;
    padding-top: 3.1vw;
    margin-bottom: 1.7vw;
    margin-top: 0.25vw;
  }
  @media only screen and (min-width: 1200px) {
    line-height: 1.4857;
    font-size: 1.7vw;
  }

  @media only screen and (min-width: 2000px) {
    margin-top: 5px;
    margin-bottom: 34px;
    max-width: 1316px;
    font-size: 34px;
    padding-top: 62px;
    padding-left: 72px;
  }
`

export const Centered = styled.span`
  text-align: center;
`

export const StyledChevron = styled(FaChevronRight)`
  vertical-align: center;
  padding-top: 4px;
`

export const ArticleLink = styled(Link)`
  ${typography}
  text-decoration: none;
  color: ${props => props.theme.colors.secondary};
  font-weight: bold;
  transition: color 250ms ease-in;
  display: inline-block;
  :visited {
    color: ${props => props.theme.colors.secondary};
  }
  :hover {
    color: ${props => props.theme.colors.primary};
  }
`

export const Slim = styled.span`
  font-weight: 300;
`

export const LeftQuote = styled(FaQuoteLeft)`
  font-size: 61px;
  line-height: 73px;
  position: absolute;
  color: ${props => props.theme.colors.secondary};
  opacity: 0.15;
  @media only screen and (min-width: 1024px) {
    font-size: 5.8vw;
  }
  @media only screen and (min-width: 2000px) {
    font-size: 124px;
  }
`

export const StyledImage = styled(Img)`
  max-width: 300px;
`
export const VideoWrapper = styled.div`
  position: relative;
  padding-bottom: 56.25%;
  height: 0;
  margin-bottom: 20px;
  iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
`

export const TextLink = styled(Link)`
  color: ${props => props.theme.colors.secondary};
  text-decoration: underline;
  :hover {
    color: ${props => props.theme.colors.black};
  }
`

export const BlockSection = styled.div`
  color: #333333;
  ul {
    list-style: none;
  }
  ul li:before {
    content: "·";
    margin-right: 1ch;
    vertical-align: center;
  }
  ul {
    li {
      margin-left: 3ch;
      text-indent: -1.5ch;
      padding-left: 1.5ch;
    }
  }

  @media only screen and (min-width: 2000px) {
    ${Container} ul:first-of-type {
      margin-top: 29px;
      margin-bottom: 50px;
    }
  }
`
