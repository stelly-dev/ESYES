import React, { useState } from "react"
import { ThemeProvider } from "styled-components"
import { Location } from "@reach/router"
import GlobalStyle from "./GlobalStyle"
import theme from "./theme"
import Footer from "./components/layout/Footer"
import Main from "./components/layout/Main"
import Header from "./components/layout/Header/"
import MobileNav from "./components/layout/MobileNav/"
import ContactForm from "./components/sections/ContactForm/"
import Effi from "./components/sections/Effi/"
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
      <MobileNav isMenuOpen={menuOpen} />
      <Main isMenuOpen={menuOpen}>
        {children}
        <Location>
          {({ location }) => <Effi location={location.pathname} />}
        </Location>
        <Location>
          {({ location }) => <ContactForm location={location.pathname} />}
        </Location>
        <Footer />
      </Main>
    </ThemeProvider>
  )
}

export default Layout
