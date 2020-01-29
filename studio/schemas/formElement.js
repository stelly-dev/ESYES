export default {
  name: "formElement",
  title: "Input",
  type: "object",
  fields: [
    {
      name: "fieldType",
      title: "Is this field Required?",
      type: "boolean",
      options: {
        list: [
          { title: "No", value: false },
          { title: "Yes", value: true }
        ],
        layout: "radio"
      }
    },
    {
      name: "placeholder",
      title: "Placeholder",
      type: "string"
    },
    {
      name: "formType",
      title: "Form Type",
      type: "string",
      options: {
        list: [
          {
            title: "String",
            value: "string",
            description: "For names, addresses, or other simple values"
          },
          { title: "Email", value: "email" },
          { title: "Phone Number", value: "tel" }
        ]
      }
    }
  ]
};
