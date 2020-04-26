import React from "react"
import BlockContent from "@sanity/block-content-to-react"
import Grid from "../../containers/Grid"
import clientConfig from "../../../../client-config"
import { getFluidGatsbyImage } from "gatsby-source-sanity"
import YouTube from "react-youtube"
import Vimeo from "@u-wave/react-vimeo"
import getYoutubeId from "get-youtube-id"
import { H1, H2, H3, H4, H5, H6, P } from "./TextStyles"
import { BlockSection, StyledImage, VideoWrapper } from "./styled"
import {
  internalLink,
  LocaleTextLink,
  link,
  telephone,
  fileLink,
  slim,
  chevronLink,
  Quote,
  center,
} from "./Marks"
const BlockRenderer = props => {
  const { style = "normal" } = props.node
  switch (style) {
    case "h1":
      return (
        <H1
          fontSize={["2.8125rem"]}
          lineHeight={["3.25rem"]}
          marginTop={["2.7rem", "2.7rem"]}
          marginBottom={["2.7rem"]}
        >
          {props.children}
        </H1>
      )
    case "h2":
      return (
        <H2
          fontSize={["1.2rem"]}
          lineHeight={[1.3333]}
          marginBottom={[null, null, null, "1.6rem"]}
        >
          {props.children}
        </H2>
      )
    case "h3":
      return (
        <H3 fontSize={["1.4rem"]} lineHeight={[1.6]} marginTop={["1.6rem"]}>
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
        <P
          lineHeight={"1.6"}
          fontSize={["1em"]}
          marginTop="1.6em"
          marginBottom="1.6em"
        >
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
      return (
        <VideoWrapper>
          <Vimeo video={url} key={node._key} />
        </VideoWrapper>
      )
    },
    image: ({ node }) => {
      const { asset } = node
      const fluidProps = getFluidGatsbyImage(
        asset["_id"],
        { maxWidth: 768 },
        clientConfig.sanity
      )
      return (
        <StyledImage
          style={{ margin: "0 auto 1.7rem auto" }}
          objectFit="contain"
          fluid={fluidProps}
          key={node._key}
        />
      )
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
              telephone,
              fileLink,
            },
            types: { block: BlockRenderer, ...serializers.types },
          }}
        />
      </Grid.Container>
    </BlockSection>
  )
}

export default Block
