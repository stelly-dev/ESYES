export default {
  title: "Header Links",
  type: "object",
  name: "headerLinks",
  fields: [
    {
      title: "Link List",
      name: "linkList",
      type: "array",
      of: [{ type: "headerLink" }]
    }
  ]
};
