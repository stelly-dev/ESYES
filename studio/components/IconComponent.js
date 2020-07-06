import React from "react";

const IconComponent = ({ src }) => {
  return <img src={src} style={styles.iconStyle} />;
};

const styles = {
  iconStyle: {
    maxWidth: "40px"
  }
};

export default IconComponent;
