import slugify from "slugify"

function mapCalloutBoxToProps({ title, titleColor, content }) {
  return {
    color: titleColor,
    title: title,
    content: content,
  }
}

function mapBlockButtonToProps({ btnColor, btnText, btnTo, orientation }) {
  return {
    color: btnColor,
    orientation,
    text: btnText,
    to: `/${slugify(btnTo.pageName).toLowerCase()}/`,
  }
}

function mapContractorAccordionToProps({ listOfContractors, title }) {
  return {
    contractors: listOfContractors,
    title,
  }
}

function mapCircleCTASectionToProps({ ctaList }) {
  return {
    ctaList,
  }
}

// Uncomment the lines below to get buttons back
function mapHeroToProps({
  backgroundImage,
  // ctaBtnOne,
  // ctaBtnTwo,

  heroText,
}) {
  return {
    headline: heroText,
    image: backgroundImage.asset._id,

    // buttonOne: {
    //   text: ctaBtnOne.buttonText,
    //   to: `/${slugify(ctaBtnOne.buttonDestination.pageName).toLowerCase()}/`,
    // },
    // buttonTwo: {
    //   text: ctaBtnTwo.buttonText,
    //   to: `/${slugify(ctaBtnTwo.buttonDestination.pageName).toLowerCase()}/`,
    // },
  }
}

function mapHomePageTextSectionToProps({
  bodyText,

  boldHeading,
  slimHeading,
  subtitle,
}) {
  return {
    text: bodyText,
    boldTitle: boldHeading,
    slimTitle: slimHeading,
    subTitle: subtitle,
  }
}

function mapTwoColGridToProps({ image, features, altText }) {
  return {
    image: image.asset["_id"],
    features,
    altText,
  }
}

function mapReviewSectionToProps({
  altText,
  button,
  image,
  quote,
  reviewCounters,
}) {
  return {
    altText,
    buttonText: button.buttonText,
    buttonTo: `/${slugify(button.buttonDestination.pageName).toLowerCase()}/`,
    image: image.asset["_id"],
    quoteAuthor: quote.name,
    quote: quote.quote,
    reviewCounters,
  }
}

function mapBlockContentToProps(props) {
  return props
}

function mapStaffListToProps({ members }) {
  return {
    members,
  }
}

function mapBannerToProps({ asset }) {
  return {
    image: asset["_id"],
  }
}

function mapSimpleCTAToProps({ content, ctaButtons }) {
  return {
    content,
    buttons: ctaButtons,
  }
}

function mapTwoColumnToProps({ col1, col2 }) {
  return {
    leftCol: col1,
    rightCol: col2,
  }
}

function mapBlockImageToProps({ alt, image }) {
  return {
    alt,
    img: image.asset["_id"],
    url: image.asset.url,
  }
}

function mapFileLinkToProps({ linkName, newTab, linkedFile }) {
  return {
    linkName,
    url: linkedFile.file.asset.url,
    newTab,
  }
}

function mapBannerListToProps({ image }) {
  return {
    image: image.asset._id,
  }
}

function mapBlockToProps({ ...rest }) {
  return {
    blocks: rest,
  }
}

function mapVimeoSectionToProps({ url, image }) {
  return {
    url,
    image: image.asset.url,
  }
}

function mapYoutubeSectionToProps({ url, image = {} }) {
  return {
    url,
    image: image.asset ? image.asset.url : null,
  }
}

export default {
  mapCalloutBoxToProps,
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
