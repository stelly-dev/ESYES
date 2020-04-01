import Tabs from "sanity-plugin-tabs";
const supportedLanguages = [
  { id: "en", title: "English", isDefualt: true },
  { id: "es", title: "Spanish" }
];
export default {
  name: "localeContent",
  type: "object",
  inputComponent: Tabs,
  fieldsets: [
    {
      title: "English",
      name: "en"
    },
    {
      title: "Spanish",
      name: "es"
    }
  ],

  fields: supportedLanguages.map(lang => ({
    title: lang.title,
    name: lang.id,
    type: "content",
    fieldset: lang.id
  }))
};
