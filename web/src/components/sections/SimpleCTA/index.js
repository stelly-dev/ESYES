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
  <SimpleCTAContainer>
    <Container>
      <SimpleCTASection>{props.content}</SimpleCTASection>
      <ButtonWrapper count={props.buttons && props.buttons.length}>
        {props.buttons &&
          props.buttons.map(button => (
            <StyledButton to={button.buttonTo} key={button._key}>
              {button.buttonText}
            </StyledButton>
          ))}
      </ButtonWrapper>
      {/* <StyledButton to={props.buttonTo}>{props.buttonText}</StyledButton> */}
    </Container>
  </SimpleCTAContainer>
)

export default SimpleCTA
