import React, { useEffect, useState } from "react"
import getYouTubeId from "get-youtube-id"
import styled from "styled-components"
import ReactPlayer from "react-player"
import YouTube from "react-youtube"
import Grid from "../../containers/Grid"

const VideoWrapper = styled.div`
  padding-top: 56.25%;
  position: relative;
  .react-player {
    position: absolute;
    top: 0;
    left: 0;
  }
`
const YoutubeSection = props => {
  const [playing, setPlaying] = React.useState(false); 
  return (
    <Grid.Container marginTop={["3.7rem"]} marginBottom={["3.7rem"]}>
      <VideoWrapper>
        <ReactPlayer
          url={props.url}
          playing={playing}
          onClick={() => setPlaying(!playing)} 
          width="100%"
          height="100%"
          className="react-player"
          light={props.image}
          config={{
            youtube: {
              embedOptions: {
                modestbranding: 1,
              },
            },
          }}
        />
      </VideoWrapper>
    </Grid.Container>
  )
}

export default YoutubeSection
