export default {
  name: "circularCTA",
  title: "Circular CTA",
  type: "object",
  fields: [
    {
      name: "backgroundImage",
      title: "Background",
      type: "image"
    },
    {
      name: "altText",
      title: "ADA Alt Text",
      type: "string"
    },
    {
      name: "title",
      type: "string",
      title: "Title"
    },
    {
      name: "subTitle",
      type: "string",
      title: "SubTitle"
    },
    {
      name: "link",
      type: "linkArr"
    }
  ]
};
