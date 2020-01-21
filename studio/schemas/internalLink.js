export default {
  name: "internalLink",
  title: "Internal Link",
  type: "object",
  fields: [
    { type: "string", name: "linkName", title: "Link Text" },
    {
      title: "Link Destination",
      type: "reference",
      name: "linkDestination",
      to: [{ type: "page" }]
    }
  ]
};
