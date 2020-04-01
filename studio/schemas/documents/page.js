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
      type: "localePage",
      name: "localePage"
    },
    {
      name: "localePageName",
      title: "Page Name",
      type: "localeString"
    },

    {
      name: "pageName",
      title: "Page Name",
      type: "string"
    },

    {
      type: "content",
      name: "content"
    },
    {
      type: "localeContent",
      name: "pageContent"
    },
    {
      name: "seo",
      title: "SEO",
      type: "siteSEO"
    }
  ],
  preview: {
    select: {
      title: "pageName"
    }
  }
};
