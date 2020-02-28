import React from "react"
import styled from "styled-components"
import Grid from "../../containers/Grid"
import Img from "gatsby-image"
import { getFluidGatsbyImage } from "gatsby-source-sanity"
import clientConfig from "../../../../client-config"
import BlockContent from "@sanity/block-content-to-react"

const TwoColGrid = props => {
  console.log(props)
  console.log(clientConfig.sanity)
  return (
    <Grid.Container>
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
          <BlockContent blocks={props.features} />
        </Grid.Col>
      </Grid.Row>
    </Grid.Container>
  )
}

export default TwoColGrid
