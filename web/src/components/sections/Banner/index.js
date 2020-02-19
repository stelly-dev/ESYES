import React from "react"
import { BannerContainer, StyledBackgroundImage } from "./styled"
import { getFluidGatsbyImage } from "gatsby-source-sanity"
import clientConfig from "../../../../client-config"

const Banner = props => (
  <BannerContainer>
    <StyledBackgroundImage
      fluid={getFluidGatsbyImage(
        props.image,
        { maxWidth: 2000 },
        clientConfig.sanity
      )}
    ></StyledBackgroundImage>
  </BannerContainer>
)

export default Banner
