import React from "react"
import BlockContent from "@sanity/block-content-to-react"
import Container from "../../containers/Container"
import { BlockSection } from "./styled"
const Block = props => {
  return (
    <BlockSection>
      <Container>
        <BlockContent blocks={props} />
      </Container>
    </BlockSection>
  )
}

export default Block
