import React from "react"
import {
  ButtonWrapper,
  SimpleCTAContainer,
  SimpleCTASection,
  StyledButton,
} from "./styled"
import Button from "../../pieces/Button"
import Container from "../../containers/Container"
const SimpleCTA = props => (
  <Container>
    <SimpleCTAContainer>
      <SimpleCTASection>{props.content}</SimpleCTASection>
      <ButtonWrapper>
        {props.buttons &&
          props.buttons.map(button => (
            <StyledButton to={button.buttonTo} key={button._key}>
              {button.buttonText}
            </StyledButton>
          ))}
      </ButtonWrapper>
      {/* <StyledButton to={props.buttonTo}>{props.buttonText}</StyledButton> */}
    </SimpleCTAContainer>
  </Container>
)

export default SimpleCTA
