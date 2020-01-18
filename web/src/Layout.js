import React, { useState } from "react"
import { ThemeProvider } from "styled-components"
import GlobalStyle from "./GlobalStyle"
import theme from "./theme"
import Footer from "./components/layout/Footer"
import Main from "./components/layout/Main"
import Header from "./components/layout/Header/"
import { Home } from "./MyPages"

const Layout = ({ children }) => {
  const [menuOpen, setMenuOpen] = useState(false)
  const toggleMenu = e => {
    e.preventDefault()
    setMenuOpen(!menuOpen)
  }
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />

      <Header isMenuOpen={menuOpen} toggleMenu={toggleMenu} />
      <Main isMenuOpen={menuOpen}>
        <Home />
        {children}
        <Footer />
      </Main>
    </ThemeProvider>
  )
}

export default Layout
