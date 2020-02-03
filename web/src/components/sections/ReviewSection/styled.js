import styled from "styled-components"
import Img from "gatsby-image"
import { FaQuoteLeft } from "react-icons/fa"
import Button from "../../pieces/Button"
import bubbles from "./bubbles.svg"
import Container from "../../containers/Container"

export const ReviewButton = styled(Button)`
  text-transform: uppercase;
  background-color: ${props => props.theme.colors.secondary};
  margin: 30px calc(50% - 60px) 0 auto;
  @media only screen and (min-width: 1310px) {
    bottom: 30.5px;
  }
  border: 1px solid ${props => props.theme.colors.secondary};
  transition: all 250ms ease-in;
  :hover {
    background: white;
    color: ${props => props.theme.colors.secondary};
  }
`

export const StyledSection = styled.section`
  margin-top: 50px;
  @media only screen and (min-width: 720px) {
    ${Container} {
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-template-rows: 1fr;
      grid-gap: 40px;
    }
  }
`

export const ContentWrapper = styled.div`
  order: 1;
`

export const StyledImage = styled(Img)`
  max-height: 398px;
  @media only screen and (min-width: 720px) {
    order: 2;
  }
  @media only screen and (min-width: 1310px) {
    max-height: none;
    margin-left: 42px;
  }
`

export const BlockQuote = styled.blockquote`
  margin-top: 35px;
  background-color: "white";
  position: relative;
  height: 110px;
  width: 342px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 106px;
  p {
    color: ${props => props.theme.colors.black};
    font-size: 16px;
    line-height: 25.6px;
    font-style: italic;
    font-weight: 700;
    height: 86px;
    width: 302px;
  }
  footer {
    text-align: right;
    font-size: 14px;
    color: ${props => props.theme.colors.gray};
  }
  @media only screen and (min-width: 1310px) {
    width: 55%;
    max-width: 964px;
    height: 367px;
    position: absolute;
    background-color: white;
    p {
      font-size: 1.7vw;
      line-height: 3vw;
      width: 90%;
      max-width: 845px;
      height: auto;
      padding-bottom: 50px;
    }
    footer {
      font-size: 20px;
      padding-right: 26px;
    }
  }
  @media only screen and (min-width: 1895px) {
    p {
      width: 845px;
      font-size: 35px;
      line-height: 52px;
    }
  }
`

export const QuoteContainer = styled.div`
  position: absolute;
  top: 35px;
  left: 40px;
  @media only screen and (min-width: 1310px) {
    top: 100px;
    left: 110px;
  }
`

export const QuoteFooter = styled.footer``

export const LeftQuote = styled(FaQuoteLeft)`
  font-size: 61px;
  color: ${props => props.theme.colors.secondary};
  opacity: 0.15;
  @media only screen and (min-width: 1310px) {
    font-size: 124px;
    box-sizing: border-box;
    margin-top: 30px;
    margin-left: 40px;
  }
`

export const CountersContainer = styled.div`
  margin-top: 145px;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media only screen and (min-width: 1310px) {
    justify-content: space-between;
    flex-direction: row;
    margin-top: calc(50% + 70px);
    margin-right: -80px;
  }
`

export const CounterBackground = styled.div`
  background-image: url(${bubbles});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center center;
  height: 195px;
  width: 100%;
  max-width: 396px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 56px;
  line-height: 71px;
  margin: 30px 0;
  div {
    font-size: 23px;
    text-transform: uppercase;
    font-weight: 700;
    color: ${props => props.theme.colors.secondary};
  }
`
