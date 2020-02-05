import React from "react"
import { SimpleCTAContainer, SimpleCTASection, StyledButton } from "./styled"
import Button from "../../pieces/Button"
import Container from "../../containers/Container"
const SimpleCTA = props => (
  <Container>
    <SimpleCTAContainer>
      <SimpleCTASection>{props.content}</SimpleCTASection>
      <StyledButton to={props.buttonTo}>{props.buttonText}</StyledButton>
    </SimpleCTAContainer>
  </Container>
)

export default SimpleCTA
