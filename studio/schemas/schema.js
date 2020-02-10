import createSchema from "part:@sanity/base/schema-creator";

import schemaTypes from "all:part:@sanity/base/schema-type";
import page from "./page";
import blockContent from "./blockContent";
import headerLinks from "./headerLinks";
import button from "./button";
import siteHeader from "./siteHeader";
import internalLink from "./internalLink";
import pageHero from "./pageHero";
import homePageText from "./homePageText";
import circularCTA from "./circularCTA";
import circleCTAList from "./circleCTAList";
import featureText from "./featureText";
import imageLeftSection from "./imageLeftSection";
import reviewSection from "./reviewSection";
import homePageQuote from "./homePageQuote";
import reviewCounter from "./reviewCounter";
import staffCard from "./staffCard";
import staffList from "./staffList";
import banner from "./banner";
import simpleCTA from "./simpleCTA";
import headerLink from "./headerLink";
import blockButton from "./blockButton";
import childLink from "./childLink";
import childLinks from "./childLinks";
import youtube from "./youtube";
import youtubeLeftSection from "./youtubeLeftSection";
import linkName from "./linkName";
import chevronInternalLink from "./chevronInternalLink";
// import siteNavigation from "./siteNavigation";
import twoColumn from "./twoColumn";
import vimeo from "./vimeo";
export default createSchema({
  name: "default",
  types: schemaTypes.concat([
    linkName,
    page,
    headerLinks,
    button,
    siteHeader,
    twoColumn,
    internalLink,
    blockContent,
    pageHero,
    homePageText,
    circularCTA,
    circleCTAList,
    featureText,
    imageLeftSection,
    reviewSection,
    homePageQuote,
    staffCard,
    staffList,
    reviewCounter,
    banner,
    simpleCTA,
    headerLink,
    blockButton,
    childLink,
    childLinks,
    // siteNavigation,
    youtube,
    youtubeLeftSection,
    vimeo,
    chevronInternalLink
  ])
});
