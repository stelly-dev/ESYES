export default {
  name: "contractor",
  title: "Contractor",
  type: "document",
  fields: [
    {
      name: "contractorType",
      title: "Contractor Type",
      type: "string",
      options: {
        list: [
          { title: "Solar", value: "solar" },
          { title: "Insulation and Air Sealing", value: "insulation" },
          { title: "Mechanical / HVAC", value: "hvac" }
        ],
        layout: "radio"
      }
    },
    {
      name: "name",
      title: "Name",
      type: "string"
    },
    {
      name: "website",
      title: "Website",
      type: "url"
    },
    {
      name: "phone",
      title: "Phone Number",
      type: "string"
    },
    {
      name: "email",
      title: "Email Address",
      type: "string"
    },
    {
      name: "description",
      title: "Description",
      type: "array",
      of: [{ type: "block" }]
    }
  ],
  preview: {
    select: {
      title: "name",
      subtitle: "contractorType"
    }
  }
};
