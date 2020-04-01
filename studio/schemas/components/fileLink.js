export default {
  name: "fileLink",
  title: "File Link",
  type: "object",
  fields: [
    {
      type: "string",
      name: "linkName",
      title: "Link Text"
    },
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
