export default {
  name: "vimeo",
  type: "object",
  title: "Vimeo Embed",
  fields: [
    {
      name: "url",
      type: "url",
      title: "Vimeo video URL"
    },
    {
      name: "image",
      type: "image",
      title: "Image for thumbnail"
    }
  ],
  preview: {
    select: {
      title: "url"
    },
    prepare(selection) {
      const { title } = selection;
      return {
        title: title
      };
    }
  }
};
