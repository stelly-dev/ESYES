export default {
  name: "staffCard",
  title: "Staff Card",
  type: "object",
  fields: [
    {
      type: "string",
      name: "name",
      title: "First and Last Name"
    },
    {
      type: "image",
      name: "image",
      title: "Image of Staff Member"
    },
    {
      type: "string",
      name: "jobTitle",
      title: "Job Title"
    },
    {
      type: "string",
      name: "jobPosition",
      title: "Job Position"
    },

    {
      type: "blockContent",
      name: "bio",
      title: "Bio"
    }
  ]
};
