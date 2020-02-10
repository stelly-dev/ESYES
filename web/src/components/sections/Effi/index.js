import React from "react"
import IframeResizer from "iframe-resizer-react"

const Effi = ({ location }) => {
  if (location != "/effi-app/") {
    return null
  } else if (location == "/effi-app/") {
    return (
      <IframeResizer
        style={{ width: "1px", minWidth: "100%" }}
        src="https://zingtree.com/deploy/tree.php?z=embed&tree_id=796651432000&style=buttons&notitle=1&embed_breadcrumbs=1&persist_names=Restart+App|Submit+Question+or+Feedback&persist_node_ids=1|214&keep_vars_on_back=1"
      />
    )
  }
}

export default Effi
