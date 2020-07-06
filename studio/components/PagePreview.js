import React from "react";

const PagePreview = props => {
  console.log("I'm the page preview component");
  console.log(props);
  return (
    <div style={styles.previewListStyle}>
      <h1>{title || "Untitled"}</h1>
      <p>{subTitle || ""}</p>
    </div>
  );
};

const styles = {
  previewListStyle: {
    display: "grid",
    gridTemplateColumns: "50px auto",
    background: "red"
  }
};

export default PagePreview;
