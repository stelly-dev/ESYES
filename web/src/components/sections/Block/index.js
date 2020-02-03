import React from "react"
import BlockContent from "@sanity/block-content-to-react"
import Container from "../../containers/Container"
import { BlockSection, TextLink } from "./styled"
import styled from "styled-components"
import { typography } from "styled-system"
import slugify from "slugify"

const internalLink = ({ mark, children }) => {
  console.log("mark from internalLink", mark)
  const { reference = {} } = mark
  const to = `/${slugify(reference.pageName).toLowerCase()}/`
  return <TextLink to={to}>{children}</TextLink>
}

const H1 = styled.h1`
  ${typography};
  text-align: center;
  font-weight: 400;
`
const H2 = styled.h2`
  ${typography}
  font-weight: 400;
  text-align: center;
  font-style: italic;
`

const H3 = styled.h3`
  ${typography};
  margin-top: 2.4375rem;
  line-height: 1.75rem;
  font-weight: bold;
  color: ${props => props.theme.colors.primary};
`

const H4 = styled.h4`
  ${typography};
`

const H5 = styled.h5`
  ${typography};
`

const H6 = styled.h6`
  ${typography};
`

const P = styled.p`
  ${typography};
  margin-top: 2.8125rem;
  line-height: 1.6rem;
`

const center = props => {
  return <span style={{ textAlign: center }}>{props.children}</span>
}

const BlockRenderer = props => {
  const { style = "normal" } = props.node
  switch (style) {
    case "h1":
      return (
        <H1
          fontSize={[
            "1.414rem",
            "1.414rem",
            "1.999rem",
            "1.999rem",
            "2.827rem",
            "3.998rem",
          ]}
        >
          {props.children}
        </H1>
      )
    case "h2":
      return (
        <H2
          fontSize={[".875rem", ".875rem", "1rem", "1rem", "1.5rem", "1.5rem"]}
        >
          {props.children}
        </H2>
      )
    case "h3":
      return <H3 fontSize={["1.3125rem", "1.3125rem"]}>{props.children}</H3>
    case "h4":
      return <H4>{props.children}</H4>
    case "h5":
      return <H5>{props.children}</H5>
    case "h6":
      return <H6>{props.children}</H6>
    case "normal":
      return <P>{props.children}</P>
    default:
      return BlockContent.defaultSerializers.types.block(props)
  }
}

const Block = props => {
  return (
    <BlockSection>
      <Container>
        <BlockContent
          blocks={props}
          serializers={{
            marks: { center, internalLink },
            types: { block: BlockRenderer },
          }}
        />
        {/* {JSON.stringify(props, null, 2)} */}
      </Container>
    </BlockSection>
  )
}

export default Block
