export default {
  name: "customTitle",
  type: "object",
  title: "Custom Title",
  fields: [
    {
      name: "tag",
      title: "Text Size",
      type: "string",
      options: {
        list: [
          { title: "Normal", value: "normal" },
          { title: "Gigantic", value: "h1" },
          { title: "Large", value: "h4" },
          { title: "Medium", value: "h3" },
          { title: "Small", value: "h2" }
        ]
      }
    },
    {
      name: "title",
      title: "Title Text",
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
      title: "bold",
      name: "bold",
      type: "boolean"
    },
    {
      title: "italicized",
      name: "italic",
      type: "boolean"
    },
    {
      name: "alignment",
      title: "Alignment",
      type: "string",
      options: {
        list: [
          { title: "Left Aligned", value: "left" },
          { title: "Center Aligned", value: "center" },
          { title: "Right Aligned", value: "right" }
        ],
        layout: "radio"
      }
    }
  ]
};
