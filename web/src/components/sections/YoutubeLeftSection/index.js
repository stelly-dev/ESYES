import React from "react"
import styled from "styled-components"
import YoutubeSection from "../YoutubeSection/"
import Container from "../../containers/Container"
import BlockContent from "@sanity/block-content-to-react"
import clientConfig from "../../../../client-config"

const YoutubeSectionContainer = styled.section``

const YoutubeLeftSection = props => (
  <YoutubeSectionContainer>
    <Container>
      <YoutubeSection url={props.url} />
      <BlockContent blocks={props.blocks} {...clientConfig.sanity} />
    </Container>
  </YoutubeSectionContainer>
)

export default YoutubeLeftSection
