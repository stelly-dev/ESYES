import React from "react"
import { graphql, StaticQuery } from "gatsby"
import { getFluidGatsbyImage } from "gatsby-source-sanity"
import Container from "../../containers/Container"
import clientConfig from "../../../../client-config"
import { HeroSection, HeroButton, StyledBackgroundImage } from "./styled"

const Hero = props => {
  // const query = graphql`
  //   query HeroImageQuery = {
  //     allSanityImageAsset(filter: {_id: {eq: ${props.image}}}){
  //       nodes {
  //         url
  //         localFile(width:2000){
  //           publicURL
  //           childImageSharp {
  //             fluid {
  //               tracedSVG
  //             }
  //           }
  //         }
  //       }
  //     }
  //   }
  // `
  return (
    // <StaticQuery
    //   query={}
    //   render={data => (
    //     <StyledBackgroundImage
    //       fluid={data.}
    //   )}
    //   />
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
