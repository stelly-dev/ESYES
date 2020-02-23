export default {
  name: "circleCTAList",
  title: "Circle CTA List",
  type: "object",
  fields: [
    {
      name: "title",
      type: "string",
      title: "Section Title",
      description:
        "used internally (this section is required, but will not appear on the site)"
    },
    {
      name: "ctaList",
      title: "List Items",
      type: "array",
      of: [{ type: "circularCTA" }]
    }
  ]
};
