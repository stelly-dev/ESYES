import React from "react";

import { MdAttachFile } from "react-icons/md";

export default {
  name: "page",
  title: "Page",
  type: "document",
  fields: [
    {
      name: "pageName",
      title: "Page Name",
      type: "string"
    },
    {
      type: "localePage",
      name: "localePage"
    }
  ],
  preview: {
    select: {
      title: "pageName"
    }
  }
};
