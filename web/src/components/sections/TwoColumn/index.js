import React from "react"
import styled from "styled-components"
import Container from "../../containers/Container"
import Block, { StyledImage, VideoWrapper } from "../Block"

const ColumnContainer = styled(Container)`
  padding: 0 1rem !important;
  @media only screen and (min-width: 768px) {
    display: flex;
    justify-content: space-between;
    > div {
      width: 45vw;
    }
  }
  ${Container} {
    margin: 0;
    padding: 0;
  }
  @media only screen and (min-width: 1024px) {
    padding: 0 !important;
    max-width: 837px;
    /* margin: 0 !important; */
    /* border: 1px solid red; */
    > div {
      flex: 1 !important;
      width: 30vw !important;
    }
    > div:first-of-type {
      border-right: 1.5vw solid transparent;
    }

    > div:first-of-type {
      p {
        max-width: 100%;
        margin: 0 !important;
        padding-right: 1.7vw;
      }
    }
  }

  @media only screen and (min-width: 1200px) {
    max-width: 69.5vw;
    > div {
      width: auto !important;
    }
  }

  @media only screen and (min-width: 2000px) {
    max-width: 1390px;
    > div:first-of-type {
      p {
        padding-right: 34px;
      }
    }
  }
`

const StyledTwoColumnSection = styled.section`
  margin: 0 auto; 
  ${StyledImage}{
    margin-top: 9.1vw; 
  } 
  ${VideoWrapper} + ${StyledImage}{
    width: 50%; 
    margin: 0 auto; 
    margin-bottom: 9.1vw; 
  }

  ${VideoWrapper}:first-of-type{
    margin-top: 7vw; 
  }

@media only screen and (min-width: 768px){
  margin-top: 4vw; 
  ${StyledImage}{
    margin-top: 0; 
  }
  div p:first-of-type {
    margin-top: 0; 
  }
  ${VideoWrapper} {
    margin-bottom: 4.6vw; 
  }
}
@media only screen and (min-width: 1024px){
  margin-top: 2.5vw;  
  ${VideoWrapper}{
    margin-bottom: 2vw;
  }

  ${VideoWrapper}:first-of-type {
    margin-top: 0; 
  }

  ${VideoWrapper} + ${StyledImage}{
    margin-bottom: 0; 
  }

}



  @media only screen and (min-width: 1200px){
  }
  @media only screen and (min-width: 2000px){
    width: 1390px; 
  }

`

const TwoColumn = props => (
  <StyledTwoColumnSection>
    <ColumnContainer>
      <div>
        {/* <pre>{JSON.stringify(props, null, 2)}</pre> */}
        {props.leftCol && <Block blocks={props.leftCol} />}
      </div>
      <div>{props.rightCol && <Block blocks={props.rightCol} />}</div>
    </ColumnContainer>
  </StyledTwoColumnSection>
)

export default TwoColumn
