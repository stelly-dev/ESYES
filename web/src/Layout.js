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
// import SearchResults from './components/sections/SearchResults'
import styled from "styled-components"
import { FaChevronUp } from "react-icons/fa"

// const SizeOverlay = styled.div`
//   position: fixed;
//   font-size: 4rem;
//   bottom: 1rem;
//   right: 0;
//   padding: 2rem 1rem;
//   background-color: #333;
//   color: white;
//   z-index: 1000;
// `

const RhythmOverlayWrapper = styled.div`
  position: absolute;
  top: 9px;
  left: 0;
  right: 0;
  /* bottom: -1000vh; */
  z-index: 100000;
  display: flex;
  height: calc(25.6px * 1000);
  flex-direction: column;
  display: none;
`

const LineMarker = styled.div`
  max-height: calc(1em * 1.6);
  height: 100%;
  box-sizing: border-box;
  border-bottom: 1px solid #2f227f8a;
  /* background-color: ${props =>
    props.index % 2 === 0 ? "#a020a05a" : "#d050a08a"}; */
  width: 100%;
`

const RhythmOverlay = () => {
  return (
    <RhythmOverlayWrapper>
      {Array.from({ length: 1000 }).map((_, i) => (
        <LineMarker key={i} index={i} />
      ))}
    </RhythmOverlayWrapper>
  )
}

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
      <RhythmOverlay />
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
          {({ location }) => <Contact location={location.pathname} />}
        </Location>
        <Footer />
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
