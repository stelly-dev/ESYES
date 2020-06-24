import React from "react"
import PropTypes from "prop-types"
import Helmet from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

const SEO = ({
  focus_keyword,
  focus_synonyms,
  meta_description,
  seo_title,
  description,
  image,
  imageAlt,
  title,
  lang,
  path,
}) => {
  const { site } = useStaticQuery(
    graphql`
      query SiteQuery {
        site {
          siteMetadata {
            siteUrl
          }
        }
      }
    `
  )
  const canonical = path ? `${site.siteMetadata.siteUrl}/${path}` : null
  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={seo_title}
      link={
        canonical
          ? [
              {
                rel: "canonical",
                ref: canonical,
              },
            ]
          : []
      }
      meta={[
        {
          name: "description",
          content: meta_description,
        },
        {
          name: "keywords",
          content: [focus_keyword].concat(focus_synonyms),
        },
        {
          property: "og:title",
          content: title,
        },
        {
          property: "og:description",
          content: description,
        },
        {
          proprety: "og:type",
          content: "website",
        },
      ].concat(
        image
          ? [
              {
                property: "og:image",
                content: image.asset.url,
              },
              {
                property: "og:imageAlt",
                content: imageAlt,
              },
              {
                property: "og:imageWidth",
                content: image.asset.metadata.dimensions.width,
              },
              {
                property: "og:imageHeight",
                content: image.asset.metadata.dimensions.height,
              },
              {
                name: "twitter:card",
                content: "summary_large_image",
              },
            ]
          : [
              {
                name: "twitter:card",
                content: "summary",
              },
            ]
      )}
    />
  )
}

SEO.defaultProps = {
  description: "",
  focus_keyword: "",
  focus_synonyms: [],
  image: null,
  imageAlt: "",
  lang: "en",
  meta_description: "",
  path: "/",
  seo_title: "",
  title: "",
}

SEO.propTypes = {
  description: PropTypes.string,
  focus_keyword: PropTypes.string,
  focus_synonyms: PropTypes.array,
  image: PropTypes.object,
  imageAlt: PropTypes.string,
  lang: PropTypes.string,
  meta_description: PropTypes.string,
  path: PropTypes.string,
  seo_title: PropTypes.string,
  title: PropTypes.string,
}

export default SEO
