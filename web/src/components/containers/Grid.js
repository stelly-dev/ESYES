import React from "react"
import styled from "styled-components"
import { space, layout, flexbox, position } from "styled-system"

const Col = styled.div`
  ${space}
  ${layout}
  ${flexbox}
`

const Row = styled.div`
  ${space}
  ${layout}
  ${flexbox}
  ${position}
`

const Container = styled.div`
  box-sizing: border-box;
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  max-width: 1200px;
  padding: 0 1rem;
  ${space};
`

const Grid = ({ children }) => <>{children}</>

Grid.Col = Col
Grid.Row = Row
Grid.Container = Container

export default Grid
