export default {
  name: "simpleCTA",
  title: "Simple CTA",
  type: "object",
  fields: [
    {
      type: "string",
      name: "content",
      title: "Content"
    },
    {
      type: "array",
      title: "CTA Buttons",
      name: "ctaButtons",
      description: "Add up to two buttons",
      of: [{ type: "button" }]
    }
  ]
};
