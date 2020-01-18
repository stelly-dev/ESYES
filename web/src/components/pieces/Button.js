import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import { borderRadius, space, fontSize, variant, color } from "styled-system"

const Button = styled(Link)(
  {
    border: 0,
    outline: 0,
    textDecoration: "none",
  },
  variant({
    variants: {
      primary: {
        backgroundColor: "primary",
        color: "white",
      },
    },
  }),
  borderRadius,
  space,
  fontSize,
  color
)

Button.defaultProps = {
  variant: "primary",
  size: "medium",
}

export default Button
