import React from "react"
import styled, { css } from "styled-components"
import Block from "../Block"
import Grid from "../../containers/Grid"

const BORDER_GRADIENTS = {
  "#F9a33e": `linear-gradient(
        90deg,
        rgb(249, 163, 62) 0%,
        rgb(254, 224, 6) 100%
      )
      0% 0% no-repeat padding-box padding-box transparent;
  `,
  "#0ea6c6": `linear-gradient(
        90deg,
        rgb(14, 166, 198) 0%,
        rgb(30,215,220) 100%
      )
      0% 0% no-repeat padding-box padding-box transparent;
  `,
  "#333333": `linear-gradient(
        90deg,
        rgb(51, 51, 51) 0%,
        rgb(171, 171, 171) 100%
      )
      0% 0% no-repeat padding-box padding-box transparent;
  `,
}

const ALIGNMENT_STYLES = {
  left: ` 0 auto 1.2rem 0`,
  right: ` 0 0 1.2rem auto`,
  center: ` 0 auto 1.2rem auto`,
}

const Title = styled.span`
  position: absolute;
  background: white;
  font-weight: bold;
  font-size: 1.25rem;
  color: ${props => props.color};
  font-style: italic;
  box-sizing: border-box;
`

const displayStyles = displaySize => {
  if (displaySize === "full") {
    return null
  } else if (displaySize === "80%") {
    return css`
      max-width: 80%;
      margin-left: auto;
      margin-right: auto;
    `
  }
}

const CalloutWrapper = styled.section`
  position: relative;
/*${props =>
  props.displaySize ? displayStyles(props.displaySize.toString()) : null}; */
  @media only screen and (max-width: 767px) {
    ${Title} {
      left: 50%;
      min-height: 3rem;
      padding: 0 10px;
      top: -1.15rem;
      transform: translate(-50%, 0%);
      display: block;
      max-width: 260px;
    }
  }

  @media only screen and (min-width: 1024px) {
    ${Title} {
      font-size: 1.2rem;
    }
  }

  .content_outer {
    background: ${props =>
      props.borderColor ? BORDER_GRADIENTS[props.borderColor] : "black"};
    padding: 20px;
  }
  .content_inner {
    margin: -15px;
    background-color: white;
    border: 1px solid white;
  }
  ${props => (props.alignment ? alignTitle(props.alignment) : null)};
`

function alignTitle(titleAlignment) {
  switch (titleAlignment) {
    case "left":
      return css`
        @media only screen and (min-width: 768px) {
          ${Title} {
            left: 1rem;
            top: -1rem;
            padding: 0 10px;
            display: inline;
          }
        }
      `
    case "right":
      return css`
        @media only screen and (max-width: 767px) {
          ${Title} {
            right: 50%;
            top: -2.25rem;
            transform: translate(50%, 0%);
          }
        }

        @media only screen and (min-width: 768px) {
          ${Title} {
            right: 1rem;
            top: -1rem;
            padding: 0 10px;
            display: inline;
          }
        }
      `

    case "center":
      return css`
        @media only screen and (max-width: 767px) {
          ${Title} {
            left: 50%;
            top: -2.25rem;
            transform: translate(-50%, 0%);
          }
        }
        @media only screen and (min-width: 768px) {
          ${Title} {
            padding: 0 1rem;
            top: -1rem;
            left: 50%;
            transform: translate(-50%, 0%);
            display: inline;
          }
        }
        @media only screen and (min-width: 1024px) {
        }
      `

    default:
      return css`
        @media only screen and (max-width: 767px) {
          ${Title} {
            left: 50%;
            top: -2.25rem;
            transform: translate(-50%, 0%);
          }
        }
        @media only screen and (min-width: 768px) {
          ${Title} {
            padding: 0 1rem;
            top: -1rem;
            left: 50%;
            transform: translate(-50%, 0%);
            display: inline;
          }
        }
      `
  }
}

/*
 * I really like the way this gradient looks, but 
 * there's no way to display it right now. 
 * going to finish making the adjustments 
 * and then update the studio as a surprise. 

  "#0ea6c6": `linear-gradient(
        90deg,
        rgb(14, 166, 198) 0%,
        rgb(254, 224, 6) 100%
      )
      0% 0% no-repeat padding-box padding-box transparent;
  `,
  */

const CalloutBox = ({
  title,
  color,
  content,
  alignment,
  borderColor,
  displaySize,
  ...rest
}) => {
  return (
    <Grid.Container marginTop={["3.5rem"]}>
      <CalloutWrapper
        displaySize={displaySize}
        alignment={alignment}
        borderColor={borderColor}
      >
        <Title color={color}>{title}</Title>
        <div className="content_outer">
          <div className="content_inner">
            <Block blocks={content} />
          </div>
        </div>
      </CalloutWrapper>
    </Grid.Container>
  )
}

CalloutBox.defaultProps = {
  title: "",
  color: "#F9a33e",
  content: "Your Content Goes Here",
  alignment: "left",
  borderColor: "#F9a33e",
  displaySize: "wide",
}

export default CalloutBox
