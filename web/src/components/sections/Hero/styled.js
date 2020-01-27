import styled from "styled-components"
import BackgroundImage from "gatsby-background-image"
import Button from "../../pieces/Button"
import Container from "../../containers/Container"

export const StyledBackgroundImage = styled(BackgroundImage)`
  width: 100%;
  background-size: cover;
  background-position: 25% 50%;
  height: 320px;
  position: relative;
  ${Container} {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    height: auto;
    position: absolute;
    bottom: 50px;
    min-width: 100%;
  }
  h1 {
    color: white;
    text-align: center;
    font-size: 23px;
    line-height: 35px;
    text-shadow: 0px 3px 6px #00000033;
  }
  @media only screen and (min-width: 350px) {
    h1 {
      font-size: 25px;
      max-width: 342px;
    }
  }
  @media only screen and (min-width: 600px) {
    height: 420px;
    h1 {
      font-size: 36px;
      line-height: 51px;
      max-width: 426px;
    }
    ${Container} {
      bottom: 45px;
    }
  }
  @media only screen and (min-width: 1310px) {
    height: calc(100vh - 195px);
    h1 {
      font-size: 65px;
      line-height: 82px;
      max-width: 800px;
    }
    ${Container} {
      bottom: 80px;
    }
  }
`

export const HeroButton = styled(Button)`
  display: inline-flex;
  max-width: calc(156px - 2rem);
  margin: 0 0.2rem;
  font-size: 13px;
  background: ${props =>
    props.secondary == "true"
      ? props.theme.colors.secondary
      : props.theme.colors.primary};
  @media only screen and (min-width: 350px) {
    max-width: 150px;
  }
  @media only screen and (min-width: 375px) {
    max-width: 156px;
  }
  @media only screen and (min-width: 410px) {
    margin: 0 1rem;
  }
  @media only screen and (min-width: 1024px) {
    max-width: 322px;
  }
  @media only screen and (min-width: 1310px) {
    height: 70px;
    width: 322px;
  }
`

export const HeroSection = styled.section``
