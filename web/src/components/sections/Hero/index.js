import React from "react"
import styled from "styled-components"
import Container from "../../containers/Container"

const HeroTitle = styled.h1``
const BackgroundImage = styled.div``

// const query = graphql`
//     query HeroQuery {
//         sanityPageHero {

//         }
//     }
// `

const HeroSection = styled.section`
  width: 100%;
  height: 100vh;
  background-image: url(${props => props.image});
`

const Hero = props => {
  return <img src={props.image} />
}

export default Hero
