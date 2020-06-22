export default {
  name: "calloutBox",
  type: "object",
  title: "Call Out Box",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string"
    },
    {
      name: "titleColor",
      title: "Title Color",
      type: "colors",
      options: {
        borderradius: {
          outer: "100%",
          inner: "100%"
        },
        list: [
          { title: "orange", value: "#F9a33e" },
          { title: "blue", value: "#0ea6c6" },
          { title: "black", value: "#333333" }
        ]
      }
    },
    {
      name: "content",
      type: "blockContent"
    }
  ]
};
