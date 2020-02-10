import S from "@sanity/desk-tool/structure-builder";

export default () =>
  S.list()
    .title("Content")
    .items([
      S.listItem()
        .title("Pages")
        .child(
          S.documentList()
            .title("All Pages")
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
