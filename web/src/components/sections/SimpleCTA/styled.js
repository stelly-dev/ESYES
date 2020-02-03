import styled from "styled-components"

export const SimpleCTAContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr 1fr;
  grid-gap: 20px;
  background-color: ${props => props.theme.colors.secondary};
  color: white;
  font-weight: bold;
`

export const SimpleCTASection = styled.section``
