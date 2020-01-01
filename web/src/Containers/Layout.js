import React from "react"
import { ThemeProvider } from "styled-components"
import { graphql } from "gatsby"
import GlobalStyle from "../GlobalStyle"
import theme from "../theme"
import Header from "./Header"
import Footer from "./Footer"

// TODO:
// get navigation links from sanity

const fakeLinks = [
  { title: "Home Energy Advising", to: "/home-energy-advising" },
]

const Layout = ({ children }) => (
  <>
    <GlobalStyle />
    <ThemeProvider theme={theme}>
      <Header navLinks={fakeLinks} />
      {children}
      <Footer />
    </ThemeProvider>
  </>
)

export default Layout
