export default {
  title: "Header Link",
  type: "object",
  name: "headerLink",
  fields: [
    {
      type: "internalLink",
      name: "linkName",
      title: "Nav Item"
    },
    {
      title: "Child Links",
      type: "array",
      name: "linkChildren",
      of: [{ type: "internalLink" }]
    }
  ],
  preview: {
    select: {
      title: "linkName"
    },
    prepare(selection) {
      const { title } = selection;
      return {
        title: title.linkName
      };
    }
  }
};
