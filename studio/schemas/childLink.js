export default {
  name: "childLink",
  title: "Child Link",
  type: "object",
  fields: [
    {
      name: "childLinkTitle",
      title: "Title",
      type: "string"
    },
    {
      name: "childLinkDestination",
      title: "Destination",
      type: "reference",
      to: [{ type: "page" }]
    }
  ]
};
