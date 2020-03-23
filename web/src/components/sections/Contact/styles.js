import React from "react"
import styled, { css, keyframes } from "styled-components"
import Grid from "../../containers/Grid"

export const SelectWrapper = styled.div`
  position: relative;
  select {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    display: block;
    width: 100%;
  }
  .select-icon {
    position: absolute;
    top: 50%;
    right: 0;
    padding: 0 1rem;
    transform: translate(0, -50%);
    vertical-align: middle;
    margin-top: 0.24rem;
    color: ${props => props.theme.colors.gray};
    font-weight: 200;
    pointer-events: none;
  }
`

export const autofillMixin = css`
  :-webkit-autofill {
    -webkit-box-shadow: 0 0 0px 1000px white inset;
    background-color: transparent;
  }
`
export const Form = styled.form``

export const FormButton = styled("input").attrs({
  type: "submit",
})`
  background-color: ${props => props.theme.colors.secondary};
  color: white;
  border: 1px solid ${props => props.theme.colors.secondary};
  padding: 1rem 3rem;
  font-size: 1.2rem;
  outline: none;
  transition: background-color 300ms ease-in-out;
  text-align: center;
  margin: 0 auto;
  display: block;
  border-radius: 4px;
  cursor: pointer;
  :hover {
    background-color: white;
    color: ${props => props.theme.colors.secondary};
  }
`

export const formElementStyles = css`
  box-sizing: border-box;
  height: 46px;
  padding: 10px;
  width: 100%;
  outline: ${props => props.theme.colors.secondary};
  border: 1px solid ${props => props.theme.colors.gray};
  border-radius: 4px;
  font-size: 18px;
  background-color: ${props => props.theme.colors.white};
  position: relative;
  :focus {
    border: ${props =>
      props.error
        ? "3px solid red"
        : `2px solid ${props.theme.colors.secondary}`};
  }
`

const shake = keyframes`
  0% { margin-left: 0rem; }
  25% { margin-left: 0.5rem; }
  75% { margin-left: -0.5rem; }
  100% { margin-left: 0rem; }
`
// prettier-ignore
const animation = css`
  ${shake} 300ms ease-in-out 0s 2; 
`

export const Input = styled.input`
  ${formElementStyles};
  color: ${props => props.theme.colors.black};
  :placeholder {
    color: ${props => props.theme.colors.gray};
  }
  ${autofillMixin};
  border: ${props =>
    props.error
      ? "3px solid #ff22255a"
      : `1px solid ${props => props.theme.colors.gray}`};
  animation: ${props => (props.error ? animation : "none")};
  background-color: ${props => (props.error ? "#ff222220" : "white")};
`

export const Select = styled.select`
  ${formElementStyles}
  background-color: ${props => props.theme.colors.white};
  
  :required:invalid {
    color: ${props => props.theme.colors.gray}; 
  }
  option[disabled]{
    color: ${props => props.theme.colors.gray}; 
  }

  ${autofillMixin}; 
  border: ${props =>
    props.error
      ? "3px solid red"
      : `1px solid ${props => props.theme.colors.gray}`};
`
// prettier-ignore
export const FormGrid = styled(Grid.Container)`
  padding: 3rem 1rem; 

  @media only screen and (max-width:1023px ){
    margin-bottom: -1rem; 
    max-width: 30rem; 
    ${Grid.Col}{
      margin-bottom: 1rem; 
    }
  }

  @media only screen and (min-width: 1024px) {
    ${Grid.Row}:nth-of-type(2) {
      margin: 1.2rem 0;
    }
  }
`

export const FormContainer = styled.section`
  padding: ${props =>
    props.location === "/contact/" ? "3rem 6rem" : "3rem 0rem"};
  border-top: 3px solid ${props => props.theme.colors.primary};
  background-color: ${props =>
    props.location === "/contact/" ? props.theme.colors.primary : "white"};
  @media only screen and (min-width: 1200px) {
    max-width: ${props => (props.location === "/contact/" ? "1200px" : "none")};
    margin: ${props =>
      props.location === "/contact/"
        ? "0 auto calc((100vw / 12)  ) auto"
        : "auto"};
  }
`

export const PrivacyLink = styled.a`
  font-size: 0.9rem;
  color: ${props => props.theme.colors.gray};
  line-height: 3;
  text-align: center;
  display: block;
  width: 8rem;
  margin: 0 auto;
  :hover {
    color: ${props => props.theme.colors.black};
  }
`
export const ErrorBox = styled.div`
  border: 3px solid #f9a33e;
  padding: 3rem 1rem;
  display: flex;
  align-items: center;
  border-radius: 4px;
  max-width: 1200px;
  margin: 2rem auto 0 auto;
  span {
    font-size: 2rem;
    margin-left: 2rem;
    color: #f9a33e;
    font-weight: bold;
  }
`
