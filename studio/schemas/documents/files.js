export default {
  name: "files",
  title: "Files",
  type: "document",
  fields: [
    {
      name: "file",
      type: "file",
      title: "File"
    }
  ],
  preview: {
    select: {
      title: "file.asset.originalFilename",
      file: "file.asset.url"
    },
    prepare(selection) {
      const { title, file } = selection;
      return {
        title,
        file
      };
    }
  }
};
