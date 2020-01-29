import React from "react"
import Img from "gatsby-image"
import { getFluidGatsbyImage } from "gatsby-source-sanity"
import clientConfig from "../../../../client-config"
import {
  CircleContainer,
  StyledStaffCard,
  StyledCircleImage,
  BioContainer,
} from "./styled"
import BlockContent from "@sanity/block-content-to-react"
const StaffCard = props => {
  return (
    <StyledStaffCard>
      <CircleContainer>
        <StyledCircleImage
          fluid={getFluidGatsbyImage(
            props.image,
            { maxWidth: "356px" },
            clientConfig.sanity
          )}
        />
      </CircleContainer>
      <BioContainer>
        <h3>{props.name}</h3>
        <p>
          {props.jobTitle} / {props.jobPosition}
        </p>
        <article>
          <BlockContent blocks={props.bio} />
        </article>
      </BioContainer>
    </StyledStaffCard>
  )
}

export default StaffCard
