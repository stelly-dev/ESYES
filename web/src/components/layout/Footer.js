import React from "react"
import styled from "styled-components"
import Grid from "../containers/Grid"
import Img from "gatsby-image"
import { Link, graphql, StaticQuery } from "gatsby"
import { FaPhone } from "react-icons/fa"

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
const StyledFooter = styled.footer`
  .dark {
    background-color: ${props => props.theme.colors.black};
    color: white;
  }
  .light {
    color: ${props => props.theme.colors.black};
    background-color: #f7f7f7;
  }

  .dark,
  .light {
    padding: 3rem 0;
  }

  .footer-cta {
    text-align: right;
  }
  .text {
    color: white;
    font-size: 1.4rem;
    line-height: 1.5;
  }
  .phone-layout {
  }
  .phone-link {
    color: white;
    font-size: 1.75rem;
    font-weight: bold;
    line-height: 1.75;
    text-decoration: none;
  }
  .phone-link:visited {
    color: white;
  }
  .phone-link:hover {
    color: ${props => props.theme.colors.secondary};
  }
  .phone-icon {
    vertical-align: middle;
    font-size: 1.2rem;
    margin-right: 1rem;
    margin-bottom: 0.2rem;
    transform: rotate(90deg);
  }
  .logo {
    max-width: 396px;
  }
  .footer-link_wrapper {
    text-align: center;
  }

  .footer-link {
    color: ${props => props.theme.colors.secondary};
    font-size: 1.5rem;
    line-height: 2;
    font-weight: bold;
    text-transform: uppercase;
    text-decoration: none;
  }

  .footer-link:visited {
    color: ${props => props.theme.colors.secondary};
  }

  .footer-link:hover {
    color: ${props => props.theme.colors.primary};
  }

  .separator {
    font-size: 1.5rem;
    margin: 0 0.5rem;
    font-weight: bold;
    color: ${props => props.theme.colors.secondary};
  }

  .copyright {
    font-size: 1rem;
    line-height: 1.5;
    text-align: center;
    margin-top: 1.5rem;
    padding: 0 1rem;
  }

  .policy-link,
  .policy-link:visited {
    color: ${props => props.theme.colors.gray};
  }

  @media only screen and (min-width: 768px) {
    .footer-cta {
      margin-top: 1.25rem;
    }
  }
`

const Footer = () => (
  <StyledFooter>
    <section className="dark">
      <Grid.Container>
        <Grid.Row
          display={["flex"]}
          flexDirection={["column", "column", "row"]}
        >
          <Grid.Col
            marginBottom={["3rem", "3rem", "0"]}
            flexBasis={["100%", "100%", "50%"]}
          >
            <StaticQuery
              query={query}
              render={data => (
                <Link to="/">
                  <Img
                    className="logo"
                    fluid={data.sanityHeader.logo.asset.fluid}
                    alt={data.sanityHeader.logoAlt}
                  />
                </Link>
              )}
            />
          </Grid.Col>
          <Grid.Col flexBasis={["100%", "100%", "50%"]}>
            <div className="footer-cta">
              <div className="text">Your EnergySmart Advisor</div>
              <div className="phone-layout">
                <a className="phone-link" href="tel:303-544-1000">
                  <FaPhone className="phone-icon" />
                  303-544-1000
                </a>
              </div>
            </div>
          </Grid.Col>
        </Grid.Row>
      </Grid.Container>
    </section>
    <section className="light">
      <div className="footer-link_wrapper">
        <Link className="footer-link" to="/contact">
          Contact
        </Link>
        <span className="separator">|</span>
        <a
          className="footer-link"
          href="https://energysmartyes.com/sitemap.xml"
        >
          Site map
        </a>
      </div>
      <p className="copyright">
        Copyright © {new Date().getFullYear()}. Boulder County EnergySmart. All
        Rights Reserved.{" "}
        <a
          className="policy-link"
          href="https://www.bouldercounty.org/privacy-policy/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Privacy Policy and Legal Information
        </a>
      </p>
    </section>
  </StyledFooter>
)

export default Footer
