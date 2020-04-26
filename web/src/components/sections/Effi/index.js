import React, { useRef } from "react"
import IframeResizer from "iframe-resizer-react"
import styled from "styled-components"
const Container = styled.section`
  /* min-height: 100vh; */
  /* background-color: red; */
  /* padding-top: 5vw; */
  iframe {
    border: none;
    margin-bottom: 0;
    padding-bottom: 0;
    /* overflow: hidden; */
    /* min-height: 100vh; */
    /* max-height: 100%; */
  }
`


const Effi = ({ location }) => {
  const iframeRef = useRef(null)

  if (location && location.pathname !== "/effi-app/") {
    return null
  } else if (location && location.pathname === "/effi-app/") {
    return (
      <Container>
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
          src="https://zingtree.com/deploy/tree.php?z=embed&tree_id=796651432000&style=buttons&notitle=1&embed_breadcrumbs=1&persist_names=Restart+App|Submit+Question+or+Feedback&persist_node_ids=1|214"
        />
      </Container>
    )
  }
}

export default Effi
