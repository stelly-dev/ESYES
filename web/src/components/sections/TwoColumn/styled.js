import styled from "styled-components"
import { Link } from "gatsby"
import { StyledImage } from "../Block/"

export const TextLink = styled(Link)``

export const BlockSection = styled.div`
  /* margin-bottom: 0 ;
  padding-top: 0 ;
  margin-top: 0 ;  */
  :first-of-type {
    margin-top: 50px ; 
  }

  @media only screen and (min-width: 1200px){
    :first-of-type {
      margin-top: 100px ; 
    }
  }

  color: ${props => props.theme.colors.black};
  font-size: 18px; 
  ul {
    list-style: none; 
    margin-left: 3ch; 
  }
  ul li:before {

  content:"·"; 
  margin-right: 1ch; 
  padding-bottom: 200px;  
  vertical-align: center; 
  }

  ${StyledImage}{
     border: 5px solid red !important; 
  }
  /* h1 {
    font-size: 65px;
    line-height: 85px;
    text-align: center;
  } */
  /* h2 {
    color: ${props => props.theme.colors.primary};
    font-size: 45px;
    line-height: 58px;
    margin: 50px 0;
  } */
  /* p {
    font-size: 20px;
    line-height: 34px;
  }
  em {
    width: 100%;
    display: block;
    margin-bottom: 50px;
  } */
`
