export default {
  name: "contractorAccordion",
  title: "Contractor Accordion",
  type: "object",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string"
    },
    {
      name: "listOfContractors",
      title: "List of Contractors",
      type: "contractorList"
    }
  ]
};
