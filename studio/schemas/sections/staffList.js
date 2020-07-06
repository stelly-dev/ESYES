import React from "react";
import staffListIcon from "../icons/staff-list_section_image.png";

export default {
  name: "staffList",
  title: "Staff List",
  type: "object",
  fields: [
    {
      name: "members",
      title: "Staff Members",
      type: "array",
      of: [{ type: "staffCard" }]
    }
  ],
  preview: {
    select: {
      title: "title"
    },
    prepare(selection) {
      const { title } = selection;
      return {
        title: "Staff Memebers",
        media: <img src={staffListIcon} style={{ objectFit: "contain" }} />
      };
    }
  }
};
