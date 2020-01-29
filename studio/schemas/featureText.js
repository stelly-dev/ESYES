export default {
  name: "featureText",
  title: "Feature Text",
  type: "object",
  fields: [
    {
      name: "title",
      type: "string",
      title: "Feature Heading",
      description: "appears as bolded blue text"
    },
    {
      name: "description",
      title: "Feature Description",
      type: "blockContent"
    }
  ]
};
