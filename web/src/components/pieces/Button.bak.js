import React from "react"
import styled, { css } from "styled-components"
import { Link } from "gatsby"

const paddingX = x => css`
  padding-left: ${x};
  padding-right: ${x};
`
const paddingY = y => css`
  padding-top: ${y};
  padding-bottom: ${y};
`
const paddingDir = (dir, padding) => {
  const paddingStyles = {
    left: css`
      padding-left: ${padding};
    `,
    right: css`
      padding-right: ${padding};
    `,
    top: css`
      padding-top: ${padding};
    `,
    bottom: css`
      padding-bottom: ${padding};
    `,
  }
  return paddingStyles[dir]
}

const marginDir = (dir, margin) => {
  const marginStyles = {
    left: css`
      margin-left: ${margin};
    `,
    right: css`
      margin-right: ${margin};
    `,
    top: css`
      margin-top: ${margin};
    `,
    bottom: css`
      margin-bottom: ${margin};
    `,
  }
  return marginStyles[`${dir}`]
}

const marginX = x => css`
  margin-left: ${x};
  margin-right: ${x};
`

const marginY = y => css`
  margin-top: ${y};
  margin-bottom: ${y};
`

const minWidthStyle = minWidth => css`
  width: ${minWidth};
  min-width: ${minWidth};
`

const underlineStyle = css`
  text-decoration: underline;
`

const Button = styled(({ hoverBg, hoverColor, ...props }) => (
  <Link {...props} />
))` 
  height: 0%; 
  border-radius: 4px;
  font: bold 22px/30px Lato;
  ${props => (props.px ? paddingX(props.px) : "")};
  ${props => (props.py ? paddingY(props.py) : "")};
  ${props => (props.pl ? paddingDir("left", props.pl) : "")};
  ${props => (props.pr ? paddingDir("right", props.pr) : "")};
  ${props => (props.pb ? paddingDir("bottom", props.pb) : "")};
  ${props => (props.pt ? paddingDir("top", props.pt) : "")};
  ${props => (props.mx ? marginX(props.mx) : "")};
  ${props => (props.my ? marginY(props.my) : "")};
  ${props => (props.ml ? marginDir("left", props.ml) : "")};
  ${props => (props.mr ? marginDir("right", props.mr) : "")};
  ${props => (props.mb ? marginDir("bottom", props.mb) : "")};
  ${props => (props.mt ? marginDir("top", props.mt) : "")};
  ${props => (props.minWidth ? minWidthStyle(props.minWidth) : "")};
  ${props => (props.underline ? underlineStyle : "")}; 
  background-color: ${props => props.theme.colors[props.bg] || "red"};
  color: white;
  border: none;
  text-decoration: none;
  :hover {
    ${props =>
      props.hoverBg
        ? `background-color: ${props.theme.colors[props.hoverBg]}`
        : ""}; 
    ${props =>
      props.hoverColor
        ? `color: ${props.theme.colors[props.hoverColor]}`
        : ""}; 
`

export default Button
