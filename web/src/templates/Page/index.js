import React from "react"
import { graphql } from "gatsby"
import Layout from "../../Layout"
import BannerList from "../../components/sections/BannerList"
import Hero from "../../components/sections/Hero/"
import HomePageTextSection from "../../components/sections/HomePageTextSection/"
import CircleCTASection from "../../components/sections/CircleCTASection/"
import TwoColGrid from "../../components/sections/TwoColGrid/"
import FileLink from "../../components/sections/FileLink/"
import ImageLeftSection from "../../components/sections/ImageLeftSection/"
import ReviewSection from "../../components/sections/ReviewSection/"
import Block from "../../components/sections/Block/"
import StaffList from "../../components/sections/StaffList/"
import Banner from "../../components/sections/Banner/"
import SimpleCTA from "../../components/sections/SimpleCTA"
import BlockButton from "../../components/sections/BlockButton/"
import TwoColumn from "../../components/sections/TwoColumn/"
import VimeoSection from "../../components/sections/VimeoSection/"
import ContractorAccordion from "../../components/sections/ContractorAccordion"
import BlockImage from "../../components/sections/BlockImage"
import {
  mapBlockButtonToProps,
  mapContractorAccordionToProps,
  mapHeroToProps,
  mapHomePageTextSectionToProps,
  mapCircleCTASectionToProps,
  mapTwoColGridToProps,
  mapReviewSectionToProps,
  mapStaffListToProps,
  mapBannerToProps,
  mapSimpleCTAToProps,
  mapTwoColumnToProps,
  mapVimeoSectionToProps,
  mapBlockImageToProps,
  mapFileLinkToProps,
} from "../../utils/mapToProps"
import YoutubeSection from "../../components/sections/YoutubeSection"

// export const query = graphql`
//   query RootPageTemplateQuery($id: String!) {
//     page: sanityPage(id: { eq: $id }) {
//       id
//       pageName
//       _rawContent(resolveReferences: { maxDepth: 20 })
//     }
//   }
// `
// prettier-ignore
const PageTemplate = props => {
  const { errors, pageContext } = props
  const content = pageContext && pageContext.content && pageContext.content.content; 
  return (
    <Layout>
      {errors ? <pre>{JSON.stringify(errors, null, 2)}</pre> : null}
      {content &&
        content.map((section, i) => {
          const { _type } = section
          switch (_type) {
            // case "contractorAccordion": return (<pre>{JSON.stringify(section, null, 2)}</pre>)
            case "fileLink": return (<FileLink {...mapFileLinkToProps(section)}  key={section._key} />)
            case "listBanner": return (<BannerList image={section.image.asset._id} key={section._key} />)
            case "blockImage": return (<BlockImage {...mapBlockImageToProps(section)} key={section._key} />)
            case "contractorAccordion": return (<ContractorAccordion {...mapContractorAccordionToProps(section)} key={section._key}/>)
            case "banner": return ( <Banner {...mapBannerToProps(section)} key={section._key} />)
            case "block": return <Block {...section} key={section._key} />
            case "blockButton": return ( <BlockButton {...mapBlockButtonToProps(section)} key={section._key} />)
            case "circleCTAList": return ( <CircleCTASection {...mapCircleCTASectionToProps(section)} key={section._key} />)
            case "imageLeftSection": return ( <TwoColGrid {...mapTwoColGridToProps(section)} key={section._key} />)
            case "linebreak": return <br />
            case "pageHero": return ( <Hero {...mapHeroToProps(section)} key={section._key} section={section} id={section.backgroundImage.asset["_id"]} />)
            case "reviewSection": return ( <ReviewSection {...mapReviewSectionToProps(section)} key={section._key} />)
            case "simpleCTA": return ( <SimpleCTA {...mapSimpleCTAToProps(section)} key={section._key} />)
            case "staffList": return ( <StaffList {...mapStaffListToProps(section)} key={section._key} />)
            case "twoColumn": return ( <TwoColumn key={section._key} {...mapTwoColumnToProps(section)} />)
            case "vimeo": return <VimeoSection key={section._key} url={section.url} image={section.image && section.image.asset.url}/>
            case "youtube": return <YoutubeSection url={section.url} key={section._key} image={section.image && section.image.asset.url}/>
            case "homePageText": return ( <HomePageTextSection {...mapHomePageTextSectionToProps(section)} key={section._key} />)
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
    </Layout>
  )
}

export default PageTemplate
