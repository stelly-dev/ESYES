import React from "react"
import Img from "gatsby-image"
import { graphql } from "gatsby"
import Layout from "../../Layout"
import Hero from "../../components/sections/Hero/"
import HomePageTextSection from "../../components/sections/HomePageTextSection/"
import CircleCTASection from "../../components/sections/CircleCTASection/"
import ImageLeftSection from "../../components/sections/ImageLeftSection/"
import ReviewSection from "../../components/sections/ReviewSection/"
import Block from "../../components/sections/Block/"
import StaffList from "../../components/sections/StaffList/"
import {
  mapHeroToProps,
  mapHomePageTextSectionToProps,
  mapCircleCTASectionToProps,
  mapImageLeftSectionToProps,
  mapReviewSectionToProps,
  mapStaffListToProps,
} from "../../utils/mapToProps"

export const query = graphql`
  query RootPageTemplateQuery($id: String!) {
    page: sanityPage(id: { eq: $id }) {
      id
      pageName
      _rawContent(resolveReferences: { maxDepth: 10 })
    }
  }
`

const PageTemplate = props => {
  const { data, errors } = props

  const content = data && data.page && data.page["_rawContent"]
  return (
    <Layout>
      {errors ? <pre>{JSON.stringify(errors, null, 2)}</pre> : null}
      {content &&
        content.map((section, i) => {
          console.log(section)
          const { _type } = section
          switch (_type) {
            case "circleCTAList":
              return (
                <CircleCTASection
                  {...mapCircleCTASectionToProps(section)}
                  key={section._key}
                />
              )
            case "reviewSection":
              return (
                <ReviewSection
                  {...mapReviewSectionToProps(section)}
                  key={section._key}
                />
              )
            // return <pre>{JSON.stringify(section, null, 2)}</pre>
            case "homePageText":
              return (
                <HomePageTextSection
                  {...mapHomePageTextSectionToProps(section)}
                  key={section._key}
                />
              )

            case "imageLeftSection":
              return (
                <ImageLeftSection
                  {...mapImageLeftSectionToProps(section)}
                  key={section._key}
                />
              )
            case "pageHero":
              return <Hero {...mapHeroToProps(section)} key={section._key} />
            case "block":
              return <Block {...section} key={section._key} />
            // return <pre>{JSON.stringify(section, null, 2)}</pre>
            case "staffList":
              return (
                <StaffList
                  {...mapStaffListToProps(section)}
                  key={section._key}
                />
              )
            default:
              return (
                <div key={Math.random()}>
                  <span style={{ color: "red" }}>
                    No resolver for type "{_type}" found.
                  </span>
                </div>
              )
          }
        })}
      {/* {content && <pre>{JSON.stringify(content, null, 2)}</pre>} */}
    </Layout>
  )
}

export default PageTemplate
