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
      lazyload={index > 1}
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

export default function Page({ error, pageContext }) {
  const pageContent =
    pageContext && pageContext.content && pageContext.content.content
  return (
    <Layout>
      {pageContent &&
        pageContent.map((section, index) => {
          const { _type } = section
          const sectionFileName = findSectionName(_type)
          const mapFunc = findSectionMapFunc(_type)
          const sectionProps = mapFunc(section)
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
