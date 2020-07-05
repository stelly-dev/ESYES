import React from "react";

import { FcHome, FcDocument, FcSettings } from "react-icons/fc/";

const PageMedia = props => {
  switch (props.title) {
    case "Home Page ":
      return <FcHome style={styles.icon} />;
    case "404":
      return <SettingsIconPage />;
    case "Effi App":
      return <SettingsIconPage />;
    case "test":
      return <SettingsIconPage />;
    default:
      return <FcDocument style={styles.icon} />;
  }
};

const SettingsIconPage = () => {
  return (
    <div style={styles.imageWrapper}>
      <FcDocument style={styles.icon} />
      <FcSettings style={styles.settings} />
    </div>
  );
};

const styles = {
  settings: {
    position: "absolute",
    fontSize: "20px",
    top: 0,
    right: 0
  },
  icon: { fontSize: "2.3rem" },
  imageWrapper: {
    height: "100%",
    overflow: "hidden",
    position: "relative"
  }
};

export default PageMedia;
