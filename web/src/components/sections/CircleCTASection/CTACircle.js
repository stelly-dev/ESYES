import React from "react"
import styled from "styled-components"
import slugify from "slugify"
import { Link } from "gatsby"
import BackgroundImage from "gatsby-background-image"
import { getFluidGatsbyImage } from "gatsby-source-sanity"
import clientConfig from "../../../../client-config"

const CircleHoverOverlay = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 50%;
  background-color: #0000006a;
  transition: background-color 300ms ease-in-out;
  display: flex;
  justify-content: center;
  text-align: center;
  flex-direction: column;
  align-items: center;
  position: relative;
`

const CircleImage = styled(BackgroundImage)`
  position: relative;
  border-radius: 50%;
  overflow: hidden;
  width: 100%;
  height: 100%;
`

const CircleBorder = styled.div`
  padding: 0.5rem;
  background: transparent linear-gradient(90deg, #f9a33e 0%, #fee006 100%) 0% 0%
    no-repeat padding-box;
  border-radius: 50%;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  @media only screen and (min-width: 1024px) {
    padding: 0.8rem;
  }
`

const CircleLink = styled(Link)`
  width: 100%;
  height: 100%;
  text-decoration: none;
  color: ${props => props.theme.colors.white};
  :hover {
    ${CircleHoverOverlay} {
      background: transparent;
    }
  }
`

const TextContainer = styled.div`
  position: absolute;
  top: 22.5%;
  left: 50%;
  transform: translateX(-50%);
  width: 100%;
  @media only screen and (min-width: 1024px) {
    top: 25%;
  }
`

const Header = styled.h1`
  font-size: 4.84vw;
  line-height: 1.25;
  width: 100%;
  text-shadow: 0px 3px 1px #00000033;
  margin-bottom: 0px;
  @media only screen and (min-width: 768px) {
    font-size: 2.34vw;
  }
  @media only screen and (min-width: 1024px) {
    font-size: 1.55rem;
    margin-bottom: 0;
  }
`

const Description = styled.h2`
  font-size: 3.23vw;
  margin-top: 0;
  margin: 0;
  padding-top: 0;
  line-height: 1.2;
  font-style: italic;
  @media only screen and (min-width: 768px) {
    font-size: 1.56vw;
  }
  @media only screen and (min-width: 1024px) {
    font-size: 1rem;
  }
`

const CTACircle = ({ cta }) => (
  <CircleLink to={`/${slugify(cta.link.pageName).toLowerCase()}`}>
    <CircleBorder>
      <CircleImage
        fluid={getFluidGatsbyImage(
          cta.backgroundImage.asset["_id"],
          { maxWidth: 500 },
          clientConfig.sanity
        )}
      >
        <CircleHoverOverlay>
          <TextContainer>
            <Header>{cta.title}</Header>
            <Description>{cta.subTitle}</Description>
          </TextContainer>
        </CircleHoverOverlay>
      </CircleImage>
    </CircleBorder>
  </CircleLink>
)

export default CTACircle
