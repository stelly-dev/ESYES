import React from "react"
import { SimpleCTAContainer, SimpleCTASection } from "./styled"
import Button from "../../pieces/Button"

const SimpleCTA = props => (
  <SimpleCTAContainer>
    <SimpleCTASection>{props.content}</SimpleCTASection>
    <Button to={props.buttonTo}>{props.buttonText}</Button>
  </SimpleCTAContainer>
)

export default SimpleCTA
