import slugify from "slugify";

export function OpenSpanishPreview(props) {
  if (
    (props.draft && props.draft.localePage && props.draft.localePage.es) ||
    (props.published &&
      props.published.localePage &&
      props.published.localePage.es)
  ) {
    return {
      label: "Open Spanish Preview",
      onHandle: () => {
        const { pageName } = props.draft || props.published;
        const slug = `/es/${slugify(pageName).toLowerCase()}/`;
        const pageBase = `https://energysmart-preview.herokuapp.com`;
        if (slug === `/es/home-page/`) {
          window.open(`${pageBase}/es/`, "_newtab");
        } else {
          window.open(`${pageBase}${slug}`, "_newtab");
        }
      }
    };
  } else {
    return {
      label: "Open Spanish Preview",
      disabled: true
    };
  }
}
