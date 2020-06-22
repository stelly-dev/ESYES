import React from "react"
import styled from "styled-components"
import Block from "../Block"

const Title = styled.span`
  position: relative;
  background: white;
  font-weight: bold;
  font-size: 1.25rem;
  color: ${props => props.color};
  font-style: italic;
`

const CalloutWrapper = styled.section`
  @media only screen and (max-width: 767px) {
    ${Title} {
      max-width: 280px;
      display: block;
      top: 1.5rem;
      min-height: 3rem;
      left: 50%;
      transform: translate(-50%, 0);
      padding: 0 10px;
      text-align: center;
    }
    margin: 0 1rem;
  }

  @media only screen and (min-width: 768px) {
    ${Title} {
      padding: 0 10px;
      top: 1rem;
      left: 1rem;
    }
    margin: 0 auto;
    max-width: 80vw;
  }

  @media only screen and (min-width: 1024px) {
    ${Title} {
      top: 1rem;
      left: 1rem;
      font-size: 1.2rem;
      padding: 0 10px;
    }
  }

  @media only screen and (min-width: 1200px) {
    max-width: 1000px;
    margin: 0 auto;
  }

  .content_outer {
    padding: 20px;
    background: linear-gradient(
        90deg,
        rgb(249, 163, 62) 0%,
        rgb(254, 224, 6) 100%
      )
      0% 0% no-repeat padding-box padding-box transparent;
  }
  .content_inner {
    margin: -15px;
    background-color: white;
    border: 1px solid white;
  }
`

const CalloutBox = ({ title, color, content }) => {
  return (
    <CalloutWrapper>
      <Title color={color}>{title}</Title>
      <div className="content_outer">
        <div className="content_inner">
          <Block blocks={content} />
        </div>
      </div>
    </CalloutWrapper>
  )
}

export default CalloutBox
