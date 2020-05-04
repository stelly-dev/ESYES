export default {
  name: "circleCTAList",
  title: "Circle CTA List",
  type: "object",
  fields: [
    {
      name: "title",
      type: "string",
      title: "Field Title"
    },
    {
      name: "ctaList",
      title: "List Items",
      type: "array",
      of: [{ type: "circularCTA" }]
    }
  ]
};
