export default {
  name: "button",
  title: "button",
  type: "object",
  fields: [
    {
      name: "buttonText",
      title: "Button Text",
      type: "string"
    },
    {
      name: "buttonDestination",
      title: "Destination Page",
      type: "reference",
      to: [{ type: "page" }, { type: "files" }]
    }
  ]
};
