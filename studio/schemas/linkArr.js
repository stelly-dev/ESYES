const linkArr = {
  name: "linkArr",
  type: "array",
  of: [
    {
      name: "internalLinkNoTitle",
      type: "internalLinkNoTitle"
    },
    {
      name: "externalLinkNoTitle",
      type: "externalLinkNoTitle",
      title: "External Link"
    },
    {
      name: "fileLinkNoTitle",
      type: "fileLinkNoTitle"
    }
  ]
};

const linkArrRequired = {
  ...linkArr,
  name: "linkArrRequired",
  validation: Rule => [
    Rule.required().warning(
      "CTA's must link to an internal or external resource"
    ),
    Rule.max(1).error("You can only link to one resource at once!"),
    Rule.min(1).error("CTA's must link to an internal or external resource")
  ]
};

export { linkArr, linkArrRequired };
