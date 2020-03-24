import React from "react"
import styled from "styled-components"
import Grid from "../../containers/Grid"
import Img from "gatsby-image"
import { getFluidGatsbyImage } from "gatsby-source-sanity"
import clientConfig from "../../../../client-config"
import Block from "../Block/"

const Text = styled.div`
  @media only screen and (min-width: 768px) {
    h3 {
      margin-top: 0;
    }
  }
  @media only screen and (min-width: 1024px) {
    h3 {
      margin-top: inherit;
    }
  }
`

const StyledImage = styled(Img)`
  max-height: 442px;
  picture img {
    object-fit: contain;
  }
`

const TwoColGrid = props => {
  return (
    <Grid.Container margin={["3rem auto", "3rem auto", "4rem auto"]}>
      <Grid.Row display={[null, null, "flex"]}>
        <Grid.Col flexBasis={["50%"]} marginRight={[null, null, "2rem"]}>
          <StyledImage
            fluid={getFluidGatsbyImage(
              props.image,
              { maxWidth: 1200 },
              clientConfig.sanity
            )}
            alt={props.altText}
          />
        </Grid.Col>
        <Grid.Col flexBasis={["50%"]}>
          <Text>
            <Block blocks={props.features} />
          </Text>
        </Grid.Col>
      </Grid.Row>
    </Grid.Container>
  )
}

export default TwoColGrid
