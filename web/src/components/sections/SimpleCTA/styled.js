import styled from "styled-components"
import Button from "../../pieces/Button"
import Container from "../../containers/Container"
export const StyledButton = styled(Button)`
  height: 3.5vw !important;
  width: 16.1vw !important; 
  font-size: 1.35vw !important;  
  border: 1px solid ${props => props.theme.colors.primary}; 
  :hover {
    background-color: ${props => props.theme.colors.white}; 
    color: ${props => props.theme.colors.primary}; 
  }
  /* justify-self: center;
  max-width: none !important;
  width: auto !important;
  height: auto !important;
  min-width: 300px !important;
  padding: 10px 20px;
  @media only screen and (min-width: 1024px) {
    align-self: center;
    justify-self: start;
    font-size: 1.4vw;
  }
  border: 1px solid ${props => props.theme.colors.primary};
  :hover {
    background-color: ${props => props.theme.colors.white};
    color: ${props => props.theme.colors.primary};
  }
  @media only screen and (min-width: 1400px) {
    font-size: 18px;
  } */
`

export const SimpleCTAContainer = styled.div`
  background-color: ${props => props.theme.colors.secondary}; 
  color: white; 

  @media only screen and (min-width: 1024px){
    width: 834px; 
    margin: 0 auto; 
    ${Container}{
      margin: 0; 
      padding: 3.25vw 1.5vw; 
      display: flex; 
      justify-content: center; 
      align-items: center; 
    }
    
  }

  @media only screen and (min-width: 1200px){
    width: 69.5vw;
  }

  @media only screen and (min-width:2000px){
    width: 1390px; 
  }
  
  /* display: grid;
  max-width: 69.5vw;
  margin: 0 auto;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr 1fr;
  grid-gap: 20px;
  background-color: ${props => props.theme.colors.secondary};
  color: white;
  font-weight: bold;
  padding: 20px;
  align-items: center;
  @media only screen and (min-width: 600px) {
  }
  @media only screen and (min-width: 1024px) {
    grid-template-columns: auto min-content;
    grid-template-rows: 1fr;
    padding: 65px 22px 65px 35px;
    font-size: 27px;
    line-height: 35px;
  } */
  `

export const ButtonWrapper = styled.div`
  ${StyledButton}:not(:only-child):first-of-type {
    margin-bottom: 1.5vw; 
  }
  /* display: grid;
  grid-gap: 20px;
  grid-template-columns: ${props => (props.count > 1 ? "1fr 1fr" : "1fr")};
  ${StyledButton}:first-of-type {
    justify-self: end;
  }
  ${StyledButton}:last-of-type {
    justify-self: ${props => (props.count > 1 ? "start" : "center")};
  }
  @media only screen and (min-width: 1024px) {
    margin-left: auto;
    margin-right: 20px;
    grid-template-columns: 1fr;
    grid-template-rows: ${props => (props.count > 1 ? "1fr 1fr" : "1fr")};
    /* border: 1px solid white; */
  
   
`

export const SimpleCTASection = styled.section`
  @media only screen and (min-width: 1024px) {
    font-size: 16.2px;
    font-weight: bold;
    margin-right: 3.75vw;
    line-height: 1.2963;
    width: 834px;
    margin: 0 auto;
  }
  @media only screen and (min-width: 1200px) {
    width: 47.2vw;
    font-size: 1.35vw;
  }
  @media only screen and (min-width: 2000px) {
    width: 1390px;
    margin: 0 auto;
  }
`
