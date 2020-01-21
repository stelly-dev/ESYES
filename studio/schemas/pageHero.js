export default {
  name: "pageHero",
  title: "Hero Section",
  type: "object",
  fields: [
    {
      name: "backgroundImage",
      title: "Background Image",
      type: "image"
    },
    {
      name: "heroText",
      type: "string",
      title: "Hero Text"
    },
    {
      name: "ctaBtnOne",
      title: "First CTA Button",
      type: "button"
    },
    {
      name: "ctaBtnTwo",
      title: "Second CTA Button",
      type: "button"
    }
  ]
};
