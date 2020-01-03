import React from "react"
import styled, { ThemeProvider } from "styled-components"
import GlobalStyle from "./GlobalStyle"
import theme from "./theme"
import { PageWrapper } from "./components/containers/"
import { Header, Footer } from "./components/layout/"

const Layout = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <PageWrapper>
        <Header />
        {children}
        <Footer />
      </PageWrapper>
    </ThemeProvider>
  )
}

export default Layout
