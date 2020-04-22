import React from "react"
import styled from "styled-components"
import { getFluidGatsbyImage } from "gatsby-source-sanity"
import Img from "gatsby-image"
import Grid from "../../containers/Grid"
import clientConfig from "../../../../client-config"
import {flexbox, layout} from 'styled-system'; 


const StyledSvg = styled.svg`
  ${flexbox};
  ${layout}; 
`

function Banner({ textArray, ...props }) {
  return (
    <StyledSvg viewBox="0 0 263.16 99.389" {...props}>
      <path fill="#f9a33e" d="M0 0h33.819v31.948H0z" />
      <g fill="#0ea6c6">
        <path d="M33.818 0h229.34v31.948H33.818zM33.818 67.441h229.34v31.948H33.818zM33.818 33.72h229.34v31.948H33.818z" />
      </g>
      <path
        fill="#f9a33e"
        d="M0 33.72h33.819v31.948H0zM0 67.441h33.819v31.948H0z"
      />
      <g
        fill="#fff"
        fontFamily="Lato"
        letterSpacing={0}
        strokeWidth={0.265}
        wordSpacing={0}
      >
        <g fontSize={21.167}>
          <text
            x={-50.805}
            y={-52.094}
            style={{
              lineHeight: 1.25,
            }}
            transform="translate(63.026 75.571)"
          >
            <tspan x={-50.805} y={-52.094}>
              {"1"}
            </tspan>
          </text>
          <text
            x={-51.599}
            y={-18.373}
            style={{
              lineHeight: 1.25,
            }}
            transform="translate(63.026 75.571)"
          >
            <tspan x={-51.599} y={-18.373}>
              {"2"}
            </tspan>
          </text>
          <text
            x={-51.831}
            y={15.231}
            style={{
              lineHeight: 1.25,
            }}
            transform="translate(63.026 75.571)"
          >
            <tspan x={-51.831} y={15.231}>
              {"3"}
            </tspan>
          </text>
        </g>
        <g fontSize={11.289} fontWeight={500}>
          <text
            x={-17.105}
            y={-55.567}
            style={{
              lineHeight: 1.25,
            }}
            transform="translate(63.026 75.571)"
          >
            {textArray[0]}
          </text>
          <text
            x={-17.64}
            y={-21.847}
            style={{
              lineHeight: 1.25,
            }}
            transform="translate(63.026 75.571)"
          >
            <tspan x={-17.64} y={-21.847}>
              {textArray[1]}
            </tspan>
          </text>
          <text
            x={-17.907}
            y={11.874}
            style={{
              lineHeight: 1.25,
            }}
            transform="translate(63.026 75.571)"
          >
            <tspan x={-17.907} y={11.874}>
              {textArray[2]}
            </tspan>
          </text>
        </g>
      </g>
    </StyledSvg>
  )
}

const StyledImg = styled(Img)`
  width: 100%;
  height: 100%;
  img picture {
    object-position: left center;
    object-fit: fill;
  }
`

const BannerList = ({ image }) => {
  return (
    <Grid.Container>
      <Grid.Row display={["flex"]} flexDirection={["column", "column", "row", "row", "row"]} width={["100%"]}>
        <Grid.Col  flexBasis={["calc(66.666% - 1rem)"]} order={["2", "2", "1", "1", "1"]}>
          <Banner
            width={['100%']}
            textArray={[
              <tspan>
                <tspan style={{ textDecoration: "underline" }}>SIGN UP</tspan>{" "}
                or call 303.544.1000
              </tspan>,
              <tspan>Get expert home energy help</tspan>,
              <tspan>Save money on energy upgrades</tspan>,
            ]}
          />
        </Grid.Col>
        <Grid.Col flexBasis={["calc(33.333% - 1rem)"]}  order={["1", "1", "2", "2", "2"]} height={['100%']}>
          <StyledImg
            fluid={getFluidGatsbyImage(
              image,
              { maxWidth: 800 },
              clientConfig.sanity
            )}
          />
        </Grid.Col>
      </Grid.Row>
    </Grid.Container>
  )
}

export default BannerList
