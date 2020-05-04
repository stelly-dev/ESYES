export default {
  name: "link",
  type: "object",
  title: "Link",
  fields: [
    {
      name: "linkType",
      type: "array",
      of: [
        {
          name: "external",
          title: "External Link",
          type: "externalLink"
        },
        {
          name: "internal",
          type: "reference",
          to: [{ type: "page" }]
        },
        {
          name: "file",
          type: "reference",
          to: [{ type: "file" }]
        }
      ]
    }
  ],

  validation: Rule =>
    Rule.required()
      .min(0)
      .max(1)
      .warning("You must link to an internal or external resource!")
};
