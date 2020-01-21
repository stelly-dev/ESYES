import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import { borderRadius, space, fontSize, variant, color } from "styled-system"

const Button = styled(Link)(
  {
    border: 0,
    outline: 0,
    textDecoration: "none",
    display: "block",
  },
  variant({
    variants: {
      primary: {
        backgroundColor: "primary",
        color: "white",
        width: ["156px", "156px", "156px", "254px"],
        height: ["40px", "40px", "40px", "55px"],
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontWeight: 700,
        borderRadius: "4px",
        fontSize: ["16px", "16px", "16px", "22px"],
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
