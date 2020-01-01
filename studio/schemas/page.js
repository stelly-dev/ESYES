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
      type: "blockContent"
    }
  ],
  preview: {
    select: {
      title: "pageName"
    }
  }
};
