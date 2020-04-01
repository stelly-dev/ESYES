import S from "@sanity/desk-tool/structure-builder";
import PDFPreview from "./components/PDFPreview/";
export default () =>
  S.list()
    .title("Content")
    .items([
      S.listItem()
        .title("Pages")
        .schemaType("page")
        .child(
          S.documentTypeList("page")
            .title("All Pages")
            .child(documentId => 
              S.document()
              .documentId(documentId)
              .schemaType("page")
              .views([
                S.view.form(), 
                S.
              ])
              )
            .menuItems(S.documentTypeList("page").getMenuItems())
            .filter("_type == $type && !defined(parents)")
            .params({ type: "page" })
        ),
      S.listItem()
        .title("Header")
        .child(
          S.document()
            .title("Header")
            .schemaType("header")
            .documentId("header")
        ),
      // S.listItem()
      //   .title("Files")
      //   .schemaType("files")
      //   .child(S.documentTypeList("files").title("All Files"))
      S.listItem()
        .title("Files")
        .schemaType("files")
        .child(
          S.documentTypeList("files")
            .title("Files")
            .child(documentId =>
              S.document()
                .documentId(documentId)
                .schemaType("files")
                .views([
                  S.view.form(),
                  S.view.component(PDFPreview).title("PDF Preview")
                ])
            )
        ),
      S.listItem()
        .title("Contractors")
        .schemaType("contractor")
        .child(
          S.documentTypeList("contractor")
            .title("All Contractors")
            .child(documentId =>
              S.document()
                .documentId(documentId)
                .schemaType("contractor")
            )
        )

      // S.listItem()
      //   .title("Navigation")
      //   .child(
      //     S.documentList()
      //       .title("All Navigation")
      //       .menuItems(S.documentTypeList("siteNavigation").getMenuItems())
      //       .filter("_type == $type && !defined(parents)")
      //       .params({ type: "siteNavigation" })
      //   )
    ]);
