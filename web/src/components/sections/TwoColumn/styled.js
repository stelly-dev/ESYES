import styled from "styled-components"
import { Link } from "gatsby"
import { StyledImage } from "../Block/"

export const TextLink = styled(Link)``

export const BlockSection = styled.div`
  :first-of-type {
    margin-top: 50px;
  }

  @media only screen and (min-width: 1200px) {
    :first-of-type {
      margin-top: 100px;
    }
  }

  color: ${props => props.theme.colors.black};
  font-size: 18px;
  ul {
    list-style: none;
    margin-left: 3ch;
  }
  ul li:before {
    content: "·";
    margin-right: 1ch;
    padding-bottom: 200px;
    vertical-align: center;
  }

  ${StyledImage} {
    border: 5px solid red !important;
  }
`
