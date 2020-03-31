import React from "react"
import {
  ButtonWrapper,
  SimpleCTAContainer,
  SimpleCTASection,
  StyledButton,
} from "./styled"
import Button from "../../pieces/Button"
import Container from "../../containers/Container"
import slugify from 'slugify'; 
const SimpleCTA = props => {
  console.log(props)
  return (
  <SimpleCTAContainer>
    <Container>
      <SimpleCTASection>{props.content}</SimpleCTASection>
      <ButtonWrapper count={props.buttons && props.buttons.length}>
        {props.buttons &&
          props.buttons.map(button => (
            <StyledButton to={`${slugify(button.buttonDestination.pageName).toLowerCase()}/`} key={button._key}>
              {button.buttonText}
            </StyledButton>
          ))}
      </ButtonWrapper>
    </Container>
  </SimpleCTAContainer>
  )
}

export default SimpleCTA
