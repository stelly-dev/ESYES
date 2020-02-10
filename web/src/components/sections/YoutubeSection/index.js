import React from "react"
import getYouTubeId from "get-youtube-id"
import YouTube from "react-youtube"

const YoutubeSection = props => {
  console.log("videoId", props.url, getYouTubeId(props.url))
  return <YouTube videoId={getYouTubeId(props.url)} />
}

export default YoutubeSection
