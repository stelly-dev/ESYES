import React from "react"
import Img from "gatsby-image"
import { FaLinkedinIn, FaPaperPlane } from "react-icons/fa"
import { getFluidGatsbyImage } from "gatsby-source-sanity"
import clientConfig from "../../../../client-config"
import Grid from "../../containers/Grid"
import {
  IconContainer,
  CircleContainer,
  StyledStaffCard,
  StyledCircleImage,
  BioContainer,
} from "./styled"
import BlockContent from "@sanity/block-content-to-react"
const StaffCard = props => {
  return (
    <StyledStaffCard>
      <Grid.Row display={["flex"]} flexDirection={["column", "column", "row"]}>
        <Grid.Col
          flexBasis={["100%", "100%", "calc(33.33% - 1rem)"]}
          marginBottom={["1rem", "1rem", "0"]}
          marginRight={[null, null, "1rem"]}
          justifyContent={["center"]}
          alignItems={["center"]}
        >
          <CircleContainer>
            <StyledCircleImage
              fluid={getFluidGatsbyImage(
                props.image,
                { maxWidth: "356px" },
                clientConfig.sanity
              )}
            />
          </CircleContainer>
        </Grid.Col>
        <Grid.Col flexBasis={["100%", "100%", "66.66%"]}>
          <BioContainer>
            <h3>{props.name}</h3>
            <p>
              {props.jobTitle} / {props.jobPosition}
            </p>
            <article>
              <BlockContent blocks={props.bio} />
            </article>
            <IconContainer>
              <a href="#">
                <FaLinkedinIn />
              </a>
              <a href="#">
                <FaPaperPlane />
              </a>
            </IconContainer>
          </BioContainer>
        </Grid.Col>
      </Grid.Row>
    </StyledStaffCard>
  )
}

export default StaffCard
