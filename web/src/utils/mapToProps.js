import slugify from "slugify"

export function mapCircleCTASectionToProps({ _key, ctaList }) {
  return {
    ctaList: ctaList,
    key: _key,
  }
}

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

export function mapImageLeftSectionToProps({ image, features, altText, _key }) {
  return {
    image: image.asset["_id"],
    features: features,
    key: _key,
    altText: altText,
  }
}

export function mapReviewSectionToProps({
  altText,
  button,
  image,
  quote,
  reviewCounters,
}) {
  return {
    altText: altText,
    buttonText: button.buttonText,
    buttonTo: `/${slugify(button.buttonDestination.pageName).toLowerCase()}/`,
    image: image.asset["_id"],
    quoteAuthor: quote.name,
    quote: quote.quote,
    reviewCounters: reviewCounters,
  }
}

export function mapBlockContentToProps(props) {
  return props
}

export function mapStaffListToProps({ _key, members }) {
  return {
    key: _key,
    members: members,
  }
}

export function mapBannerToProps({ _key, asset }) {
  return {
    key: _key,
    image: asset["_id"],
  }
}

export function mapSimpleCTAToProps({ _key, content, ctaButton }) {
  return {
    key: _key,
    content: content,
    buttonTo: `/${slugify(
      ctaButton.buttonDestination.pageName
    ).toLowerCase()}/`,
    buttonText: ctaButton.buttonText,
  }
}
