import React, { useEffect, useState } from "react"
import getYouTubeId from "get-youtube-id"
import styled from "styled-components"
import ReactPlayer from "react-player"
import YouTube from "react-youtube"
// import Container from "../../containers/Container"
import Grid from "../../containers/Grid"

const VideoWrapper = styled.div``
const YoutubeSection = props => {
  // const [state, setState] = useState({ width: null })
  // useEffect(() => {
  //   if (typeof window === "undefined") return
  //   const handleResize = () =>
  //     setState({
  //       ...state,
  //       width: window.innerWidth,
  //     })
  //   if (state.width === null) {
  //     handleResize()
  //   }
  //   if (state.width > 1200) {
  //     setState({ width: 1200 })
  //   }
  //   window.addEventListener("resize", handleResize, { passive: true })
  //   return () => {
  //     window.removeEventListener("resize", handleResize)
  //   }
  // }, [state])

  return (
    <Grid.Container marginTop={["3.7rem"]} marginBottom={["3.7rem"]}>
      <VideoWrapper>
        <ReactPlayer
          url={props.url}
          light={true}
          color={"blue"}
          config={{
            youtube: {
              embedOptions: {
                modestbranding: 1,
              },
            },
          }}
        />
        {/* <YouTube
          opts={{
            modestbranding: 1,
          }}
          videoId={getYouTubeId(props.url)}
        /> */}
      </VideoWrapper>
    </Grid.Container>
  )
}

export default YoutubeSection
