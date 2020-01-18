import styled, { css } from "styled-components"
import React from "react"
import Button from "./Button"
import Container from "../containers/Container"
import HeroH1 from "../typography/HeroH1"
import bg from "../../images/peopletalkingtoahomeenergyadvisor@2x.png"
import ImageBackground from "../containers/ImageBackground"
import CTA from "../containers/CTA"

const Hero = () => (
  <ImageBackground image={bg}>
    <Container>
      <CTA>
        <HeroH1>Improving Boulder County One Home at a Time</HeroH1>
        <div>
          <Button>DIY Improvements</Button>
          <Button>Large Projects</Button>
        </div>
      </CTA>
    </Container>
  </ImageBackground>
)

export default Hero
