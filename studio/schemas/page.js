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
        { type: "block" },
        { type: "pageHero" },
        { type: "homePageText" },
        { type: "circleCTAList" },
        { type: "imageLeftSection" },
        { type: "reviewSection" },
        { type: "staffList" }
      ]
    }
  ],
  preview: {
    select: {
      title: "pageName"
    }
  }
};
