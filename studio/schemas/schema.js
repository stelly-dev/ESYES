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
export default createSchema({
  name: "default",
  types: schemaTypes.concat([
    page,
    headerLinks,
    button,
    siteHeader,
    internalLink,
    blockContent,
    pageHero,
    homePageText,
    circularCTA,
    circleCTAList
  ])
});
