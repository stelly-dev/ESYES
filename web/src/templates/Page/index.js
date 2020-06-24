import React from "react"
import loadable from "@loadable/component"
import appSections from "./appSections"
import Layout from "../../Layout"
import SEO from "../../components/SEO"

const findSectionName = sectionType => {
  return appSections[sectionType].sectionFileName
}

const findSectionMapFunc = sectionType => {
  return appSections[sectionType].mapFunc
}

function isServer() {
  return typeof window === "undefined"
}

function renderSection(
  sectionFileName,
  mapFunc,
  section,
  index,
  fallback = null
) {
  const SectionComponent = loadable(() =>
    import(`../../components/sections/${sectionFileName}`)
  )
  const sectionProps = mapFunc(section)
  return (
    <SectionComponent
      data-section-index={`${index.toString}`}
      {...sectionProps}
      key={section._key}
      fallback={fallback}
    />
  )
}

function staticRenderSection(index, htmlEl) {
  return (
    <section
      key={index.toString()}
      dangerouslySetInnerHTML={{ __html: htmlEl.innerHTML }}
    />
  )
}

function checkLang(pageContext) {
  const routeString =
    pageContext.content &&
    pageContext.content.route &&
    pageContext.content.route.current
  if (routeString) {
    const check = routeString.match(/es\//)
    return check ? "es" : "en"
  } else {
    console.log("#############################")
    console.log("#############################")
    console.log("#############################")
    console.log(" ")
    console.log("THERE WAS AN ISSUE GENERATING")
    console.log("ONE  OF  YOUR   ROUTES.  THIS")
    console.log("USUALLY  MEANS THAT  THAT THE")
    console.log("ROUTE ON THE SPANISH LANGAUGE")
    console.log("PAGE    WAS      NOT      SET")
    console.log(" ")
    console.log("#############################")
    console.log("#############################")
    console.log("#############################")
  }
}

export default function Page({ error, pageContext }) {
  const pageContent =
    pageContext && pageContext.content && pageContext.content.content
  const seo = (pageContext && pageContext.content.seo) || {}
  const openGraph = (pageContext && pageContext.content.openGraph) || {}
  return (
    <Layout>
      {pageContent && (
        <SEO
          focus_keyword={seo.focus_keyword}
          focus_synonyms={seo.focus_synonyms}
          meta_description={seo.meta_description}
          seo_title={seo.seo_title}
          description={openGraph.description}
          image={openGraph.image}
          imageAlt={openGraph.imageAlt}
          title={openGraph.title}
          lang={checkLang(pageContext)}
          path={pageContext.content.route.current}
        />
      )}
      {pageContent &&
        pageContent.map((section, index) => {
          const { _type } = section
          const sectionFileName = findSectionName(_type)
          const mapFunc = findSectionMapFunc(_type)
          if (isServer()) {
            // Server should always render the section so we get the static HTML hooks in.
            return renderSection(
              sectionFileName,
              mapFunc,
              section,
              index,
              fallback
            )
          }

          const htmlEl = document.querySelector(
            `[data-section-index-${index.toString()}]`
          )
          const wasUserPreviouslyOnSite = window.history.state
          if (htmlEl && !wasUserPreviouslyOnSite) {
            return staticRenderSection(index, htmlEl)
          }
          const fallback =
            htmlEl && htmlEl.outerHTML ? (
              <div dangerouslySetInnerHTML={{ __html: htmlEl.outerHTML }}></div>
            ) : null
          return renderSection(
            sectionFileName,
            mapFunc,
            section,
            index,
            fallback
          )
        })}
    </Layout>
  )
}
