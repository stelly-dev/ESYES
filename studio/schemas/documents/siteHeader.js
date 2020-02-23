export default {
  name: "header",
  title: "SiteHeader",
  type: "document",
  fields: [
    {
      name: "logo",
      title: "Site Logo",
      type: "image"
    },
    {
      name: "logoAlt",
      title: "Alt Text For Logo",
      type: "string"
    },
    {
      name: "tagLine",
      title: "Tag Line",
      type: "blockContent"
    },
    {
      name: "ctaBtn",
      title: "Call to Action",
      type: "button"
    },
    {
      name: "headerLinks",
      title: "Header Links",
      type: "headerLinks"
    }
  ]
};
