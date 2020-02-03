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
  display: block;
  margin: 0 auto;
  height: 102px;
  border: 1px solid red;
  min-width: 320px;
  max-width: 543px;
  width: 100%;
`

const StyledFooter = styled.footer`
  height: 620px;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr 1fr;
  margin-top: 50px;
  @media only screen and (min-width: 1310px) {
    margin-top: 100px;
  }
`
const TopFooter = styled.section`
  background-color: ${props => props.theme.colors.black};
  ${Container} {
    height: 100%;
    border: 1px solid red;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`

const BottomFooter = styled.section``

const CTAContainer = styled.div``

const Title = styled.h5`
  text-decoration: underline;
  text-transform: uppercase;
  font-weight: 700;
`

const StyledPhoneLogo = styled(FaPhone)``

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
                <LogoContainer>
                  <Img
                    fluid={data.sanityHeader.logo.asset.fluid}
                    alt={data.sanityHeader.logoAlt}
                  />
                </LogoContainer>
                <CTAContainer>
                  <Title>Get In Touch</Title>
                  <p>Boulder County Energy Advisers</p>
                  <StyledPhoneLogo /> <p>303-544-1000</p>
                </CTAContainer>
              </Container>
            </TopFooter>
            <BottomFooter></BottomFooter>
          </StyledFooter>
        )
      }}
    />
  )
}

export default Footer
