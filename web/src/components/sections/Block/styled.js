import styled from "styled-components"
import { Link } from "gatsby"

export const TextLink = styled(Link)``

export const BlockSection = styled.section`
  color: ${props => props.theme.colors.black};
  font-size: 16px; 
  ul {
    list-style: none; 
    margin-left: 3ch; 
  }
  ul li:before {

  content:"•"; font-size:8px;
  margin-right: 1ch; 
  padding-bottom: 200px;  
  vertical-align: center; 
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
