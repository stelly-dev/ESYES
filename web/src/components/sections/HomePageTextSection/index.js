import React from "react"
import Container from "../../containers/Container"
import { HPTextSection, H1, H2, TextLink } from "./styled"
import BlockContent from "@sanity/block-content-to-react"
import clientConfig from "../../../../client-config"

const internalLink = ({ mark, children }) => {
  console.log("mark from internalLink", mark)
  const { slug = {} } = mark
  const to = `/${slug.current}/`
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
      {/* <pre>{JSON.stringify(props, null, 2)}</pre> */}
    </HPTextSection>
  )
}

export default HomePageTextSection
