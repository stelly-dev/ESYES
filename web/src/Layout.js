import React from "react"
import { ThemeProvider } from "styled-components"
import GlobalStyle from "./GlobalStyle"
import theme from "./theme"
import { PageWrapper } from "./components/containers/"
import { Header, Footer } from "./components/layout/"
import { Home } from "./MyPages"

const Layout = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <PageWrapper>
        <Header />
        <Home />
        {/* {children} */}
        <Footer />
      </PageWrapper>
    </ThemeProvider>
  )
}

export default Layout
