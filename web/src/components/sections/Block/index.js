import React from "react"
import { Link } from "gatsby"
import BlockContent from "@sanity/block-content-to-react"
import Grid from "../../containers/Grid"
import { BlockSection, TextLink } from "./styled"
import styled from "styled-components"
import { typography } from "styled-system"
import slugify from "slugify"
import { FaQuoteLeft, FaChevronRight } from "react-icons/fa"
import clientConfig from "../../../../client-config"
import { getFluidGatsbyImage } from "gatsby-source-sanity"
import YouTube from "react-youtube"
import Vimeo from "@u-wave/react-vimeo"
import getVideoId from "get-video-id"
import getYoutubeId from "get-youtube-id"
import Img from "gatsby-image"
import { H1, H2, H3, H4, H5, H6, P } from "./TextStyles"

export const StyledImage = styled(Img)`
  /* max-width: 300px; */
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

const LeftQuote = styled(FaQuoteLeft)`
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

const linebreak = ({ mark, children }) => {
  return <br />
}

const internalLink = ({ mark, children }) => {
  const { reference = {} } = mark
  const to = `/${slugify(reference.pageName).toLowerCase()}/`
  return <TextLink to={to}>{children}</TextLink>
}

const link = ({ mark, children }) => {
  const { href = "" } = mark
  return (
    <TextLink as="a" href={href}>
      {children}
    </TextLink>
  )
}

const phone = ({ mark, children }) => {
  const { number = "" } = mark
  return (
    <TextLink as="a" href={`tel:${number}`}>
      {children}
    </TextLink>
  )
}

const fileLink = ({ mark, children }) => {
  const { href = "" } = mark
  return (
    <TextLink as="a" href={href}>
      {children}
    </TextLink>
  )
}

const Slim = styled.span`
  font-weight: 300;
`

const slim = props => {
  return <Slim>{props.children}</Slim>
}

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

export const StyledChevron = styled(FaChevronRight)`
  vertical-align: center;
  padding-top: 4px;
`
const chevronLink = ({ mark, children }) => {
  const { reference = {} } = mark
  const to = `/${slugify(reference.pageName).toLowerCase()}/`
  return (
    <>
      <ArticleLink
        to={to}
        fontSize={["4.3vw", "4.3vw", "2.08vw", "14px", "1.25vw", "20px"]}
      >
        {children}
        <StyledChevron />
      </ArticleLink>
    </>
  )
}

const QuoteSection = styled.section``

const QuoteText = styled.blockquote`
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

const Quote = props => {
  return (
    <QuoteSection>
      <LeftQuote />
      <QuoteText>{props.children}</QuoteText>
    </QuoteSection>
  )
}
const Centered = styled.p`
  text-align: center;
`

const center = props => {
  return <Centered>{props.children}</Centered>
}

const BlockRenderer = props => {
  const { style = "normal" } = props.node
  switch (style) {
    case "h1":
      return (
        <H1
          margin={[".67em 0"]}
          fontSize={["1.6rem", "1.5rem", "3rem"]}
          lineHeight={[1.6]}
        >
          {props.children}
        </H1>
      )
    case "h2":
      return (
        <H2 fontSize={["1.2rem"]} lineHeight={[1.6]}>
          {props.children}
        </H2>
      )
    case "h3":
      return (
        <H3 fontSize={["1.4rem"]} lineHeight={[1.6]}>
          {props.children}
        </H3>
      )
    case "h4":
      return (
        <H4 fontSize={["1.5rem"]} lineHeight={["1.485714"]}>
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
        <P lineHeight={"1.7"} fontSize={["1rem"]}>
          {props.children}
        </P>
      )

    default:
      return BlockContent.defaultSerializers.types.block(props)
  }
}

const serializers = {
  types: {
    youtube: ({ node }) => {
      const { url } = node
      const id = getYoutubeId(url)
      return (
        <VideoWrapper>
          <YouTube videoId={id} key={node._key} />
        </VideoWrapper>
      )
    },
    vimeo: ({ node }) => {
      const { url } = node
      const id = getVideoId(url)
      return (
        <VideoWrapper>
          <Vimeo video={url} key={node._key} />
        </VideoWrapper>
      )
    },
    image: ({ node }) => {
      const { asset } = node
      const imageId = asset["_id"]
      const fluidProps = getFluidGatsbyImage(
        asset["_id"],
        { maxWidth: 768 },
        clientConfig.sanity
      )
      return (
        <StyledImage objectFit="contain" fluid={fluidProps} key={node._key} />
      )
    },
    linebreak: ({ node }) => {
      return <br />
    },
  },
}

const Block = props => {
  return (
    <BlockSection>
      <Grid.Container>
        <BlockContent
          blocks={props.blocks || props}
          serializers={{
            marks: {
              slim,
              center,
              link,
              internalLink,
              chevronLink,
              phone,
              fileLink,
            },
            types: { block: BlockRenderer, ...serializers.types },
          }}
        />
        {/* <pre>{JSON.stringify(props, null, 2)}</pre> */}
      </Grid.Container>
    </BlockSection>
  )
}

export default Block
