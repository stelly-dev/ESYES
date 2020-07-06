import React from "react";
import youtubeIcon from "../icons/youtube_section_image.png";
export default {
  name: "youtube",
  type: "object",
  title: "YouTube Embed",
  fields: [
    {
      name: "url",
      type: "url",
      title: "YouTube video URL"
    },
    {
      name: "image",
      type: "image",
      title: "Image for thumbnail"
    }
  ],
  preview: {
    select: {
      title: "url"
    },
    prepare(selection) {
      const { title } = selection;

      return {
        title: title,
        media: <img src={youtubeIcon} style={{ objectFit: "contain" }} />
      };
    }
  }
};
