import createSchema from "part:@sanity/base/schema-creator";
import schemaTypes from "all:part:@sanity/base/schema-type";
import * as sections from "./sections";
import * as documents from "./documents";
import * as components from "./components";
import blockContent from "./blockContent";
import siteSEO from "./siteSEO";
import content from "./content";
import localeContent from "./localeContent";
import localeString from "./localeString";
import pageObject from "./pageObject";
import localePage from "./localePage";
import route from "./route";
import openGraph from "./openGraph";
import link from "./link";
import { linkArr, linkArrRequired } from "./linkArr";
export default createSchema({
  name: "default",
  types: schemaTypes.concat([
    route,
    openGraph,
    siteSEO,
    content,
    ...Object.values(components),
    pageObject,
    blockContent,
    localeContent,
    localeString,
    localePage,
    ...Object.values(documents),
    linkArr,
    linkArrRequired,
    ...Object.values(sections),
    link
  ])
});
