import { createGlobalStyle } from "styled-components"
import { normalize } from "styled-normalize"
require("typeface-lato")
const GlobalStyle = createGlobalStyle`
    ${normalize}; 
    * {
        font-family: Lato;
        margin: 0; 
        padding: 0; 
        line-height: 0; 
        box-sizing: border-box; 
    }
`

export default GlobalStyle
