import React from "react"
import { Link } from "gatsby"
import styled, { css } from "styled-components"
import Container from "../components/containers/Container"
import Button from "../components/pieces/Button"
import bg from "../images/peopletalkingtoahomeenergyadvisor@2x.png"
const ImageBackground = styled.div`
  background-image: url(${props => props.image});
  background-size: cover;
  max-width: 100vw;
  width: 100%;
  overflow: hidden;
  height: calc(100vh - 143px);
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
// fundamnetal linear interpolation:
// difference_1 = max_1 - min_1
// let x in [min_1, max_1]
// then there is a y s.t. min_1 + difference_1 * y = x

const interpolateSizes = (min, max, minW, maxW) => css`
  calc(${min}px + (${max} - ${min}) * ((100vw - ${minW}px) / (${maxW} - ${minW})))
`

const TextSection = styled.section``
const H1 = styled.h1`
  font-weight: 300;
  text-align: center;
  margin: 5rem auto 2rem;
  span {
    font-weight: 600;
    font-style: italic;
  }
  font-size: ${interpolateSizes(11.4, 22, 0, 350)};
  line-height: ${interpolateSizes(22, 30, 0, 350)};
  @media (min-width: 350px) {
    font-size: ${interpolateSizes(22, 30, 350, 768)};
    line-height: ${interpolateSizes(30, 41, 350, 768)};
    padding: 0 15px;
  }
  @media (min-width: 1024px) {
    font-size: ${interpolateSizes(30, 65, 1024, 2000)};
    line-height: ${interpolateSizes(41, 85, 1024, 2000)};
    padding: 0 20vw;
  }
  @media (min-width: 2000px) {
    font-size: 65px;
    line-height: 85px;
    padding: 0;
    width: 1024px;
  }
`
const smallPStyle = css`
  font-size: 14px;
  line-height: 20px;
`
const normalPStyle = css`
  font-size: 16px;
  line-height: 25.6px;
`

const mediumPStyle = css`
  font-size: 20px;
  line-height: 34px;
`

const bigPStyle = css`
  font-size: 22px;
  line-height: 27px;
`

const centerStyle = css`
  text-align: center;
`

const italicStyle = css`
  font-style: italic;
`

const marginBottom = margin => css`
  margin-bottom: ${margin};
`

const P = styled.p`
  ${props => (props.small ? smallPStyle : "")};
  ${props => (props.normal ? normalPStyle : "")};
  ${props => (props.medium ? mediumPStyle : "")};
  ${props => (props.big ? bigPStyle : "")};
  ${props => (props.italic ? italicStyle : "")};
  ${props => (props.center ? centerStyle : "")};
  ${props => (props.lineHeight ? props.lineHeight : "auto")};
  ${props => (props.size ? `font-size: ${props.size}` : "")};
  ${props => (props.mb ? marginBottom(props.mb) : "")}
`

export const Home = () => (
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
      <Container col>
        <H1>
          Helping You Increase Efficiency and
          <br />
          <span>Decrease Your Carbon Footprint</span>
        </H1>
        <P big italic mb={"3rem"}>
          Assisting Boulder County residents, at no cost, in energy efficiency
          and renewable energy residential Improvements
        </P>
        <P italic>
          At EnergySmart, we help Boulder County residents make their homes and
          businesses more comfortable, affordable, and, most importantly, energy
          efficient. From home and vehicle energy assessments to solar panel
          installation, we make the process simple from the start.
        </P>
      </Container>
    </TextSection>
  </>
)
