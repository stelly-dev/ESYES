import React, { useRef, useState } from "react"
import IframeResizer from "iframe-resizer-react"
import styled from "styled-components"
import MessageData from "./MessageData"
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
  const ref = useRef(null)
  const [messageData, setMessageData] = useState()
  const onResized = data => setMessageData(data)

  const onMessage = data => {
    setMessageData(data)
    ref.current.sendMessage("Hello back from parent page")
  }

  if (location != "/effi-app/") {
    return null
  } else if (location == "/effi-app/") {
    return (
      <Container>
        {/* <IframeResizer
          checkOrigin={false}
          forwardRef={ref}
          onMessage={onMessage}
          onResize={onResized}
          style={{
            width: "1px",
            minWidth: "100%",
          }}
          src="https://zingtree.com/deploy/tree.php?z=embed&tree_id=796651432000&style=buttons&notitle=1&embed_breadcrumbs=1&persist_names=Restart+App|Submit+Question+or+Feedback&persist_node_ids=1|214&keep_vars_on_back=1"
        />
        <MessageData data={messageData} /> */}
        <iframe
          style={{ width: "1px", minWidth: "100%", minHeight: "960px" }}
          src="https://zingtree.com/deploy/tree.php?z=embed&tree_id=796651432000&style=buttons&notitle=1&embed_breadcrumbs=1&persist_names=Restart+App|Submit+Question+or+Feedback&persist_node_ids=1|214&keep_vars_on_back=1"
        />
      </Container>
    )
  }
}

export default Effi
