import React from "react";
import simpleCTAIcon from "../icons/simple-cta_section_image.png";

export default {
  name: "simpleCTA",
  title: "Simple CTA",
  type: "object",
  fields: [
    {
      type: "string",
      name: "content",
      title: "Content"
    },
    {
      type: "array",
      title: "CTA Buttons",
      name: "ctaButtons",
      description: "Add up to two buttons",
      of: [{ type: "button" }]
    }
  ],
  preview: {
    select: {
      content: "content"
    },
    prepare(selection) {
      const { content } = selection;
      const clipString = str =>
        str.length > 70 ? str.substring(0, 69) + "..." : str;

      return {
        title: clipString(content),
        media: <img src={simpleCTAIcon} style={{ objectFit: "contain" }} />
      };
    }
  }
};
