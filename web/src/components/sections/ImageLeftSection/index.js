import React from "react"
import Img from "gatsby-image"
import { getFluidGatsbyImage } from "gatsby-source-sanity"
import Container from "../../containers/Container"
import { StyledSection, StyledImage, Article } from "./styled"
import clientConfig from "../../../../client-config"
import BlockContent from "@sanity/block-content-to-react"

const ImageLeftSection = props => {
  return (
    <StyledSection>
      <Container>
        <StyledImage
          fluid={getFluidGatsbyImage(
            props.image,
            { maxWidth: "770px" },
            clientConfig.sanity
          )}
          alt={props.altText}
        />
        <Article>
          <h3>{props.title}</h3>
          {props.features.map((feature, i) => (
            <div key={feature["_key"]}>
              <strong>{feature.title}: </strong>
              <BlockContent blocks={feature.description} />
            </div>
          ))}
        </Article>
      </Container>
    </StyledSection>
  )
}

export default ImageLeftSection
