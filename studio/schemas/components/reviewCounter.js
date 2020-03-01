export default {
  name: "reviewCounter",
  title: "Review Counter",
  type: "object",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
      description: "Appears below the counter"
    },
    {
      name: "counter",
      title: "Counter",
      type: "number",
      description:
        "Number the animation will count up to. (must be an integer value, e.g. 1729)"
    },
    {
      name: "prefix",
      title: "Prefix",
      type: "string",
      description: "$, #, etc"
    }
  ]
};
