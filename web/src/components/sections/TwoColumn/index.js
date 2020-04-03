import React from "react"
import styled from "styled-components"
import Block  from "../Block"
import Grid from "../../containers/Grid"

const Text = styled.div``


const TwoColumn = props => (
  <Grid.Container margin={["3rem auto", "3rem auto", "4rem auto"]}>
    <Grid.Row display={[null, null, "flex"]}>
      <Grid.Col flexBasis={["50%"]} marginRight={[null, null, "2rem"]}>
        <Block blocks={props.leftCol} />
      </Grid.Col>
      <Grid.Col flexBasis={["50%"]}>
        <Text>
          <Block blocks={props.rightCol} />
        </Text>
      </Grid.Col>
    </Grid.Row>
  </Grid.Container>
)

export default TwoColumn
