import React from "react"
import { getFluidGatsbyImage } from "gatsby-source-sanity"
import Block from "../Block/"
import Container from "../../containers/Container"
import { StyledSection, StyledImage, Article } from "./styled"
import clientConfig from "../../../../client-config"

const ImageLeftSection = props => {
  return (
    <StyledSection>
      <Container>
        <StyledImage
          fluid={getFluidGatsbyImage(
            props.image,
            { maxWidth: 568 },
            clientConfig.sanity
          )}
          alt={props.altText}
        />
        <Article>
          {props.features.map((feature, i) => (
            <div key={feature["_key"]}>
              <Block blocks={feature} />
            </div>
          ))}
        </Article>
      </Container>
    </StyledSection>
  )
}

export default ImageLeftSection
