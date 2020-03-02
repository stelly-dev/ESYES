import React from "react"
import styled from "styled-components"
import { Link, StaticQuery } from "gatsby"
import Img from "gatsby-image"
import { FaPhone } from "react-icons/fa"
import Container from "../containers/Container"

const query = graphql`
  query FooterQuery {
    sanityHeader {
      logo {
        asset {
          fluid(maxWidth: 396) {
            ...GatsbySanityImageFluid_noBase64
          }
        }
      }
      logoAlt
    }
  }
`
const LogoContainer = styled(Link)`
  box-sizing: border-box;
  display: block;
  max-width: 343px;
  margin: 0 auto;
  margin-bottom: 50px;
  @media only screen and (min-width: 600px) {
    margin-right: auto;
    * {
      display: block;
      height: 102px;
      width: 343px;
      overflow: hidden;
    }
  }
`

const StyledFooter = styled.footer`
  /* margin-top: 50px; */
`
const TopFooter = styled.section`
  /* padding: 50px 0 44px 0; */
  background-color: ${props => props.theme.colors.black};
  color: white;
  @media only screen and (min-width: 600px) {
    ${Container} {
      @supports (display: grid) {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        align-items: center;
      }
    }
  }
`

const BottomFooter = styled.section`
  text-align: center;
  /* padding: 47px 0 41px 0; */
  color: ${props => props.theme.colors.secondary};
  font-weight: bold;
  div {
    display: flex;
    justify-content: center;
    align-items: center;
    span {
      padding: 0 0.7ch;
    }
  }
  a {
    text-transform: uppercase;
    color: ${props => props.theme.colors.secondary};
    font-size: 22px;
    line-height: 33px;
    font-weight: bold;
    text-decoration: none;
  }
  p {
    font-weight: normal;
    font-size: 16px;
    line-height: 25.6px;
    color: ${props => props.theme.colors.black};
    padding-top: 25px;
    padding-left: 1rem;
    padding-right: 1rem;
  }
`

const CTAContainer = styled.div`
  p:first-of-type {
    padding: 20px 0;
    font-size: 22px;
    line-height: 33px;
  }
  p:last-of-type {
    font-size: 35px;
    line-height: 45px;
  }
  grid-column: 3 / span 1;
`

const Title = styled.a`
  font-size: 27px;
  line-height: 33px;
  text-transform: uppercase;
  text-decoration: underline;
  font-weight: bold;
`

const StyledPhoneLogo = styled(FaPhone)`
  transform: scaleX(-1);
  font-size: 24px;
`

const Footer = () => {
  return (
    <StaticQuery
      query={query}
      render={data => {
        if (!data.sanityHeader.logo) {
          throw new Error(
            'Missing "Site Logo". Open the studio and add "Site Logo" Data'
          )
        }
        return (
          <StyledFooter>
            <TopFooter>
              <Container>
                <LogoContainer to="/">
                  <Img
                    fluid={data.sanityHeader.logo.asset.fluid}
                    alt={data.sanityHeader.logoAlt}
                  />
                </LogoContainer>
                <CTAContainer>
                  <Title>Get In Touch</Title>
                  <p>Boulder County Energy Advisers</p>
                  <p>
                    {" "}
                    <StyledPhoneLogo /> 303-544-1000
                  </p>
                </CTAContainer>
              </Container>
            </TopFooter>
            <BottomFooter>
              <div>
                <Link to="/contact/">CONTACT</Link>
                <span>{" | "}</span> <Link>SITE MAP</Link>
              </div>
              <p>
                Copyright © 2019. Boulder County EnergySmart. All Rights
                Reserved. Privacy Policy and Legal Information
              </p>
            </BottomFooter>
          </StyledFooter>
        )
      }}
    />
  )
}

export default Footer
