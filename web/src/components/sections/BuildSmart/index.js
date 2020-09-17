import React, { useRef } from "react"
import IframeResizer from "iframe-resizer-react"
import styled from "styled-components"
import logo from "../../../images/buildsmart logo 4c.svg"

const Container = styled.section`
  /* min-height: 100vh; */
  /* background-color: red; */
  /* padding-top: 5vw; */
  img {
    width: 12rem;
    margin: 0 auto;
    position: relative;
    left: 50%;
    padding-top: 4rem;
    transform: translate(-50%, 0);
    box-sizing: border-box;
  }
  iframe {
    border: none;
    margin-bottom: 0;
    padding-bottom: 0;
    /* overflow: hidden; */
    /* min-height: 100vh; */
    /* max-height: 100%; */
  }
  position: relative;
`

const Buildsmart = ({ location }) => {
  const iframeRef = useRef(null)

  return location && location.pathname.match(/\/buildsmart\//) ? (
    <Container>
      <img src={logo} />
      <IframeResizer
        forwardRef={iframeRef}
        id="effi"
        inPageLinks
        heightCalculationMethod="lowestElement"
        style={{
          width: "1px",
          minWidth: "100%",
          minHeight: "960px",
        }}
        src="https://zingtree.com/deploy/tree.php?z=embed&tree_id=474319124"
      />
    </Container>
  ) : null
}

export default Buildsmart
