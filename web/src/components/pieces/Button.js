import styled from "styled-components"

const Button = styled.button`
  height: 0%; // needed to prevent flex grow
  border-radius: 4px;
  text-transform: ${props => (props.uppercase ? "uppercase" : "capitalize")};
  font: bold 22px/30px Lato;
  padding: ${props => (props.py ? props.py : 0)}rem
    ${props => (props.px ? props.px : 0)}rem
    ${props => (props.py ? props.py : 0)}rem
    ${props => (props.px ? props.px : 0)}rem;
  background-color: ${props => props.theme.colors[props.bg] || "red"};
  color: white;
  border: none;
  text-transform: ${props => (props.uppercase ? "uppercase" : "capitalize")};
  margin: ${props => (props.margin ? props.margin : 0)}rem;
  margin-left: ${props => (props.ml ? props.ml : 0)}rem;
  margin-right: ${props => (props.mr ? props.mr : 0)}rem;
  margin-top: ${props => (props.mt ? props.mt : 0)}rem;
  margin-bottom: ${props => (props.mb ? props.mb : 0)}rem;
  min-width: ${props => (props.minWidth ? props.minWidth : 0)}rem;
  width: ${props => (props.width ? `${props.width}rem` : "auto")};
`

export default Button
