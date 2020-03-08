import React from "react"
import Img from "gatsby-image"
import { getFluidGatsbyImage } from "gatsby-source-sanity"
import clientConfig from "../../../../client-config"
import styled from "styled-components"
import Grid from "../../containers/Grid"

const StyledImage = styled(Img)``

const BlockImage = ({ alt, img, url }) => (
  <Grid.Container>
    <StyledImage
      fluid={getFluidGatsbyImage(img, { maxWidth: 2400 }, clientConfig.sanity)}
      alt={alt}
    />
  </Grid.Container>
)

export default BlockImage
