import React from "react"
import styled from "styled-components"
import Grid from "../../containers/Grid"
import CTACircle from "./CTACircle"

const FlexItem = styled(Grid.Col)`
  flex: 1 0 calc(50% - 16px);
  border-radius: 50%;
  margin: 1rem;
  :before {
    content: "";
    float: left;
    padding-top: calc(100% + 6px);
  }

  display: flex;
  justify-content: center;
  align-items: center;
  @media only screen and (min-width: 768px) {
    flex: 1 0 calc(25% - 3.26vw);
    margin: 1rem;
    :before {
      padding-top: 0;
      padding-top: calc(100%);
    }
  }
`
const FlexContainer = styled(Grid.Row)`
  display: flex;
  flex-wrap: wrap;
  padding: 0;
  margin: 0;

  @media only screen and (max-width: 767px){
  ${FlexItem}:first-of-type, ${FlexItem}:nth-of-type(3) {
    margin-right: 0; 
  }
  ${FlexItem}:first-of-type, ${FlexItem}:nth-of-type(2) {
    margin-bottom: 0; 
  }
  ${FlexItem}:first-of-type, ${FlexItem}:nth-of-type(3) {
    margin-left: 0;
  }

  ${FlexItem}:nth-of-type(2), ${FlexItem}:last-of-type {
    margin-right: 0; 
  }
  }

  @media only screen and (min-width: 768px){
    ${FlexItem}{
      margin: 1.63vw; 
    }
    ${FlexItem}:first-of-type {
      margin-left: 0; 
    }
    ${FlexItem}:last-of-type {
      margin-right: 0; 
    }
  }

  @media only screen and (min-width: 1024px) {
    ${FlexItem}{
      margin: .5rem; 
    }
    ${FlexItem}:first-of-type {
      margin-left: 0;
    }

    ${FlexItem}:last-of-type {
      margin-right: 0;
    }
  }
`

const CircleCTASection = props => (
  <Grid.Container marginTop="2.7rem" marginBottom="2.7rem">
    <FlexContainer>
      {props.ctaList.map((cta, i) => (
        <FlexItem key={cta.backgroundImage.asset["_id"]}>
          <CTACircle cta={cta} />
        </FlexItem>
      ))}
    </FlexContainer>
  </Grid.Container>
)

export default CircleCTASection
