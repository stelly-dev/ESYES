import React from "react"
import Img from "gatsby-image"
import styled from "styled-components"
import Container from "../../containers/Container"
import BlockContent from "@sanity/block-content-to-react"
import clientConfig from "../../../../client-config"
import YouTube from "react-youtube"
import Vimeo from "@u-wave/react-vimeo"
import getVideoId from "get-video-id"
import getYoutubeId from "get-youtube-id"
import { getFluidGatsbyImage } from "gatsby-source-sanity"

const VideoWrapper = styled.div`
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

const StyledImage = styled(Img)`
  max-width: 300px;
`
const StyledTwoColumnSection = styled.section`
  width: 100%;
  ${Container} {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr;
    grid-gap: 40px;
    div {
      width: 100%;
      ${StyledImage} {
        margin: 0 auto;
      }
    }
  }
  @media only screen and (min-width: 600px) {
    ${Container} {
      grid-template-columns: 1fr 1fr;
      grid-template-rows: 1fr;
    }
  }
`

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
        { maxWidth: "300px" },
        clientConfig.sanity
      )
      return (
        <StyledImage objectFit="contain" fluid={fluidProps} key={node._key} />
      )
    },
  },
}

const TwoColumn = props => (
  <StyledTwoColumnSection>
    <Container>
      <div>
        {/* <pre>{JSON.stringify(props, null, 2)}</pre> */}
        <BlockContent
          serializers={serializers}
          blocks={props.leftCol}
          {...clientConfig.sanity}
        />
      </div>
      <div>
        <BlockContent
          serializers={serializers}
          blocks={props.rightCol}
          {...clientConfig.sanity}
        />
      </div>
    </Container>
  </StyledTwoColumnSection>
)

export default TwoColumn
