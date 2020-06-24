import React from "react"
import { getFluidGatsbyImage } from "gatsby-source-sanity"
import Container from "../../containers/Container"
import clientConfig from "../../../../client-config"
import { StyledBackgroundImage } from "./styled"

const Hero = props => {
  return (
    <StyledBackgroundImage
      fluid={getFluidGatsbyImage(
        props.image,
        { maxWidth: 1000 },
        clientConfig.sanity
      )}
      Tag="section"
    >
      <Container>
        <h1>{props.headline}</h1>
        {/* <div>
          <HeroButton to={props.buttonOne.to}>
            {props.buttonOne.text}
          </HeroButton>
          <HeroButton secondary="true" to={props.buttonTwo.to}>
            {props.buttonTwo.text}
          </HeroButton>
        </div> */}
      </Container>
    </StyledBackgroundImage>
  )
}

export default Hero
