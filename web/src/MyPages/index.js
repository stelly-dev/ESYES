import React from "react"
import { Link } from "gatsby"
import styled, { css } from "styled-components"
import Container from "../components/containers/Container"
import Button from "../components/pieces/Button"
import bg from "../images/peopletalkingtoahomeenergyadvisor@2x.png"
import comfortCTA from "../images/comfort365-cta@2x.png"
import solarCTA from "../images/gosolar-cta@2x.png"
import teslaCTA from "../images/electricvehicles-cta@2x.png"
import effiCTA from "../images/virtualadvisor-cta@2x.png"
import familyTalking from "../images/familytalkingtohomeadvisor@2x.png"

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
  > div {
    display: flex;
    justify-content: center;
  }
`
// fundamnetal linear interpolation:
// difference_1 = max_1 - min_1
// let x in [min_1, max_1]
// then there is a y s.t. min_1 + difference_1 * y = x

const interpolateSizes = (min, max, minW, maxW) => css`
  calc(${min}px + (${max} - ${min}) * ((100vw - ${minW}px) / (${maxW} - ${minW})))
`

const HeroH1 = styled.h1`
  text-align: center;
  max-width: 50%;
  margin: 3rem auto;
  font-size: ${interpolateSizes(22, 25, 0, 350)};
  line-height: ${interpolateSizes(30, 35, 0, 350)};
  @media (min-width: 350px) {
    font-size: ${interpolateSizes(25, 36, 350, 768)};
    line-height: ${interpolateSizes(35, 51, 350, 768)};
  }
  @media (min-width: 1024px) {
    font-size: ${interpolateSizes(36, 65, 1024, 2000)};
    line-height: ${interpolateSizes(51, 82, 1024, 2000)};
  }

  @media (min-width: 2000px) {
    font-size: 65px;
    line-height: 85px;
  }
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
const fw = weight => css`
  font-weight: ${weight};
`
const maxWidthP = max => css`
  max-width: ${max};
`
const P = styled.p`
  ${props => (props.small ? smallPStyle : "")};
  ${props => (props.normal ? normalPStyle : "")};
  ${props => (props.medium ? mediumPStyle : "")};
  ${props => (props.big ? bigPStyle : "")};
  ${props => (props.size ? `font-size: ${props.size}` : "")};
  ${props => (props.italic ? italicStyle : "")};
  ${props => (props.center ? centerStyle : "")};
  ${props => (props.lineHeight ? props.lineHeight : "auto")};
  ${props => (props.mb ? marginBottom(props.mb) : "")};
  ${props => (props.fw ? fw(props.fw) : "")};
  ${props => (props.maxWidth ? maxWidthP(props.maxWidth) : "")};
`

const TextLink = styled(Link)`
  color: ${props => props.theme.colors.secondary};
  &:hover {
    color: ${props => props.theme.colors.black};
  }
`

const CircleImage = styled.img`
  max-width: calc(80vw / 4 - (3 * 1rem));
`

const CardBackground = styled.div`
  background: transparent linear-gradient(90deg, #f9a33e 0%, #fee006 100%) 0% 0%
    no-repeat padding-box;
  position: relative;
  padding: 1rem;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
`

const CircleTitle = styled.h1`
  font-size: 34px;
  color: white;
  text-shadow: 0px 3px 6px #00000030;
`

const CircleText = styled.p`
  font-size: 18px;
  font-style: italic;
  color: white;
  text-shadow: 0px 3px 6px #00000030;
  font-weight: 600;
`

const CardWrapper = styled(Link)`
  text-align: center;
  margin-right: 1rem;
  margin-left: 1rem;
  :first-of-type {
    margin-left: 0;
  }
  :last-of-type {
    margin-right: 0;
  }
`
const CircleTextWrapper = styled.div`
  position: absolute;
`

