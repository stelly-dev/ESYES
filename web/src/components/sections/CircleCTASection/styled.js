import styled from "styled-components"
import { Link } from "gatsby"
import Container from "../../containers/Container"
import BackgroundImage from "gatsby-background-image"

export const CircleLink = styled(Link)`
  color: white;
  text-decoration: none;
  border: 1px solid red;
  :visited {
    color: white;
  }
  h1 {
    font-size: 4.84vw;
    line-height: 1.333;
    margin: 0;
    margin-bottom: 0.81vw;
    margin-top: -8vw;
    text-align: center;
    max-width: 36.82vw;
  }
  p {
    font-size: 3.23vw;
    line-height: 1.3;
    font-weight: bold;
    font-style: italic;
    text-align: center;
    max-width: 40.32vw;
  }

  @media only screen and (min-width: 768px) {
    h1 {
      font-size: 2.34vw;
      line-height: 1;
      margin-top: -3.5vw;
      max-width: 17.18vw;
    }
    p {
      font-size: 1.56vw;
      max-width: 19.53vw;
    }
  }
  @media only screen and (min-width: 1024px) {
    h1 {
      font-size: 2.1vw;
      margin-top: -3vw;
      line-height: 1.238;
      max-width: 15.4vw;
    }
    p {
      font-size: 1.1vw;
      line-height: 1.2273;
      max-width: 17.9vw;
    }
  }
  @media only screen and (min-width: 2000px) {
    h1 {
      margin-top: -60px;
      font-size: 38px;
      line-height: 52px;
      max-width: 308px;
    }
    p {
      font-size: 18px;
      line-height: 27px;
      max-width: 358px;
    }
  }
`

export const CircleContainer = styled.div`
  background: transparent linear-gradient(90deg, #f9a33e 0%, #fee006 100%) 0% 0%
    no-repeat padding-box;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 43.35vw;
  height: 43.35vw;
  max-width: 43.35vw;
  max-height: 43.35vw;
  @media only screen and (min-width: 768px) {
    max-width: 21.48vw;
    max-height: 21.48vw;
  }
  @media only screen and (min-width: 1024px) {
    max-width: 19.8vw;
    max-height: 19.8vw;
  }

  @media only screen and (min-width: 2000px) {
    max-width: 396px;
    max-height: 396px;
  }
`

export const CircleSection = styled.section`
  margin-top: 13.44vw;
  margin-bottom: 13.44vw;
  ${Container} {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    height: 91.94vw;
  }

  @media only screen and (min-width: 768px) {
    max-height: 22.66vw;
    margin-top: 5.6vw;
    margin-bottom: 6.51vw;
    ${Container} {
    }
  }
  @media only screen and (min-width: 1024px) {
    margin-top: 5.5vw;
    margin-bottom: 6vw;
    max-height: 19.8vw;
    ${Container} {
      min-height: 19.8vw;
      max-height: 19.8vw;
    }
  }
  @media only screen and (min-width: 2000px) {
    max-height: 396px;
    margin-top: 110px;
    margin-bottom: 120px;

    ${Container} {
      padding: 0 !important;
      max-width: 1674px;
      min-height: 396px;
      max-height: 396px;
      flex-wrap: nowrap;
    }
  }
`

export const CircleBackgroundImage = styled(BackgroundImage)`
  border-radius: 50%;
  overflow: hidden;
  height: 40.2vw;
  width: 40.2vw;
  display: flex;
  justify-content: center;
  align-items: center;
  div {
    width: 40.2vw;
    height: 40.2vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center; /* padding-bottom: 1.5rem; */
    text-shadow: 0px 3px 6px #00000029;
    background-color: rgba(0, 0, 0, 0.4);
    border-radius: 50%;
    transition: background-color 0.3s ease-in;
    :hover {
      background-color: transparent;
    }
  }
  @media only screen and (min-width: 768px) {
    max-width: 19.53vw;
    max-height: 19.53vw;
    div {
      max-width: 19.53vw;
      max-height: 19.53vw;
    }
  }

  @media only screen and (min-width: 1024px) {
    max-width: 17.9vw;
    max-height: 17.9vw;
    div {
      max-width: 17.9vw;
      max-height: 17.9vw;
    }
  }

  @media only screen and (min-width: 2000px) {
    max-height: 358px;
    max-width: 358px;
    div {
      max-height: 358px;
      max-width: 358px;
    }
  }
`
