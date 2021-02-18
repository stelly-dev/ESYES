import React, { useState, useEffect } from "react"
import styled, { ThemeProvider } from "styled-components"
import { Location } from "@reach/router"
import { FaChevronUp } from "react-icons/fa"
import GlobalStyle from "./GlobalStyle"
import theme from "./theme"
import Footer from "./components/layout/Footer"
import Main from "./components/layout/Main"
import Header from "./components/layout/Header"
import MobileNav from "./components/layout/MobileNav"
import Contact from "./components/sections/Contact"
import Effi from "./components/sections/Effi"
import Buildsmart from "./components/sections/BuildSmart"
import { Link } from "gatsby"
import { FiGlobe } from "react-icons/fi"

const ToTopButton = styled.button`
  position: fixed;
  right: 20px;
  bottom: 3rem;
  padding: 1rem 1.4rem;
  background-color: #000000a2;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  z-index: 10000;
`

const FloatingButton = styled(Link)`
  position: fixed;
  right: 96px;
  bottom: 3rem;
  height: 48px !important;
  background-color: #f9a33e;
  color: white;
  display: ${props => (props.hidden ? "hidden" : "flex")};
  justify-content: center;
  align-items: center;
  padding: 0 1rem;
  border-radius: 500px;
  cursor: pointer;
  font-weight: 600;
  box-shadow: 1px 1px 4px #00000050;
  text-decoration: none;
  line-height: 1rem;
`

const LanguageButton = ({ location }) => {
  const isSpanish = location.pathname.match(/\/es\//)
  if (isSpanish) {
    const englishRoute = location.pathname.split("/")[2]
    return (
      <FloatingButton to={`/${englishRoute}`}>
        <FiGlobe color="white" style={{ marginRight: "10px" }} />
        English
      </FloatingButton>
    )
  }
  return (
    <FloatingButton to={`/es${location.pathname}`}>
      <FiGlobe color="white" style={{ marginRight: "10px" }} />
      Español
    </FloatingButton>
  )
}

const getHeaderHeightFromScreenWidth = width => {
  if (width < 768) {
    return 60
  }
  if (width < 1024) {
    return 120
  }
  return 130
}

const Layout = ({ children }) => {
  const [state, setState] = useState({
    scrolled: false,
    menuOpen: false,
    width: null,
    toTopVisible: false,
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
      if (window.scrollY > 300) {
        setState({
          ...state,
          toTopVisible: true,
        })
      } else if (window.scrollY <= 300) {
        setState({
          ...state,
          toTopVisible: false,
        })
      }
      if (isScrolled !== state.scrolled) {
        setState({
          ...state,
          scrolled: !state.scrolled,
        })
      }
    }
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [state])

  const toggleMenu = e => {
    e.preventDefault()
    setState({
      ...state,
      menuOpen: !state.menuOpen,
    })
  }

  const scrollToTop = () => {
    if (typeof window !== "undefined") {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      })
      if (window.scrollY === 0) {
        setState({
          ...state,
          toTopVisible: false,
        })
      }
    }
  }
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Location>
        {({ location }) => (
          <Header
            isMenuOpen={state.menuOpen}
            toggleMenu={toggleMenu}
            scrolled={state.scrolled || false}
            location={location.pathname}
          />
        )}
      </Location>
      <MobileNav isMenuOpen={state.menuOpen} scrolled={state.scrolled} />
      <Main isMenuOpen={state.menuOpen} toTopVisible={state.toTopVisible}>
        {children}
        {/* <Location>{({ location }) => <SearchResults location={location} />}</Location> */}
        <Location>{({ location }) => <Effi location={location} />}</Location>
        <Location>
          {({ location }) => <Buildsmart location={location} />}
        </Location>
        <Location>
          {({ location }) =>
            location.pathname === "/thank-you/" ? null : (
              <Contact location={location.pathname} />
            )
          }
        </Location>
        <Footer />
        <Location>
          {({ location }) => (
            <LanguageButton hidden={state.toTopVisible} location={location} />
          )}
        </Location>
        {state.toTopVisible ? (
          <ToTopButton onClick={() => scrollToTop()}>
            <FaChevronUp />
          </ToTopButton>
        ) : null}
      </Main>
    </ThemeProvider>
  )
}

export default Layout
