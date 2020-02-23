export default {
  name: "chevroninternalLink",
  title: "Chevron Internal Link",
  type: "object",
  description: "e.g. 'READ MORE >'",
  fields: [
    { type: "string", name: "linkName", title: "Link Text" },
    {
      title: "Link Destination",
      type: "reference",
      name: "linkDestination",
      to: [{ type: "page" }]
    }
  ],
  preview: {
    select: {
      title: "linkName"
    }
  }
};
