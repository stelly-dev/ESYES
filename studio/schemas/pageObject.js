export default {
  name: "pageObject",
  type: "object",
  fieldsets: [
    {
      title: "SEO Settings",
      name: "seo",
      options: {
        collapsible: true,
        collapsed: true
      }
    }
  ],
  fields: [
    {
      name: "route",
      title: "route",
      type: "route"
    },
    {
      name: "content",
      type: "content"
    },
    {
      name: "seo",
      title: "SEO",
      type: "siteSEO",
      fieldset: "seo"
    },
    {
      name: "openGraph",
      title: "openGraph Data",
      type: "openGraph",
      fieldset: "seo"
    }
  ], 
};
