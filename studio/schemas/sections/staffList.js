export default {
  name: "staffList",
  title: "Staff List",
  type: "object",
  fields: [
    {
      name: "members",
      title: "Staff Members",
      type: "array",
      of: [{ type: "staffCard" }]
    }
  ]
};
