import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import Container from "../components/containers/Container"
import Button from "../components/pieces/Button"
import bg from "../images/peopletalkingtoahomeenergyadvisor@2x.png"

const ImageBackground = styled.div`
  background-image: url(${props => props.image});
  background-size: cover;
  max-width: 100vw;
  width: 100%;
  overflow: hidden;
  height: calc(100vh - 160px);
  margin: 0 auto;
`

const CTA = styled.div`
  margin-top: 18rem;
  color: ${props => props.theme.colors.white};
  width: 100%;
  text-align: center;
  h1 {
    margin: 0 auto;
    font: bold 65px/82px Lato;
    max-width: 50%;
    margin-bottom: 50px;
  }
`

const TextSection = styled.section``
const H1 = styled.h1``

const Home = () => (
  <>
    <ImageBackground image={bg}>
      <Container>
        <CTA>
          <h1>Improving Boulder County One Home at a Time</h1>
          <div>
            <Button bg="primary" px={2} py={1} width={19} mr={1}>
              DIY Improvements
            </Button>
            <Button bg="secondary" px={2} py={1} width={19} ml={1}>
              Large Projects
            </Button>
          </div>
        </CTA>
      </Container>
    </ImageBackground>
    <TextSection>
      <Container></Container>
    </TextSection>
  </>
)

export { Home }
