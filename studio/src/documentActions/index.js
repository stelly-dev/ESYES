import defaultResolve from "part:@sanity/base/document-actions";
import { OpenEnglishPreview } from "./OpenEnglishPreview";
import { OpenSpanishPreview } from "./OpenSpanishPreview";
export default function resolveDocumentActions(props) {
  return [...defaultResolve(props), OpenEnglishPreview, OpenSpanishPreview];
}
