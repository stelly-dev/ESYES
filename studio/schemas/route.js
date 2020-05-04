import slugify from "slugify";

// validate nested routes
function checkParent(route) {
  let slugArr = route.split("/");
}

function createPageSlug(input) {
  let routeArr = input.split("/");
  const slugSettings = {
    replacement: "-",
    lower: true
  };
  if (routeArr[0].match(/es/)) {
    return `es/${slugify(routeArr[1], slugSettings)}`;
  } // handle spanish language routes
  return slugify(input, slugSettings);
}

export default {
  name: "route",
  title: "Route",
  type: "slug",
  options: {
    source: (doc, options) => {
      let focusedLang = options.parentPath[1];
      if (focusedLang === "en") {
        return doc.pageName;
      }
      return `${focusedLang}/${doc.pageName}`;
    },
    slugify: input => createPageSlug(input)
  }
};
