export default {
  name: "externalLink",
  type: "object",
  fields: [
    {
      name: "link",
      type: "url"
    },
    {
      name: "newTab",
      Title: "Open in New Tab?",
      type: "boolean",
      default: "true"
    }
  ]
};
