import React from "react";
import { AiOutlineAlignCenter, AiOutlineAlignRight } from "react-icons/ai";
import listBannerIcon from "./icons/banner-list_section_image.png";
import heroImageIcon from "./icons/hero_section_image.png";
import ctaListIcon from "./icons/circle-cta_section_image.png";
import reviewSectionIcon from "./icons/review_section_image.png";
import staffListIcon from "./icons/staff-list_section_image.png";
import bannerIcon from "./icons/banner_section_image.png";
import simpleCTAIcon from "./icons/simple-cta_section_image.png";
import buttonIcon from "./icons/button_section_image.png";
import youtubeIcon from "./icons/youtube_section_image.png";
import vimeoIcon from "./icons/vimeo_section_image.png";
import dualColumnIcon from "./icons/dual-column_section_image.png";
import fileLinkIcon from "./icons/file-link_section_image.png";
import blockImageIcon from "./icons/block-image_section-icon.png";
import calloutBoxIcon from "./icons/callout-box_section_image.png";
import customTitleIcon from "./icons/custom-title_section_image.png";
import imageLeftSectionIcon from "./icons/image-left_section_image.png";
import contractorAccordionIcon from "./icons/contractor-accordion_section_image.png";
import {
  FiExternalLink,
  FiLink,
  FiChevronRight,
  FiPhone
} from "react-icons/fi";

import { MdAttachFile } from "react-icons/md";

const styles = {
  iconStyle: {
    maxWidth: "40px"
  }
};

export default {
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
                name: "newTab",
                title: "Open in new tab?",
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
              },
              {
                name: "newTab",
                title: "Open in new tab?",
                type: "boolean"
              }
            ],
            icon: MdAttachFile
          }
        ]
      }
    },
    {
      type: "pageHero",
      icon: () => <img src={heroImageIcon} style={styles.iconStyle} />
    },
    {
      type: "circleCTAList",
      icon: () => <img src={ctaListIcon} style={styles.iconStyle} />
    },
    {
      type: "imageLeftSection",
      icon: () => <img src={imageLeftSectionIcon} style={styles.iconStyle} />
    },
    {
      type: "reviewSection",
      icon: () => <img src={reviewSectionIcon} style={styles.iconStyle} />
    },
    {
      type: "staffList",
      icon: () => <img src={staffListIcon} style={styles.iconStyle} />
    },
    {
      type: "banner",
      icon: () => <img src={bannerIcon} style={styles.iconStyle} />
    },
    {
      type: "simpleCTA",
      icon: () => <img src={simpleCTAIcon} style={styles.iconStyle} />
    },
    {
      type: "blockButton",
      icon: () => <img src={buttonIcon} style={styles.iconStyle} />
    },
    {
      type: "youtube",
      icon: () => <img src={youtubeIcon} style={styles.iconStyle} />
    },
    {
      type: "vimeo",
      icon: () => <img src={vimeoIcon} style={styles.iconStyle} />
    },
    {
      type: "twoColumn",
      icon: () => <img src={dualColumnIcon} style={styles.iconStyle} />
    },

    {
      type: "fileLink",
      icon: () => <img src={fileLinkIcon} style={styles.iconStyle} />
    },
    {
      type: "contractorAccordion",
      icon: () => <img src={contractorAccordionIcon} style={styles.iconStyle} />
    },
    {
      type: "blockImage",
      icon: () => <img src={blockImageIcon} style={styles.iconStyle} />
    },
    {
      type: "listBanner",
      icon: () => <img src={listBannerIcon} style={styles.iconStyle} />
    },
    {
      type: "calloutBox",
      icon: () => <img src={calloutBoxIcon} style={styles.iconStyle} />
    },
    {
      type: "customTitle",
      icon: () => <img src={customTitleIcon} style={styles.iconStyle} />
    }
  ]
};
