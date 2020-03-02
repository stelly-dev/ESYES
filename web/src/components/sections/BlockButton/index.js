import React from "react"
import styled from "styled-components"
import Button from "../../pieces/Button"
import Container from "../../containers/Container"

const StyledContainer = styled(Container)`
  display: flex;
  justify-content: ${props => props.orientation};
  padding: 0 !important;
  margin: 0 auto;

  @media only screen and (min-width: 1024px) {
    max-width: 69.5vw;
    /* border: 2px solid red; */
  }
`

const StyledButton = styled(Button)`
  background-color: ${props => props.color};
  text-align: ${props => props.orientation};
  border: 1px solid ${props => props.color};
  color: white;
  transition: all 350ms ease-in;
  :hover {
    background-color: white;
    color: ${props => props.color};
  }
`
const mapOrientationToFlex = orientation => {
  switch (orientation) {
    case "left":
      return "flex-start"
    case "center":
      return "center"
    case "right":
      return "flex-end"
  }
}

const BlockButton = props => {
  return (
    <StyledContainer orientation={mapOrientationToFlex(props.orientation)}>
      <StyledButton color={props.color} to={props.to}>
        {props.text}
      </StyledButton>
    </StyledContainer>
  )
}

export default BlockButton
