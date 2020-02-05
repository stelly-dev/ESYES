import styled from "styled-components"
import Img from "gatsby-image"
import { FaQuoteLeft } from "react-icons/fa"
import Button from "../../pieces/Button"
import bubbles from "./bubbles.svg"
import Container from "../../containers/Container"

export const ReviewButton = styled(Button)`
  background-color: ${props => props.theme.colors.secondary};
  text-transform: uppercase;
  margin: 0 auto;
  font-size: 18px;
  margin-top: 30px;
  @media only screen and (min-width: 600px) {
    font-size: 16px;
    min-height: 40px;
    min-width: 156px;
  }
  @media only screen and (min-width: 992px) {
    min-width: 200px;
    max-height: 45px;
    font-size: 18px;
  }
`

export const StyledSection = styled.section`
  ${Container}{
    display: grid; 
    grid-template-columns: 1fr; 
    grid-template-rows: 1fr auto; 
  }

  @media only screen and (min-width: 600px){
    ${Container}{
      grid-gap: 41px; 
    grid-template-columns: 1fr 1fr; 
    grid-template-rows: 1fr; 
    }
  }

  @media only screen and (min-width: 992px){
    ${Container}{
    grid-template-columns: 1fr 40px 1fr; 
    grid-template-rows: 45px 1fr 70px 9.75vw 45px; 
    grid-gap: 0; 
    }
  }

  @media only screen and (min-width: 1310px){
    ${Container}{
    grid-template-columns: 1fr 117px 1fr; 

    }
  }
  /* ${Container} {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr auto;
  }

  @media only screen and (min-width: 600px) {
    ${Container} {
      display: grid;
      grid-template-columns: repeat(12, 1fr);
      grid-template-rows: 45px 1fr 1fr 45px;
      max-height: 691px;
    }
  } */
`

export const ContentWrapper = styled.div``

export const StyledImage = styled(Img)`
  @media only screen and (min-width: 600px) {
    grid-column: 2;
    /* grid-column: 8 / span 7;
    grid-row: 1 / span 4; */
    /* height: 100%; */
    width: 100%;
    height: 0;
    padding-top: calc(621 / 822 * 100%);
    padding-bottom: 40px;
    /* max-height: 691px;
    max-width: 822px; */
  }
  @media only screen and (min-width: 992px) {
    grid-column: 3 / span 1;
    grid-row: 1 / span 5;
    padding-left: 20px;
    padding: 0;
    height: 100%;
  }

  @media only screen and (min-width: 1310px) {
    /* padding-left: 81px; */
  }
`

export const BlockQuote = styled.blockquote`
  font-size: 18px;
  font-weight: bold;
  font-style: italic;
  margin-top: 30px;
  /* border: 1px solid red; */
  /* max-height: 400px; */
  /* position: absolute; */
  @media only screen and (min-width: 600px) {
    grid-column: 1;
    grid-row: 1;
    margin-top: 0;
    /* margin-bottom: 20px; */
    /* background-color: white;
    grid-column: 1 / span 6;
    grid-row: 2 / span 1;
    max-height: 337px;
    z-index: 1; */
  }
  @media only screen and (min-width: 992px) {
    grid-column: 1 / span 1;
    grid-row: 2;
    margin-right: -10vw;
    z-index: 1;
    background-color: white;
    padding-right: 20px;
    padding-bottom: 30px;
    padding-left: 20px;
    padding-top: 30px;
  }
  @media only screen and (min-width: 1310px) {
    margin-right: -12vw;
  }
`

export const QuoteContainer = styled.div`
  padding-left: 40px;
  padding-top: 35px;
  @media only screen and (min-width: 600px) {
    font-size: 16px;
    line-height: 1.5;
    /* width: 100%;
    height: 100%;
    border: 1px solid red;
    font-size: 35px;
    line-height: 52px;
    font-style: italic;
    font-weight: bold;
    padding-top: 70px;
    padding-left: 80px;
    padding-right: 26px; */
  }
  @media only screen and (min-width: 700px) {
    font-size: 16px;
  }

  @media only screen and (min-width: 992px) {
    font-size: 1.75vw;
    padding-left: 2.65vw;
    padding-top: 1.5vw;
  }
`

export const QuoteFooter = styled.footer`
  font-size: 16px;
  font-weight: normal;
  font-style: normal;
  color: ${props => props.theme.colors.gray};
  text-align: right;
  @media only screen and (min-width: 600px) {
    font-size: 14px;
    padding-top: 8px;
  }

  /* font-size: 20px; */
`

export const LeftQuote = styled(FaQuoteLeft)`
  font-size: 61px;
  position: absolute;
  color: ${props => props.theme.colors.secondary};
  opacity: 0.15;
  z-index: -1;
  @media only screen and (min-width: 992px) {
    font-size: 3.25vw;
  }
`

export const CountersContainer = styled.div`
margin-top: 30px; 
display: grid; 
justify-content: space-around; 
grid-template-rows: 1fr 1fr; 
grid-template-columns: 1fr; 
justify-items: center;
grid-gap: 30px; 
> div {
  text-align: center; 
  display: flex; 
  flex-direction: column; 
  justify-content: center; 
}
> div div {
  font-size: 23px;
  line-height: 1.25; 
  text-transform: uppercase; 
  font-weight: bold; 
  color: ${props => props.theme.colors.secondary};  
  margin-top: 14px; 
}
> div span {
 font-size: 56px; 
 line-height: 1.25;  
}
@media only screen and (min-width: 600px){
  grid-column: 1; 
  margin-top: -12vw; 
  /* grid-gap: 0;  */
  > div {
    max-height: 168px; 
  }
}
@media only screen and (min-width: 992px){
  grid-template-columns: 1fr 1fr; 
  grid-template-rows: 1fr; 
  > div {
    min-width: 100%; 
  }
  > div span {
    font-size: 4vw; 
  }
  > div div {
    font-size: 2vw; 
  }
  margin-top: 0; 
  grid-column: 1 / span 1; 
grid-row: 4 ;
height: 9.75vw;
/* border: 1px solid red;  */
> div span {
  font-size: 3.25vw; 
}  
> div div {
  font-size: 1.35vw; 
}
> div {
  height: 100%; 
}
}
  /* grid-row: 3;
  grid-column: 1 / span 5;
  display: flex;
  width: 100%;
  align-items: center; */
  /* border: 1px solid red; */
  /* > div {
    border: 1px solid blue;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin: 10px;
    div {
      text-align: center;
      color: ${props => props.theme.colors.secondary};
      font-size: 20px;
    }
    flex: 1;
    box-sizing: border-box;
  } */
`

export const CounterBackground = styled.div`
  background-image: url(${bubbles});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center center;
  height: 195px;
  width: 100%;
  max-width: 396px;
`
