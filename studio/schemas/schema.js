import createSchema from "part:@sanity/base/schema-creator";
import schemaTypes from "all:part:@sanity/base/schema-type";
// import files from "./files";
// import page from "./page";
// import blockContent from "./blockContent";
// import headerLinks from "./headerLinks";
// import button from "./button";
// import siteHeader from "./siteHeader";
// import internalLink from "./internalLink";
// import pageHero from "./pageHero";
// import homePageText from "./homePageText";
// import circularCTA from "./circularCTA";
// import circleCTAList from "./circleCTAList";
// import featureText from "./featureText";
// import imageLeftSection from "./imageLeftSection";
// import reviewSection from "./reviewSection";
// import homePageQuote from "./homePageQuote";
// import reviewCounter from "./reviewCounter";
// import staffCard from "./staffCard";
// import staffList from "./staffList";
// import banner from "./banner";
// import simpleCTA from "./simpleCTA";
// import headerLink from "./headerLink";
// import blockButton from "./blockButton";
// import childLink from "./childLink";
// import childLinks from "./childLinks";
// import youtube from "./youtube";
// import youtubeLeftSection from "./youtubeLeftSection";
// import linkName from "./linkName";
// import chevronInternalLink from "./chevronInternalLink";
// import fileLink from "./fileLink";
// import linebreak from "./linebreak";
// import siteNavigation from "./siteNavigation";
// import twoColumn from "./twoColumn";
// import vimeo from "./vimeo";
import * as sections from "./sections";
import * as documents from "./documents";
import * as components from "./components";
import blockContent from "./blockContent";
export default createSchema({
  name: "default",
  types: schemaTypes.concat([
    // siteNavigation,
    // banner,
    // blockButton,
    ...Object.values(components),
    ...Object.values(sections),
    blockContent,
    ...Object.values(documents)
    // button,
    // chevronInternalLink,
    // childLink,
    // childLinks,
    // circleCTAList,
    // circularCTA,
    // featureText,
    // fileLink,
    // files,
    // headerLink,
    // headerLinks,
    // homePageQuote,
    // homePageText,
    // imageLeftSection,
    // internalLink,
    // linebreak,
    // linkName,
    // page,
    // pageHero,
    // reviewCounter,
    // reviewSection,
    // simpleCTA,
    // siteHeader,
    // staffCard,
    // staffList,
    // twoColumn,
    // vimeo,
    // youtube,
    // youtubeLeftSection,
  ])
});
