// Used for brand consistency. The client could not provide the fonts
// used to make their logo.
// Consider updating if Base 900 Sans becomes available.

import React from "react"
import { graphql, StaticQuery } from "gatsby"
import Img from "gatsby-image"
import styled from "styled-components"

const StyledImg = styled(Img)`
  padding-top: calc((132px / 983px) * 100%);
  display: block;
  margin: 1.8vw 1vw 0 1vw;
  width: 8rem;
  @media only screen and (min-width: 375px) {
    width: 10rem;
  }
  @media only screen and (min-width: 768px) {
    width: 12rem;
    margin: 0.6rem 0.7rem 0rem 0.7rem;
  }
  @media only screen and (min-width: 1024px) {
    width: 14rem;
  }
`

const Container = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 0 2rem;
  > div {
    display: flex;
    flex: 1 1 auto;
    justify-content: center;
    align-items: center;
  }

  span {
    line-height: 1.5;
    font-size: 1.2rem;
  }

  @media only screen and (min-width: 375px) {
    span {
      font-size: 1.6rem;
    }
  }
  @media only screen and (min-width: 768px) {
    span {
      font-size: 2rem;
    }
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
const EnergySmart = ({ before, after }) => (
  <StaticQuery
    query={query}
    render={data => (
      <Container>
        <div>
          <span>{before}</span>
          <StyledImg
            fluid={data.file.childImageSharp.fluid}
            aspectRatio={data.file.childImageSharp.aspectRatio}
          />
          <span>{after}</span>
        </div>
      </Container>
    )}
  />
)

export default EnergySmart
