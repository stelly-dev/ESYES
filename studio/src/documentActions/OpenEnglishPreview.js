import slugify from "slugify";

export function OpenEnglishPreview(props) {
  if (
    (props.draft && props.draft.localePage && props.draft.localePage.en) ||
    (props.published &&
      props.published.localePage &&
      props.published.localePage.en)
  ) {
    return {
      label: "Open English Preview",
      onHandle: () => {
        const { pageName } = props.draft || props.published;
        const slug = `/${slugify(pageName).toLowerCase()}/`;
        const pageBase = `https://energysmart-preview.herokuapp.com`;
        if (slug === `/home-page/`) {
          window.open(`${pageBase}/`, "_newtab");
        } else {
          window.open(`${pageBase}${slug}`, "_newtab");
        }
      }
    };
  } else {
    return {
      label: "Open English Preview",
      disabled: true
    };
  }
}
