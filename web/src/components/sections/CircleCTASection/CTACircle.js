import React from "react"
import styled, { css } from "styled-components"
import slugify from "slugify"
import { Location } from "@reach/router"
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

const circleLinkStyle = css`
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
const StyledCircleLink = styled(Link)`
  ${circleLinkStyle}
`
// Something odd is going on with
// the "as" polymorphic prop
// I think since we're sending it to the Link
// componenet initially - it's not
// combining styles properly when used with an "a" tag
// but this works.
//

const StyledCircleATag = styled.a`
  ${circleLinkStyle}
`

function CircleLink({ cta, children, location }) {
  const { newTab } = cta.link[0]
  switch (cta && cta.link[0]["_type"]) {
    case "internalLinkNoTitle":
      const locale = location.pathname.match(/\/es\//) ? "es" : "en"
      const slug =
        cta && cta.link[0].linkDestination.localePage[locale].route.current
      return <StyledCircleLink to={`/${slug}`}>{children}</StyledCircleLink>
    case "externalLinkNoTitle":
      const url = cta.link[0].externalLink
      return (
        <StyledCircleATag href={url} target={newTab ? "_blank" : "_self"}>
          {children}
        </StyledCircleATag>
      )
    case "fileLinkNoTitle":
      const linkUrl = cta.link[0].linkedFile.file.asset.url
      const originalName = cta.link[0].linkedFile.file.asset.originalFilename
      return (
        <StyledCircleATag
          as="a"
          href={linkUrl}
          target={newTab ? "_blank" : "_self"}
          download={originalName}
        >
          {children}
        </StyledCircleATag>
      )
    default:
      return <p style={{ color: "red" }}>ERROR</p>
  }
}

const CTACircle = ({ cta }) => {
  return (
    <Location>
      {({ location }) => (
        <CircleLink cta={cta} location={location}>
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
      )}
    </Location>
  )
}

export default CTACircle
