export default {
  name: "reviewSection",
  title: "Review Section",
  type: "object",
  fields: [
    {
      name: "image",
      title: "Image",
      type: "image"
    },
    { name: "altText", title: "Alt Text", type: "string" },
    {
      name: "quote",
      type: "homePageQuote",
      title: "Quote"
    },
    {
      name: "button",
      type: "button",
      title: "Button"
    },
    {
      name: "reviewCounters",
      title: "Review Counters",
      type: "array",
      of: [{ type: "reviewCounter", title: "Counter" }]
    }
  ]
};
