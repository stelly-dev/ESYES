const linkDestination = {
  name: "linkDestination",
  type: "reference",
  to: [{ type: "page" }],
};

const internalLinkNoTitle = {
  name: "internalLinkNoTitle",
  title: "Internal Link",
  type: "object",
  fields: [
    {
      title: "Link Destination",
      name: "linkDestination",
      type: "linkDestination",
    },
  ],
  preview: {
    select: {
      title: "linkDestination.pageName",
    },
  },
};

export { linkDestination, internalLinkNoTitle };
