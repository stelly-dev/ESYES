export default {
  name: "linkArr",
  type: "array",
  of: [
    {
      name: "internalLink",
      title: "Internal Link",
      type: "reference",
      to: [{ type: "page" }]
    },
    {
      name: "externalLink",
      type: "externalLink",
      title: "External Link"
    },
    {
      name: "fileLink",
      type: "reference",
      title: "File Link",
      to: [{ type: "file" }]
    }
  ],
  validation: Rule =>
    Rule.required()
      .max(1)
      .warning("You can only link to one resource at a time")
      .min(0)
      .warning("Links must point to an internal or external resource")
};
