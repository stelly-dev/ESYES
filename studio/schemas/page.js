import {
  AiOutlineAlignCenter,
  AiOutlineAlignLeft,
  AiOutlineAlignRight
} from "react-icons/ai";
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
                icon: AiOutlineAlignCenter
              },
              {
                title: "Right Aligned",
                value: "right",
                icon: AiOutlineAlignRight
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
        { type: "simpleCTA" }
      ]
    }
  ],
  preview: {
    select: {
      title: "pageName"
    }
  }
};
