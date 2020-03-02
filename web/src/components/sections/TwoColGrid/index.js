import React from "react"
import styled from "styled-components"
import Grid from "../../containers/Grid"
import Img from "gatsby-image"
import { getFluidGatsbyImage } from "gatsby-source-sanity"
import clientConfig from "../../../../client-config"
import Block from "../Block/"

const TwoColGrid = props => {
  return (
    <Grid.Container margin={["3rem auto", "3rem auto", "4rem auto"]}>
      <Grid.Row display={[null, null, "flex"]}>
        <Grid.Col flexBasis={["50%"]} marginRight={[null, null, "2rem"]}>
          <Img
            fluid={getFluidGatsbyImage(
              props.image,
              { maxWidth: 1200 },
              clientConfig.sanity
            )}
            alt={props.altText}
          />
        </Grid.Col>
        <Grid.Col flexBasis={["50%"]}>
          <Block blocks={props.features} />
        </Grid.Col>
      </Grid.Row>
    </Grid.Container>
  )
}

export default TwoColGrid
