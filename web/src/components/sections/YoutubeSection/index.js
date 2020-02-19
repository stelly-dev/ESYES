import React from "react"
import getYouTubeId from "get-youtube-id"
import styled from "styled-components"
import YouTube from "react-youtube"
import Container from "../../containers/Container"

const StyledYoutubeSection = styled.section`
  margin-top: 100px;
  display: flex;
  justify-content: center;
`

const YoutubeSection = props => {
  return (
    <Container>
      <StyledYoutubeSection>
        <YouTube videoId={getYouTubeId(props.url)} />
      </StyledYoutubeSection>
    </Container>
  )
}

export default YoutubeSection
