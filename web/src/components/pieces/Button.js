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

const Button = styled(Link)`
  height: 0%; // needed to prevent flex grow
  border-radius: 4px;
  text-transform: ${props => (props.uppercase ? "uppercase" : "capitalize")};
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
  background-color: ${props => props.theme.colors[props.bg] || "red"};
  color: white;
  border: none;
  text-transform: ${props => (props.uppercase ? "uppercase" : "capitalize")};
  text-decoration: none;
`

export default Button
