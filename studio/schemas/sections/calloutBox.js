import React from "react";
import calloutBoxIcon from "../icons/callout-box_section_image.png";
export default {
  name: "calloutBox",
  type: "object",
  title: "Call Out Box",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string"
    },
    {
      name: "alignment",
      title: "Alignment",
      type: "string",
      options: {
        list: [
          { title: "Left Align", value: "left" },
          { title: "Center Align", value: "center" },
          { title: "Right Align", value: "right" }
        ]
      }
    },
    {
      name: "borderColor",
      title: "Border Color",
      type: "colors",
      options: {
        borderradius: {
          outer: "20%",
          inner: "100%"
        },
        list: [
          { title: "orange", value: "#F9a33e" },
          { title: "blue", value: "#0ea6c6" },
          { title: "black", value: "#333333" }
        ]
      }
    },
    {
      name: "titleColor",
      title: "Title Color",
      type: "colors",
      options: {
        borderradius: {
          outer: "100%",
          inner: "100%"
        },
        list: [
          { title: "orange", value: "#F9a33e" },
          { title: "blue", value: "#0ea6c6" },
          { title: "black", value: "#333333" }
        ]
      }
    },
    {
      name: "content",
      type: "blockContent"
    }
  ],
  preview: {
    select: {
      title: "title"
    },
    prepare(selection) {
      const { title } = selection;
      return {
        title: title,
        media: <img src={calloutBoxIcon} style={{ objectFit: "contain" }} />
      };
    }
  }
};
