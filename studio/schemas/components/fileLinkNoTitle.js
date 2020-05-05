export default {
  name: "fileLinkNoTitle",
  title: "File Link",
  type: "object",
  fields: [
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
  ]
};
