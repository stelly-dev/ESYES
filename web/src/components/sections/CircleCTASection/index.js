import React from "react"
import slugify from "slugify"
import { getFluidGatsbyImage } from "gatsby-source-sanity"
import Container from "../../containers/Container"
import clientConfig from "../../../../client-config"
import {
  CircleLink,
  CircleSection,
  CircleContainer,
  CircleBackgroundImage,
} from "./styled"

const CircleCTASection = props => {
  return (
    <CircleSection>
      <Container>
        {props &&
          props.ctaList &&
          props.ctaList.map((cta, i) => (
            <CircleContainer key={cta.backgroundImage.asset["_id"]}>
              <CircleBackgroundImage
                alt={cta.altText}
                fluid={getFluidGatsbyImage(
                  cta.backgroundImage.asset["_id"],
                  { maxWidth: 165 },
                  clientConfig.sanity
                )}
              >
                <CircleLink
                  to={`/${slugify(cta.link.pageName).toLowerCase()}/`}
                >
                  <div>
                    <h1>{cta.title}</h1>
                    <p>{cta.subTitle}</p>
                  </div>
                </CircleLink>
              </CircleBackgroundImage>
            </CircleContainer>
          ))}
      </Container>
    </CircleSection>
  )
}

export default CircleCTASection
