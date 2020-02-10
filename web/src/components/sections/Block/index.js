import React from "react"
import { Link } from "gatsby"
import BlockContent from "@sanity/block-content-to-react"
import Container from "../../containers/Container"
import { BlockSection, TextLink } from "./styled"
import styled from "styled-components"
import { typography } from "styled-system"
import slugify from "slugify"
import { FaQuoteLeft, FaChevronRight } from "react-icons/fa"

const LeftQuote = styled(FaQuoteLeft)`
  font-size: 61px;
  line-height: 73px;
  position: absolute;
  color: ${props => props.theme.colors.secondary};
  opacity: 0.15;
  @media only screen and (min-width: 992px) {
    font-size: 84px;
  }
  @media only screen and (min-width: 1600px) {
    font-size: 124px;
  }
`

const internalLink = ({ mark, children }) => {
  const { reference = {} } = mark
  const to = `/${slugify(reference.pageName).toLowerCase()}/`
  return <TextLink to={to}>{children}</TextLink>
}

export const ArticleLink = styled(Link)`
  text-decoration: none;
  color: ${props => props.theme.colors.secondary};
  font-weight: bold;
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
    font-size: 18px;
    line-height: 33px;
  }
`

export const StyledChevron = styled(FaChevronRight)`
  vertical-align: center;
  padding-top: 4px;
`
const chevronLink = ({ mark, children }) => {
  const { reference = {} } = mark
  const to = `/${slugify(reference.pageName).toLowerCase()}/`
  return (
    <ArticleLink to={to}>
      {children}
      <StyledChevron />
    </ArticleLink>
  )
}

const H1 = styled.h1`
  ${typography};
  text-align: center;
  font-weight: 400;
`
const H2 = styled.h2`
  ${typography}
  font-weight: 400;
  text-align: center;
  font-style: italic;
`

const H3 = styled.h3`
  ${typography};
  margin-top: 2.4375rem;
  line-height: 1.75rem;
  font-weight: bold;
  color: ${props => props.theme.colors.primary};
`

const H4 = styled.h4`
  ${typography};
  color: ${props => props.theme.colors.primary};
  font-style: italic;
  a {
    color: ${props => props.theme.colors.primary};
  }
  a:hover {
    color: ${props => props.theme.colors.secondary};
  }
`

const H5 = styled.h5`
  ${typography};
`

const H6 = styled.h6`
  ${typography};
`

const P = styled.p`
  ${typography};
  margin-top: 35px;
`

const QuoteSection = styled.section``

const QuoteText = styled.blockquote`
  padding-left: 40px;
  padding-top: 32px;
  font-weight: bold;
  font-style: italic;
  line-height: 25.6px;
  a {
    color: ${props => props.theme.colors.black};
  }
  a:hover {
    color: ${props => props.theme.colors.secondary};
  }
  @media only screen and (min-width: 992px) {
    padding-left: 65px;
    padding-top: 55px;
    font-size: 1.333rem;
  }
  @media only screen and (min-width: 1600px) {
    font-size: 2.124rem;
    line-height: 1.4;
    padding-top: 70px;
    padding-left: 80px;
  }
`

const Quote = props => {
  return (
    <QuoteSection>
      <LeftQuote />
      <QuoteText>{props.children}</QuoteText>
    </QuoteSection>
  )
}

const center = props => {
  return <span style={{ textAlign: center }}>{props.children}</span>
}

const BlockRenderer = props => {
  const { style = "normal" } = props.node
  switch (style) {
    case "h1":
      return (
        <H1
          fontSize={[
            "1.414rem",
            "1.414rem",
            "1.999rem",
            "1.999rem",
            "2.827rem",
            "3.998rem",
          ]}
        >
          {props.children}
        </H1>
      )
    case "h2":
      return (
        <H2
          fontSize={[".875rem", ".875rem", "1rem", "1rem", "1.2rem", "1.2rem"]}
        >
          {props.children}
        </H2>
      )
    case "h3":
      return (
        <H3
          fontSize={[
            "1.333rem",
            "1.333rem",
            "1.777rem",
            "1.777rem",
            "1.777rem",
            "2.5rem",
          ]}
        >
          {props.children}
        </H3>
      )
    case "h4":
      return (
        <H4
          fontSize={[
            "1.2rem",
            "1.2rem",
            "1.333rem",
            "1.333rem",
            "1.333rem",
            "2.124rem",
          ]}
          lineHeight={["1.425"]}
        >
          {props.children}
        </H4>
      )
    case "h5":
      return <H5>{props.children}</H5>
    case "h6":
      return <H6>{props.children}</H6>
    case "blockquote":
      return <Quote>{props.children}</Quote>
    case "normal":
      return (
        <P
          lineHeight={"1.625"}
          fontSize={["18px", "18px", "18px", "18px", "18px", "20px"]}
        >
          {props.children}
        </P>
      )
    default:
      return BlockContent.defaultSerializers.types.block(props)
  }
}

const Block = props => {
  return (
    <BlockSection>
      <Container>
        <BlockContent
          blocks={props}
          serializers={{
            marks: { center, internalLink, chevronLink },
            types: { block: BlockRenderer },
          }}
        />
        {/* {JSON.stringify(props, null, 2)} */}
      </Container>
    </BlockSection>
  )
}

export default Block
