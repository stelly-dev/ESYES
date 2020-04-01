export default {
  name: "pageObject",
  type: "object",
  fields: [
    {
      name: "pageName",
      title: "Page Title",
      type: "string"
    },
    {
      title: "Content",
      name: "content",
      type: "content"
    },
    {
      name: "seo",
      title: "SEO",
      type: "siteSEO"
    }
  ]
};
