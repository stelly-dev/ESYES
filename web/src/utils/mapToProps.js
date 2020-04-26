import slugify from "slugify"

function mapBlockButtonToProps({
  _key,
  btnColor,
  btnText,
  btnTo,
  orientation,
}) {
  return {
    color: btnColor,
    orientation: orientation,
    text: btnText,
    to: `/${slugify(btnTo.pageName).toLowerCase()}/`,
    key: _key,
  }
}

function mapContractorAccordionToProps({ _key, listOfContractors, title }) {
  return {
    key: _key,
    contractors: listOfContractors,
    title: title,
  }
}

function mapCircleCTASectionToProps({ _key, ctaList }) {
  return {
    ctaList: ctaList,
    key: _key,
  }
}

function mapHeroToProps({
  backgroundImage,
  // ctaBtnOne,
  // ctaBtnTwo,
  _key,
  heroText,
}) {
  return {
    headline: heroText,
    image: backgroundImage.asset["_id"],
    // buttonOne: {
    //   text: ctaBtnOne.buttonText,
    //   to: `/${slugify(ctaBtnOne.buttonDestination.pageName).toLowerCase()}/`,
    // },
    // buttonTwo: {
    //   text: ctaBtnTwo.buttonText,
    //   to: `/${slugify(ctaBtnTwo.buttonDestination.pageName).toLowerCase()}/`,
    // },
    key: _key,
  }
}

function mapHomePageTextSectionToProps({
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

function mapTwoColGridToProps({ image, features, altText, _key }) {
  return {
    image: image.asset["_id"],
    features: features,
    key: _key,
    altText: altText,
  }
}

function mapReviewSectionToProps({
  altText,
  button,
  image,
  quote,
  reviewCounters,
  _key,
}) {
  return {
    altText: altText,
    buttonText: button.buttonText,
    buttonTo: `/${slugify(button.buttonDestination.pageName).toLowerCase()}/`,
    image: image.asset["_id"],
    quoteAuthor: quote.name,
    quote: quote.quote,
    reviewCounters: reviewCounters,
    key: _key,
  }
}

function mapBlockContentToProps(props) {
  return props
}

function mapStaffListToProps({ _key, members }) {
  return {
    key: _key,
    members: members,
  }
}

function mapBannerToProps({ _key, asset }) {
  return {
    key: _key,
    image: asset["_id"],
  }
}

function mapSimpleCTAToProps({ _key, content, ctaButtons }) {
  return {
    key: _key,
    content: content,
    buttons: ctaButtons,
  }
}

function mapTwoColumnToProps({ _key, col1, col2 }) {
  return {
    key: _key,
    leftCol: col1,
    rightCol: col2,
  }
}

function mapBlockImageToProps({ alt, image }) {
  return {
    alt: alt,
    img: image.asset["_id"],
    url: image.asset.url,
  }
}

function mapFileLinkToProps({ linkName, newTab, linkedFile, _key }) {
  return {
    linkName: linkName,
    url: linkedFile.file.asset.url,
    key: _key,
    newTab: newTab,
  }
}

function mapBannerListToProps({ image, _key }) {
  return {
    image: image.asset._id,
    key: _key,
  }
}

function mapBlockToProps({ _key, ...rest }) {
  return {
    key: _key,
    blocks: rest,
  }
}

function mapVimeoSectionToProps({ url, image, _key }) {
  return {
    url: url,
    image: image.asset.url,
    key: _key,
  }
}

function mapYoutubeSectionToProps({ url, image = {}, _key }) {
  return {
    url: url,
    image: image.asset ? image.asset.url : null,
    key: _key,
  }
}

export default {
  mapBlockButtonToProps,
  mapContractorAccordionToProps,
  mapCircleCTASectionToProps,
  mapHeroToProps,
  mapHomePageTextSectionToProps,
  mapTwoColGridToProps,
  mapReviewSectionToProps,
  mapBlockContentToProps,
  mapStaffListToProps,
  mapBannerToProps,
  mapSimpleCTAToProps,
  mapTwoColumnToProps,
  mapBlockImageToProps,
  mapFileLinkToProps,
  mapBannerListToProps,
  mapBlockToProps,
  mapVimeoSectionToProps,
  mapYoutubeSectionToProps,
}
