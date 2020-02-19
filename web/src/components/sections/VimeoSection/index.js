import React from "react"
import styled from "styled-components"
import Vimeo from "@u-wave/react-vimeo"
import getVideoId from "get-video-id"
import Container from "../../containers/Container"

const StyledVimeoSection = styled.section`
  display: flex;
  justify-content: center;
`

const VimeoSection = ({ url }) => {
  return (
    <Container>
      <StyledVimeoSection>
        <Vimeo video={url} />
      </StyledVimeoSection>
    </Container>
  )
}

export default VimeoSection
