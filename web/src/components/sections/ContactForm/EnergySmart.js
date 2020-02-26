// Used for brand consistency. The client could not provide the fonts
// used to make their logo.
// Consider updating if Base 900 Sans becomes available.

import React from "react"
import { graphql, StaticQuery } from "gatsby"
import Img from "gatsby-image"
import styled from "styled-components"

const StyledImg = styled(Img)`
  /* overflow: hidden; */
  /* height: 0%; */

  padding-top: calc((132px / 983px) * 100%);
  width: 100%;
  max-width: 28.4vw;
  display: block;
  margin: 1.8vw 1vw 0 1vw;
`

const Container = styled.div`
  display: flex;
  height: 74px;
  justify-content: space-around;
  /* justify-content: center; */
  align-items: center;
  > div {
    display: flex;
    flex: 1 1 auto;
    justify-content: center;
    align-items: center;
  }
  > div > div {
    /* border: 1px dashed blue; */
  }
`

export const query = graphql`
  query {
    file(relativePath: { eq: "ESLogoText.png" }) {
      childImageSharp {
        fluid(maxWidth: 1200) {
          ...GatsbyImageSharpFluid
          aspectRatio
        }
      }
    }
  }
`
export default ({ before, after }) => (
  <StaticQuery
    query={query}
    render={data => (
      <Container>
        <div>
          {/* <span>{before}</span> */}
          <div>{before}</div>
          <StyledImg
            fluid={data.file.childImageSharp.fluid}
            aspectRatio={data.file.childImageSharp.aspectRatio}
          />
          <div>{after}</div>
          {/* <span>{after}</span> */}
        </div>
      </Container>
    )}
  />
)
