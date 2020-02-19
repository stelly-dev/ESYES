import React from "react"
import styled from "styled-components"
import Container from "../../containers/Container"
import Block, { StyledImage, VideoWrapper } from "../Block"

const ColumnContainer = styled(Container)`
  padding: 0 !important;
  display: flex;
  div {
    flex: 1;
  }
  ${Container} {
    margin: 0;
    padding: 0;
  }
  /* picture img {
    height: 100%;
    width: 100%;
    bottom: 0;
    right: 0;
  } */
`

const StyledTwoColumnSection = styled.section`
  margin: 0 auto; 
${StyledImage}{
  height: 23.2vw; 
  margin-top: 5.72vw;  
}

${VideoWrapper} + ${StyledImage}{
  max-height: 12vw; 
  width: 50%;
  margin: 0 auto;  
  picture img {
    object-fit: contain !important; 
  } 
}

  @media only screen and (min-width: 1024px){
    width: 834px; 
  }

  @media only screen and (min-width: 1200px){
    width: 69.5vw; 
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
