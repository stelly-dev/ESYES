import React from "react"
import styled, { css } from "styled-components"
import { typography, space } from "styled-system"
import Grid from "../../containers/Grid"

const typographyProps = css`
  ${space};
  ${typography};
  font-weight: ${props => (props.bold ? "bold" : "normal")};
  color: ${props => props.color};
  text-align: ${props => props.alignment || "left"};
  font-style: ${props => (props.italic ? "italic" : "normal")};
`

const Title = styled.span`
  display: block;
  ${typographyProps};
`

const titles = {
  h1: {
    fontSize: ["2.8125rem"],
    lineHeight: ["3.25rem"],
    marginTop: ["2.7rem"],
    marginBottom: ["2.7rem"],
  },
  h2: {
    fontSize: ["1.2rem"],
    lineHeight: [1.3333],
    marginBottom: [null, null, null, "1.6rem"],
    marginTop: ["1.6rem"],
  },
  h3: {
    fontSize: ["1.4rem"],
    lineHeight: [1.6],
    marginTop: "1.6rem",
  },
  h4: {
    fontSize: ["1.5rem"],
    lineHeight: ["1.485714"],
  },
  normal: {
    lineHeight: ["1.6"],
    fontSize: ["1em"],
    marginTop: "1.6em",
    marginBottom: "1.6em",
  },
}

const TitleRenderer = props => {
  const { tag, title, ...rest } = props
  return (
    <Title as={tag != "normal" ? tag : "p"} {...titles[tag]} {...rest}>
      {title}
    </Title>
  )
}

const CustomTitle = ({ title, ...props }) => {
  console.log(props)
  return (
    <Grid.Container>
      <Title {...props} {...titles[props.tag]}>
        {title}
      </Title>
    </Grid.Container>
  )
}

export default CustomTitle
