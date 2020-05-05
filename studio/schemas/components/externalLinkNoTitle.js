export default {
  name: "externalLinkNoTitle",
  title: "ExternalLink",
  type: "object",
  fields: [
    {
      name: "externalLink",
      type: "url",
    },
    {
      name: "newTab",
      Title: "Open in New Tab?",
      type: "boolean",
      default: "true",
    },
  ],
};
