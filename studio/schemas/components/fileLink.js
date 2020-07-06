import React from "react";
import fileLinkIcon from "../icons/file-link_section_image.png";

export default {
  name: "fileLink",
  title: "File Link",
  type: "object",
  fields: [
    {
      type: "string",
      name: "linkName",
      title: "Link Text"
    },
    {
      title: "File",
      type: "reference",
      name: "linkedFile",
      to: [{ type: "files" }]
    },
    {
      title: "Open in new tab?",
      name: "newTab",
      type: "boolean"
    }
  ],
  preview: {
    select: {
      title: "linkName",
      subTitle: "linkedFile"
    },
    prepare(selection) {
      const { title, subTitle } = selection;
      return {
        title: title,
        subTitle: subTitle,
        media: <img src={fileLinkIcon} style={{ objectFit: "contain" }} />
      };
    }
  }
};
