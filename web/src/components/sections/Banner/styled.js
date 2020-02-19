import styled from "styled-components"
import Img from "gatsby-image"

export const BannerContainer = styled.section``

export const StyledBackgroundImage = styled(Img)`
  width: 100%;
  display: none;
  background-position: bottom center;
  background-size: contain;
  @media only screen and (min-width: 996px) {
    display: block;
  }
`
