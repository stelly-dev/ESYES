import styled from "styled-components"
import { Link } from "gatsby"
import Container from "../../containers/Container"

export const TextLink = styled(Link)`
  color: ${props => props.theme.colors.secondary};
  text-decoration: underline;
  /* font-size: 18px; */
  :hover {
    color: ${props => props.theme.colors.black};
  }
`

export const BlockSection = styled.div`
  color: ${props => props.theme.colors.black};
  ul {
    list-style: none;
  }
  ul li:before {
    content: "·";
    margin-right: 1ch;
    /* padding-bottom: 200px; */
    vertical-align: center;
  }
  ul {
    li {
      margin-left: 3ch; 
      text-indent: -1.5ch; 
      padding-left: 1.5ch; ; 
    }
  }
 @media only screen and (min-width: 1024px){

   /* ul,
   h3,
   h4,
   h5,
   h6,
   section,
   p {
     max-width: 834px; 
     margin: 0 auto;
    }
  }  */
  @media only screen and (min-width: 1200px) {
    /* ul,
    h3,
    h4,
    h5,
    h6,
    section,
    p {
      max-width: 69.5vw;
      margin: 0 auto;
    } */
    /* ${Container} ul :first-of-type {
      margin-top: 1.45vw;
      margin-bottom: 2.5vw;
    } */
   } 
  }

  @media only screen and (min-width: 2000px) {
    ${Container} ul:first-of-type {
      margin-top: 29px;
      margin-bottom: 50px;
    }
  }
`
