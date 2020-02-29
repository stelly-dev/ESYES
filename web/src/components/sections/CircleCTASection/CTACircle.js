import React from "react"
import styled from "styled-components"
import slugify from "slugify"
import { Link } from "gatsby"
import BackgroundImage from "gatsby-background-image"
import { getFluidGatsbyImage } from "gatsby-source-sanity"
import clientConfig from "../../../../client-config"

// TODO:
//      Make Text Sizing Consistent
//      Make Sure Overlay is colored properly
//      Add appropriate text shadow

const CircleHoverOverlay = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 50%;
  background-color: #000000aa;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transition: background-color 300ms ease-in-out;
  text-align: center;
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

const Header = styled.h1`
  font-size: 1.5rem;
`

const Description = styled.h2`
  font-size: 1rem;
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
          <Header>{cta.title}</Header>
          <Description>{cta.subTitle}</Description>
        </CircleHoverOverlay>
      </CircleImage>
    </CircleBorder>
  </CircleLink>
)

export default CTACircle
