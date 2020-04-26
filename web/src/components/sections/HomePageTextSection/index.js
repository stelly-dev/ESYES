import React from "react"
import Container from "../../containers/Container"
import { HPTextSection, H1, H2, TextLink } from "./styled"
import BlockContent from "@sanity/block-content-to-react"
import clientConfig from "../../../../client-config"
import slugify from "slugify"

const internalLink = ({ mark, children }) => {
  const { reference = {} } = mark
  const to = `/${slugify(reference.pageName).toLowerCase()}/`
  return <TextLink to={to}>{children}</TextLink>
}

const HomePageTextSection = props => {
  return (
    <HPTextSection>
      <Container>
        <H1>
          <span>{props.slimTitle}</span>
          <br />
          {props.boldTitle}
        </H1>
        <H2>{props.subTitle}</H2>
        <BlockContent
          blocks={props.text}
          serializers={{ marks: { internalLink } }}
          {...clientConfig.sanity}
        />
      </Container>
    </HPTextSection>
  )
}

export default HomePageTextSection
