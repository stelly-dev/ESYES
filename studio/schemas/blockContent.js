import React from "react";
import { AiOutlineAlignCenter, AiOutlineAlignRight } from "react-icons/ai";
import { FiPhone } from "react-icons/fi";
export default {
  name: "blockContent",
  title: "Block Content",
  type: "array",
  of: [
    {
      title: "Block",
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
            ]
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
            ]
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
            ]
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
            ]
          },
          {
            name: "telephone",
            type: "object",
            title: "Telephone number",
            fields: [
              {
                name: "number",
                type: "string",
                title: "Telephone Number",
                description: "Must be of the form x-xxx-xxx-xxxx"
              }
            ],
            icon: FiPhone
          }
        ]
      }
    },
    { type: "youtube" },
    { type: "vimeo" },
    { type: "image" },
    { type: "linebreak" }
  ]
};
