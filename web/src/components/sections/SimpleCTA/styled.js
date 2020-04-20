import styled from "styled-components"
import Button from "../../pieces/Button"
import Container from "../../containers/Container"
export const StyledButton = styled(Button)`
  border: 1px solid ${props => props.theme.colors.primary};
  :hover {
    background-color: ${props => props.theme.colors.white};
    color: ${props => props.theme.colors.primary};
  }
  height: 10.75vw !important;
  width: 41.94vw !important;
  font-size: 4.1vw !important;
  padding: 0 !important;
  margin: 0 !important;

  @media only screen and (min-width: 768px) {
    height: 5.21vw !important;
    width: 20.31vw !important;
    font-size: 2vw !important;
  }

  @media only screen and (min-width: 1024px) {
    height: 3.5vw !important;
    width: 16.1vw !important;
    font-size: 1.35vw !important;
  }
  @media only screen and (min-width: 2000px) {
    font-size: 27px !important;
    width: 322px !important;
    height: 70px !important;
  }
`

export const SimpleCTAContainer = styled.div`
  background-color: ${props => props.theme.colors.secondary};
  color: white;
  width: calc(100% - 2rem);
  margin: 0 auto;
  ${Container} {
    padding: 5.38vw 2.69vw;
    margin: 0;
  }
  @media only screen and (min-width: 768px) {
    margin: 0 auto;
    ${Container} {
      margin: 0;
      padding: 3.25vw 1.5vw;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }

  @media only screen and (min-width: 1024px) {
    width: 834px;
  }

  @media only screen and (min-width: 1200px) {
    width: 69.5vw;
  }

  @media only screen and (min-width: 2000px) {
    width: 1390px;
    ${Container} {
      padding: 63px 38px;
    }
  }
`
// prettier-ignore
export const ButtonWrapper = styled.div`
  /* ${StyledButton}:not(:only-child):first-of-type {
    margin-bottom: 1.5vw;
  } */
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-top: 5.38vw;

  @media only screen and (min-width: 768px) {
    margin-top: 0; 
    flex-direction: column;
    align-items: space-around;
    justify-content: center;
    ${StyledButton}:not(:only-child):first-of-type {
      margin-bottom: 20px !important; 
    }
  }
`

export const SimpleCTASection = styled.section`
  font-size: 4.3vw;
  line-height: 1.5;
  font-weight: bold;
  text-align: center; 
  @media only screen and (min-width: 768px) {
    font-size: 2.08vw;
    line-height: 1.29;
    margin-right: 3.75vw;
  }

  @media only screen and (min-width: 1024px) {
    font-size: 16.2px;
    font-weight: bold;
    margin-right: 3.75vw;
    line-height: 1.2963;
    width: 834px;
  }
  @media only screen and (min-width: 1200px) {
    width: 47.2vw;
    font-size: 1.35vw;
  }
  @media only screen and (min-width: 2000px) {
    width: 1390px;
    font-size: 27px;
    margin-right: 54px;
  }
`
