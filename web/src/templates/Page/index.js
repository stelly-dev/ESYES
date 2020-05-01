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

export default function Page({ error, pageContext }) {
  const pageContent =
    pageContext && pageContext.content && pageContext.content.content
  return (
    <Layout>
      {pageContent &&
        pageContent.map(section => {
          const { _type } = section
          const sectionFileName = findSectionName(_type)
          const mapFunc = findSectionMapFunc(_type)
          const SectionComponent = loadable(() =>
            import(`../../components/sections/${sectionFileName}/`)
          )
          const sectionProps = mapFunc(section)
          if (sectionProps) {
            return <SectionComponent {...sectionProps} key={section._key} />
          } else {
            return null
          }
        })}
    </Layout>
  )
}
