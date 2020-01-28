import slugify from "slugify"

export function mapHeroToProps({
  backgroundImage,
  ctaBtnOne,
  ctaBtnTwo,
  _key,
  heroText,
}) {
  return {
    headline: heroText,
    image: backgroundImage.asset["_id"],
    buttonOne: {
      text: ctaBtnOne.buttonText,
      to: `/${slugify(ctaBtnOne.buttonDestination.pageName).toLowerCase()}/`,
    },
    buttonTwo: {
      text: ctaBtnTwo.buttonText,
      to: `/${slugify(ctaBtnTwo.buttonDestination.pageName).toLowerCase()}/`,
    },
    key: _key,
  }
}

export function mapHomePageTextSectionToProps({
  bodyText,
  _key,
  boldHeading,
  slimHeading,
  subtitle,
}) {
  return {
    text: bodyText,
    boldTitle: boldHeading,
    slimTitle: slimHeading,
    subTitle: subtitle,
    key: _key,
  }
}
