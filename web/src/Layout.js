import React, { useState, useEffect } from "react"
import { ThemeProvider } from "styled-components"
import { Location } from "@reach/router"
import GlobalStyle from "./GlobalStyle"
import theme from "./theme"
import Footer from "./components/layout/Footer"
import Main from "./components/layout/Main"
import Header from "./components/layout/Header/"
import MobileNav from "./components/layout/MobileNav/"
import Contact from "./components/sections/Contact"
import Effi from "./components/sections/Effi/"
import styled from "styled-components"

const SizeOverlay = styled.div`
  position: fixed;
  font-size: 4rem;
  bottom: 1rem;
  right: 0;
  padding: 2rem 1rem;
  background-color: #333;
  color: white;
  z-index: 1000;
`

const headerHeights = [222, 152, 195]

const getHeaderHeightFromScreenWidth = width => {
  if (width < 768) {
    return 60
  } else if (width < 1024) {
    return 120
  } else {
    return 130
  }
}

const Layout = ({ children }) => {
  const [state, setState] = useState({
    scrolled: false,
    menuOpen: false,
    width: null,
  })

  useEffect(() => {
    if (typeof window === "undefined") return
    const handleResize = () =>
      setState({
        ...state,
        width: window.innerWidth,
      })
    if (state.width === null) {
      handleResize()
    }
    window.addEventListener("resize", handleResize, { passive: true })
    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [state])

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled =
        window.scrollY > getHeaderHeightFromScreenWidth(state.width)
      if (isScrolled !== state.scrolled) {
        setState({
          ...state,
          scrolled: !state.scrolled,
        })
      }
    }
    document.addEventListener("scroll", handleScroll, { passive: true })
    return () => {
      document.removeEventListener("scroll", handleScroll)
    }
  }, [state])

  const toggleMenu = e => {
    e.preventDefault()
    setState({
      ...state,
      menuOpen: !state.menuOpen,
    })
  }

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Location>
        {({ location }) => (
          <Header
            isMenuOpen={state.menuOpen}
            toggleMenu={toggleMenu}
            scrolled={state.scrolled}
            location={location.pathname}
          />
        )}
      </Location>
      <MobileNav isMenuOpen={state.menuOpen} scrolled={state.scrolled} />
      <Main isMenuOpen={state.menuOpen}>
        {children}
        <Location>
          {({ location }) => <Effi location={location.pathname} />}
        </Location>
        <Location>
          {({ location }) => <Contact location={location.pathname} />}
          {/* {({ location }) => <ContactForm location={location.pathname} />} */}
        </Location>
        <Footer />
      </Main>
    </ThemeProvider>
  )
}

export default Layout
