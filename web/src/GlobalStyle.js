import { createGlobalStyle } from "styled-components"
import { normalize } from "styled-normalize"
require("typeface-lato")
const GlobalStyle = createGlobalStyle`
    ${normalize}; 
    :root {
        font-size: 16px; 
    }
    * {
        font-family: Lato;
        margin: 0; 
        padding: 0; 
        box-sizing: border-box; 
    }
    body {
        font-size: 1em; 
        line-height: 1.4em; 
        height: 100%: 
    }
`

export default GlobalStyle
