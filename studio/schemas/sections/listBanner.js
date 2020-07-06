import React from "react";
import listBannerIcon from "../icons/banner-list_section_image.png";

export default {
  name: "listBanner",
  title: "List Banner",
  type: "object",
  fields: [
    {
      name: "image",
      type: "image",
      title: "Image"
    }
  ],

  preview: {
    select: {
      image: "image"
    },
    prepare(selection) {
      return {
        title: "Banner List",
        media: <img src={listBannerIcon} style={{ objectFit: "contain" }} />
      };
    }
  }
};
