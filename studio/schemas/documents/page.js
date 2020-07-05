import React from "react";
import PageMedia from "../../components/PageMedia";

export default {
  name: "page",
  title: "Page",
  type: "document",
  fieldsets: [
    {
      name: "studioSettings",
      title: "Studio Settings",
      options: {
        collapsible: true,
        collapsed: true
      }
    }
  ],
  fields: [
    {
      name: "pageName",
      title: "Page Name",
      type: "string"
    },
    {
      type: "localePage",
      name: "localePage"
    },

    {
      name: "priority",
      title: "Priority",
      description: "Lower numbers will appear higher in the Document list",
      type: "number",
      fieldset: "studioSettings"
    },
    {
      name: "icon",
      title: "Custom Icon",
      type: "image",
      fieldset: "studioSettings"
    }
  ],
  orderings: [
    {
      title: "Page Name A-Z",
      name: "pageNameAZ",
      by: [{ field: "pageName", direction: "asc" }]
    },
    {
      title: "Custom Priority",
      name: "priority",
      by: [{ field: "priority", direction: "asc" }]
    }
  ],
  preview: {
    select: {
      title: "pageName",
      routesEn: "localePage.en",
      routesEs: "localePage.es",
      priority: "priority",
      icon: "icon.asset.url"
    },
    prepare(selection) {
      const { icon, priority, title, routesEn, routesEs } = selection;
      const hasSpanishRoute = !!routesEs;
      return {
        title: title,
        subtitle: `${priority}. en${hasSpanishRoute ? ", es" : ""}`,
        media: () =>
          icon ? (
            <img src={icon} />
          ) : (
            <PageMedia title={title} routesEn={routesEn} routesEs={routesEs} />
          )
      };
    }
  }
};
