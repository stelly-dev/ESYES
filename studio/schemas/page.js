import React from "react";
import {
  AiOutlineAlignCenter,
  AiOutlineAlignLeft,
  AiOutlineAlignRight
} from "react-icons/ai";

import { FiExternalLink, FiLink, FiChevronRight } from "react-icons/fi";

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
      name: "content",
      title: "Content",
      type: "array",
      of: [
        {
          type: "block",
          styles: [
            { title: "Normal", value: "normal" },
            { title: "H1", value: "h1" },
            { title: "H2", value: "h2" },
            { title: "H3", value: "h3" },
            { title: "H4", value: "h4" },
            { title: "H5", value: "h5" },
            { title: "H6", value: "h6" },
            { title: "Quote", value: "blockquote" }
          ],
          lists: [{ title: "Bullet", value: "bullet" }],
          marks: {
            decorators: [
              { title: "Strong", value: "strong" },
              { title: "Emphasis", value: "em" },
              {
                title: "Centered",
                value: "center",
                blockEditor: {
                  icon: () => <AiOutlineAlignCenter />
                }
              },
              {
                title: "Right Aligned",
                value: "right",
                blockEditor: {
                  icon: () => <AiOutlineAlignRight />
                }
              },
              {
                title: "Slim",
                value: "slim"
              }
            ],
            annotations: [
              {
                name: "internalLink",
                type: "object",
                title: "Internal link",
                fields: [
                  {
                    name: "reference",
                    type: "reference",
                    title: "Reference",
                    to: [
                      { type: "page" }
                      // other types if needed
                    ]
                  }
                ],
                icon: FiLink
              },
              {
                name: "link",
                type: "object",
                title: "External link",
                fields: [
                  {
                    name: "href",
                    type: "url",
                    title: "URL"
                  },
                  {
                    title: "Open in new tab",
                    name: "blank",
                    type: "boolean"
                  }
                ],
                icon: FiExternalLink
              },
              {
                name: "chevronLink",
                type: "object",
                title: "Chevron Link",
                fields: [
                  {
                    name: "reference",
                    type: "reference",
                    title: "Reference",
                    to: [{ type: "page" }]
                  }
                ],
                icon: FiChevronRight
              },
              {
                name: "fileLink",
                type: "object",
                title: "File Link",
                fields: [
                  {
                    name: "reference",
                    type: "reference",
                    title: "File Reference",
                    to: [{ type: "files" }]
                  }
                ],
                icon: MdAttachFile
              }
            ]
          }
        },
        { type: "pageHero" },
        { type: "homePageText" },
        { type: "circleCTAList" },
        { type: "imageLeftSection" },
        { type: "reviewSection" },
        { type: "staffList" },
        { type: "banner" },
        { type: "simpleCTA" },
        { type: "blockButton" },
        { type: "youtube" },
        { type: "vimeo" },
        { type: "youtubeLeftSection" },
        { type: "twoColumn" },
        { type: "fileLink" },
        { type: "linebreak" }
      ]
    }
  ],
  preview: {
    select: {
      title: "pageName"
    }
  }
};
