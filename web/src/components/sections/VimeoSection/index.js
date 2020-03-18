import React from "react"
import styled from "styled-components"
import Vimeo from "@u-wave/react-vimeo"
import ReactPlayer from "react-player"
import getVideoId from "get-video-id"
import Grid from "../../containers/Grid"

const StyledVimeoSection = styled.section`
  display: flex;
  justify-content: center;
`

const VideoWrapper = styled.div`
  /* margin: 0 auto; */
  padding-top: 56.25%;
  position: relative;
  .react-player {
    position: absolute;
    top: 0;
    left: 0;
  }
`

const VimeoSection = ({ url }) => {
  return (
    <Grid.Container marginTop={["3.7rem"]} marginBottom={["3.7rem"]}>
      <VideoWrapper>
        <ReactPlayer
          className="react-player"
          url={url}
          controls={true}
          width="100%"
          height="100%"
        />
      </VideoWrapper>
    </Grid.Container>
    // <Container>
    //   <StyledVimeoSection>
    //     <Vimeo video={url} />
    //   </StyledVimeoSection>
    // </Container>
  )
}

export default VimeoSection
