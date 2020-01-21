export default {
  title: "Header Links",
  type: "object",
  name: "headerLinks",
  fields: [
    {
      name: "linkList",
      title: "Link List",
      type: "array",
      of: [{ type: "internalLink" }]
    }
  ]
};
