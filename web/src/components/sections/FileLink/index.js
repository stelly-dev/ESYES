import React from "react"
import styled from "styled-components"
import Grid from "../../containers/Grid"
import BlockButton from "../BlockButton/"

const StyledFileLink = styled.a`
  padding: 1rem 2rem;
  background-color: ${props => props.theme.colors.primary};
  color: white;
  border: 1px solid ${props => props.theme.colors.primary};
  text-decoration: none;
  font-weight: bold;
  margin: 0 auto;
  display: table;
  :hover {
    background-color: white;
    color: ${props => props.theme.colors.primary};
  }
`

const FileLink = props => {
  return (
    <Grid.Container>
      <StyledFileLink href={props.url}>{props.linkName}</StyledFileLink>
    </Grid.Container>
  )
}

export default FileLink
