import React from "react";
import slugify from "slugify";
import {
  AiOutlineAlignCenter,
  AiOutlineAlignLeft,
  AiOutlineAlignRight
} from "react-icons/ai";

import {
  FiExternalLink,
  FiLink,
  FiChevronRight,
  FiPhone
} from "react-icons/fi";

import { MdAttachFile } from "react-icons/md";

export default {
  name: "page_es",
  title: "Español",
  type: "document",
  fields: [
    {
      name: "pageName",
      title: "Page Name",
      type: "string"
    },
    {
      name: "content",
      title: "Content",
      type: "array",
      of: [
        {
          type: "block",
          styles: [
            { title: "Normal", value: "normal" },
            { title: "H1", value: "h1" },
            { title: "H2", value: "h2" },
            { title: "H3", value: "h3" },
            { title: "H4", value: "h4" },
            { title: "H5", value: "h5" },
            { title: "H6", value: "h6" },
            { title: "Quote", value: "blockquote" }
          ],
          lists: [{ title: "Bullet", value: "bullet" }],
          marks: {
            decorators: [
              { title: "Strong", value: "strong" },
              { title: "Emphasis", value: "em" },
              {
                title: "Centered",
                value: "center",
                blockEditor: {
                  icon: () => <AiOutlineAlignCenter />
                }
              },
              {
                title: "Right Aligned",
                value: "right",
                blockEditor: {
                  icon: () => <AiOutlineAlignRight />
                }
              },
              {
                title: "Slim",
                value: "slim"
              }
            ],
            annotations: [
              {
                name: "internalLink",
                type: "object",
                title: "Internal link",
                fields: [
                  {
                    name: "reference",
                    type: "reference",
                    title: "Reference",
                    to: [
                      { type: "page" }
                      // other types if needed
                    ]
                  }
                ],
                icon: FiLink
              },
              {
                name: "link",
                type: "object",
                title: "External link",
                fields: [
                  {
                    name: "href",
                    type: "url",
                    title: "URL"
                  },
                  {
                    title: "Open in new tab",
                    name: "blank",
                    type: "boolean"
                  }
                ],
                icon: FiExternalLink
              },
              {
                name: "telephone",
                type: "object",
                title: "Telephone number",
                fields: [
                  {
                    name: "number",
                    type: "string",
                    title: "Telephone Number",
                    description: "Must be of the form x-xxx-xxx-xxxx"
                  }
                ],
                icon: FiPhone
              },
              {
                name: "chevronLink",
                type: "object",
                title: "Chevron Link",
                fields: [
                  {
                    name: "reference",
                    type: "reference",
                    title: "Reference",
                    to: [{ type: "page" }]
                  }
                ],
                icon: FiChevronRight
              },
              {
                name: "fileLink",
                type: "object",
                title: "File Link",
                fields: [
                  {
                    name: "reference",
                    type: "reference",
                    title: "File Reference",
                    to: [{ type: "files" }]
                  }
                ],
                icon: MdAttachFile
              }
            ]
          }
        },
        { type: "pageHero" },
        { type: "homePageText" },
        { type: "circleCTAList" },
        { type: "imageLeftSection" },
        { type: "reviewSection" },
        { type: "staffList" },
        { type: "banner" },
        { type: "simpleCTA" },
        { type: "blockButton" },
        { type: "youtube" },
        { type: "vimeo" },
        { type: "youtubeLeftSection" },
        { type: "twoColumn" },
        { type: "fileLink" },
        { type: "linebreak" },
        { type: "contractorAccordion" },
        { type: "blockImage" },
        { type: "listBanner" }
      ]
    },
    {
      name: "seo",
      title: "SEO",
      type: "seo-tools", // use seo-tools type
      options: {
        baseUrl: "https://energy-smart.netlify.com", // (REQUIRED) This is the baseUrl for your site
        baseUrl(doc) {
          console.log(doc);
          console.log("coming from baseUrl");
          return "https://energy-smart.netlify.com/";
        },
        slug(doc) {
          console.log(doc);
          return slugify(doc.pageName).toLowerCase();
        },
        fetchRemote: true, // Can be set to false to disable fetching the remote source (you will need to pass the content helpers for analysis)
        content(doc) {
          return "simple html representation of your doc"; // (OPTIONAL) If your site is generated after Sanity content updates you can use this for better real time feedback
        },
        title(doc) {
          return "page title"; // (OPTIONAL) return page title otherwise inferred from scrape
        },
        description(doc) {
          return "page description"; // (OPTIONAL) return page description otherwise inferred from scrape
        },
        locale(doc) {
          return "page locale"; // (OPTIONAL) return page locale otherwise inferred from scrape
        },
        contentSelector: "body" // (OPTIONAL) option to finetune where Yoast will look for the content. (only applicable for scraping without content function)
      }
    }
  ],
  preview: {
    select: {
      title: "pageName"
    }
  }
};
