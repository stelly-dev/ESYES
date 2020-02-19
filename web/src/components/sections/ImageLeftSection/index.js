import React from "react"
import Img from "gatsby-image"
import { getFluidGatsbyImage } from "gatsby-source-sanity"
import Block from "../Block/"
import Container from "../../containers/Container"
import {
  StyledSection,
  StyledImage,
  Article,
  ArticleLink,
  StyledChevron,
} from "./styled"
import clientConfig from "../../../../client-config"
import BlockContent from "@sanity/block-content-to-react"
import slugify from "slugify"

const internalLink = ({ mark, children }) => {
  const { reference = {} } = mark
  const to = `/${slugify(reference.pageName).toLowerCase()}/`
  return (
    <ArticleLink to={to}>
      {children}
      <StyledChevron />
    </ArticleLink>
  )
}

const fileLink = ({ mark, children }) => {
  const { reference = {} } = mark
  return (
    <ArticleLink as="a" href={mark.reference.file.asset.url}>
      {children}
      <StyledChevron />
    </ArticleLink>
  )
}

const ImageLeftSection = props => {
  return (
    <StyledSection>
      <Container>
        <StyledImage
          fluid={getFluidGatsbyImage(
            props.image,
            { maxWidth: 600 },
            clientConfig.sanity
          )}
          alt={props.altText}
        />
        <Article>
          {props.features.map((feature, i) => (
            <div key={feature["_key"]}>
              {/* <pre>{JSON.stringify(feature, null, 2)}</pre> */}
              {/* <BlockContent
                blocks={feature}
                serializers={{ marks: { internalLink, fileLink } }}
                {...clientConfig.sanity} */}
              <Block blocks={feature} />
            </div>
          ))}
        </Article>
      </Container>
    </StyledSection>
  )
}

export default ImageLeftSection
