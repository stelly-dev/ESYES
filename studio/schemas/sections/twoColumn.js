import React from "react";
import dualColumnIcon from "../icons/dual-column_section_image.png";
export default {
  name: "twoColumn",
  title: "Dual Column Layout",
  type: "object",
  fields: [
    {
      name: "col1",
      title: "Left Column",
      type: "blockContent"
    },
    {
      name: "col2",
      title: "Right Column",
      type: "blockContent"
    }
  ],
  preview: {
    select: {
      col1: "col1",
      col2: "col2"
    },
    prepare(selection) {
      const { col1, col2 } = selection;
      return {
        title: "Dual Column Layout",
        media: <img src={dualColumnIcon} style={{ objectFit: "contain" }} />
      };
    }
  }
};
