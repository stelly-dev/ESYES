import React from 'react'; 
import styled, { css} from 'styled-components'; 


const shared = css`
  position: absolute; 
  width: 100%; 
  height: 100%; 
  -webkit-backface-visibility: hidden; 
  backface-visibility: hidden; 
`

const FlipOuter = styled.div`
  border: 1px solid black; 
  height: 78px; 
  perspective: 1000px; 
`

const FrontWrapper = styled.div`
  ${shared}; 
`

const BackWrapper = styled.div`
  ${shared}; 
  transform: rotateX(-180deg); 
`

const FlipInner = styled.div`
  position: relative; 
  width: 100%; 
  height: 100%; 
  text-align: center; 
  transition: transform .8s; 
  tranform-style: preserve-3d; 
  transform: ${props => (props.flipped ? "rotateX(180deg)" : "rotateX(0)")}; 
`

const FlipBox = ({front, back, flipped}) => {
  return (
   <FlipOuter>
        <FlipInner flipped={flipped}>
            <FrontWrapper>
              {front}
            </FrontWrapper>
            <BackWrapper>
              {back}
            </BackWrapper>
        </FlipInner>
   </FlipOuter>  
  )
}

export default FlipBox; 
