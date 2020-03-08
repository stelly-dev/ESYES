import createSchema from "part:@sanity/base/schema-creator";
import schemaTypes from "all:part:@sanity/base/schema-type";
import * as sections from "./sections";
import * as documents from "./documents";
import * as components from "./components";
import blockContent from "./blockContent";
export default createSchema({
  name: "default",
  types: schemaTypes.concat([
    ...Object.values(components),
    ...Object.values(sections),
    blockContent,
    ...Object.values(documents)
  ])
});
