import React from "react";
import {
  AiOutlineAlignCenter,
  AiOutlineAlignLeft,
  AiOutlineAlignRight
} from "react-icons/ai";

import {
  FiExternalLink,
  FiLink,
  FiChevronRight,
  FiPhone
} from "react-icons/fi";

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
