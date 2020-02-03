import styled from "styled-components"
import BackgroundImage from "gatsby-background-image"

export const BannerContainer = styled.div``

export const StyledBackgroundImage = styled(BackgroundImage)`
  height: 0;
  display: none;
  background-position: center 25%;
  @media only screen and (min-width: 996px) {
    display: block;
    height: 300px;
  }
`
