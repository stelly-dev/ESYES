import Tabs from "sanity-plugin-tabs";
const supportedLanguages = [
  { id: "en", title: "English", isDefualt: true },
  { id: "es", title: "Spanish" }
];

export default {
  name: "localePage",
  type: "object",
  inputComponent: Tabs,
  fieldsets: [
    { title: "English", name: "en" },
    { title: "Spanish", name: "es" }
  ],
  options: {
    layout: "object"
  },
  fields: supportedLanguages.map(lang => ({
    title: lang.title,
    name: lang.id,
    type: "pageObject",
    fieldset: lang.id
  }))
};