const CircleCard = ({ img, title, text, to }) => (
  <CardWrapper to={to}>
    <CardBackground>
      <CircleImage src={img} />
      <CircleTextWrapper>
        <CircleTitle>{title}</CircleTitle>
        <CircleText>{text}</CircleText>
      </CircleTextWrapper>
    </CardBackground>
  </CardWrapper>
)

const CTASection = styled.section`
  display: flex;
  padding: 0;
  margin: 6rem 0;
  line-height: 30px;
  justify-content: center;
  align-items: space-between;
  width: 100%;
  max-width: 90vw;
`

const StyledImageSection = styled.section`
  width: 100%;
  max-width: 80vw;
  display: flex;
  margin: 0 auto;
  img,
  div {
    flex: 1 1 auto;
  }
  img {
    max-width: 33%;
  }

  div {
    h1 {
      text-align: left;
      color: ${props => props.theme.colors.primary};
    }
    p {
      text-align: left;
      margin: 2rem 0 0 2rem;
      span {
        text-align: left;
        color: ${props => props.theme.colors.secondary};
        font-weight: 600;
        text-transform: uppercase;
        font-size: 20px;
        line-height: 34px;
        :after {
          content: ":";
        }
      }
    }
  }
`

const ImageSection = ({ left, title, img, children }) => (
  <StyledImageSection>
    <img src={img} />
    <div>
      <h1>{title}</h1>
      {children}
    </div>
  </StyledImageSection>
)

export const Home = () => (
  <>
    <ImageBackground image={bg}>
      <Container>
        <CTA>
          <HeroH1>Improving Boulder County One Home at a Time</HeroH1>
          <div>
            <Button
              bg="primary"
              px={"2rem"}
              py={"1rem"}
              minWidth={"19rem"}
              mr={"1rem"}
            >
              DIY Improvements
            </Button>
            <Button
              bg="secondary"
              px={"2rem"}
              py={"1rem"}
              ml={"1rem"}
              minWidth={"19rem"}
            >
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
        <P as="h2" big italic mb={"3rem"} fw="400">
          Assisting Boulder County residents, at no cost, in energy efficiency
          and renewable energy residential Improvements
        </P>
        <P maxWidth={"80vw"} center>
          At EnergySmart, we help Boulder County residents make their homes and
          businesses more comfortable, affordable, and, most importantly, energy
          efficient.
          <br /> From <TextLink to="/home-energy-advisors/">
            home
          </TextLink> and{" "}
          <TextLink to="/electric-vehicles/">
            vehicle energy assesments
          </TextLink>{" "}
          to <TextLink to="/go-solar/">solar panel installation</TextLink> we
          make the process simple from the start.
        </P>
      </Container>
      <Container>
        <CTASection>
          <CircleCard
            img={comfortCTA}
            text={"Renewable heating & cooling"}
            title={"Comfort365"}
            to={"/comfort-365/"}
          />
          <CircleCard
            img={solarCTA}
            title="Go Solar"
            text="Transform your energy"
            to="/go-solar/"
          />
          <CircleCard
            img={teslaCTA}
            title="Electric Vehicles"
            text="Lorem Ipsum Dolor Sit Amet"
          />
          <CircleCard
            img={effiCTA}
            title="Virtual Advising"
            text="For your home energy needs"
          />
        </CTASection>
      </Container>
      <Container>
        <ImageSection
          left
          img={familyTalking}
          title="Creating Energy Conscious Homes"
        >
          <p>
            <span>easy</span> We’ll connect you with an expert Energy Advisor to
            answer any questions, help prioritize projects, and connect you with
            qualified contractors.
          </p>{" "}
          <p>
            <span> SMART</span> We’ll help you find and apply for great deals on
            rebates and low-cost financing options, making your energy upgrades
            more affordable.
          </p>
          <p>
            {" "}
            <span>RESPONSIBLE</span> When you do your part to reduce your energy
            footprint, you help preserve Boulder County’s inimitable beauty.
          </p>
        </ImageSection>
      </Container>
    </TextSection>
  </>
)
