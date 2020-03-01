import React from "react"
import styled from "styled-components"

const Bubble = () => (
  <svg viewBox="0 0 396 195">
    <defs />
    <defs />
    <circle
      cx="97.5"
      cy="97.5"
      r="97.5"
      className="a"
      transform="translate(104)"
    />
    <circle cx="42" cy="42" r="42" className="a" transform="translate(0 56)" />
    <circle
      cx="18.5"
      cy="18.5"
      r="18.5"
      className="a"
      transform="translate(65 19)"
    />
    <circle cx="13" cy="13" r="13" className="a" transform="translate(14 20)" />
    <g transform="translate(294 60)">
      <circle cx="42" cy="42" r="42" className="a" transform="translate(18)" />
      <circle
        cx="18.5"
        cy="18.5"
        r="18.5"
        className="a"
        transform="translate(0 84)"
      />
      <circle
        cx="13"
        cy="13"
        r="13"
        className="a"
        transform="translate(52 94)"
      />
    </g>
  </svg>
)

const BubbleWrapper = styled.div`
  svg {
    color: blue;
    fill: #dcf2f7;
    width: 100%;
  }
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  margin-top: 2rem;
  @media only screen and (min-width: 1024px) {
  }
`

const BubbleTextWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;

  .counter_value {
    width: 100%;
    font-size: calc(15.5vw);
    line-height: 1.25;
  }
  .counter_title {
    white-space: nowrap;
    color: ${props => props.theme.colors.secondary};
    text-transform: uppercase;
    font-weight: bold;
    font-size: calc(6.3vw);
    line-height: 2.25;
  }

  @media only screen and (min-width: 768px) {
    .counter_value {
      font-size: 3.75rem;
      line-height: 1.25;
    }

    .counter_title {
      font-size: 1.55rem;
      line-height: 2.25;
    }
  }

  @media only screen and (min-width: 1024px) {
    .counter_value {
      font-size: 2.4rem;
    }
    .counter_title {
      font-size: 1rem;
    }
  }
`

const BubbleText = ({ children }) => (
  <BubbleWrapper>
    <Bubble />
    <BubbleTextWrapper>{children}</BubbleTextWrapper>
  </BubbleWrapper>
)

export default BubbleText
