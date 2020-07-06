import React from "react";
import blockButtonIcon from "../icons/button_section_image.png";

export default {
  name: "blockButton",
  title: "Button",
  type: "object",
  fields: [
    {
      name: "btnText",
      title: "Button Text",
      type: "string"
    },
    {
      name: "btnTo",
      title: "Button Destination",
      type: "reference",
      to: {
        type: "page"
      }
    },
    {
      name: "btnColor",
      title: "Color",
      type: "colors",
      options: {
        borderradius: {
          outer: "100%",
          inner: "100%"
        },

        list: [
          { title: "orange", value: "#F9a33e" },
          { title: "blue", value: "#0ea6c6" },
          { title: "grey", value: "#777777" }
        ]
      }
    },
    {
      name: "orientation",
      title: "Alignment",
      type: "string",
      options: {
        list: ["center", "left", "right"],
        layout: "dropdown"
      }
    }
  ],
  preview: {
    select: {
      title: "btnText",
      subTitle: "btnTo.pageName",
      orientation: "orientation",
      color: "btnColor"
    },
    prepare(selection) {
      const { title, subTitle, orientation, color } = selection;
      const colorMap = {
        "#F9a33e": "orange",
        "#0ea6c6": "blue",
        "#777777": "grey"
      };
      return {
        title: title,
        subtitle: `to:${subTitle}, alignment:${orientation}, color:${colorMap[color]}`,
        media: <img src={blockButtonIcon} style={{ objectFit: "contain" }} />
      };
    }
  }
};
