import styled from "styled-components"
import { Link } from "gatsby"
import Container from "../../containers/Container"
import BackgroundImage from "gatsby-background-image"

export const CircleLink = styled(Link)`
  text-decoration: none;
  color: inherit;
  :visited {
    color: inherit;
  }
`

export const CircleSection = styled.section`
  margin-top: 50px;
  ${Container} {
    display: grid;
    grid-template-columns: 165px 165px;
    grid-template-rows: 165px 165px;
    grid-gap: 12px;
    text-align: center;
    justify-content: center;
    margin: 0 auto;
  }
  @media only screen and (min-width: 720px) {
    ${Container} {
      grid-template-columns: repeat(4, 20vw);
      grid-template-rows: 20vw;
      justify-content: space-around;
    }
  }
  @media only screen and (min-width: 1310px) {
    margin-top: 110px;
    ${Container} {
      grid-template-rows: 20vw;
      grid-gap: 1.25vw;
    }
  }
  @media only screen and (min-width: 2000px) {
    ${Container} {
      grid-template-columns: repeat(4, 396px);
      grid-template-rows: 396px;
    }
  }
`

export const CircleContainer = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 50%;
  background: transparent linear-gradient(90deg, #f9a33e 0%, #fee006 100%) 0% 0%
    no-repeat padding-box;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const CircleBackgroundImage = styled(BackgroundImage)`
  width: 150px;
  height: 150px;
  color: white;
  div {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-bottom: 1.5rem;
    text-shadow: 0px 3px 6px #00000029;
    background-color: rgba(0, 0, 0, 0.4);
    border-radius: 50%;
    transition: all 0.3s ease-in;
    :hover {
      background-color: transparent;
    }
  }

  h1 {
    font-size: 18px;
    margin: 0;
  }
  p {
    font-size: 12px;
    line-height: 16px;
    font-weight: 700;
    font-style: italic;
  }
  @media only screen and (min-width: 720px) {
    width: calc(100% - 20px);
    height: calc(100% - 20px);
  }
  @media only screen and (min-width: 1310px) {
    max-width: 358px;
    max-height: 358px;
    h1 {
      font-size: 2.4vw;
      line-height: 52px;
    }
    p {
      font-size: 1.5vw;
      line-height: 27px;
    }
  }
  @media only screen and (min-width: 2000px) {
    h1 {
      font-size: 42px;
      line-height: 52px;
    }
    p {
      font-size: 22px;
      line-height: 27px;
    }
  }
`
