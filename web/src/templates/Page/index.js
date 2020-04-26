import React from "react"
import Layout from "../../Layout"
import loadable from "@loadable/component"
import appSections from "./appSections"
// import mapToProps from "../../utils/mapToProps"

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
      {
      pageContent && pageContent.map(section => {
        const { _type } = section
        const sectionFileName = findSectionName(_type)
        const mapFunc = findSectionMapFunc(_type)
        const SectionComponent = loadable(() =>
          import(`../../components/sections/${sectionFileName}/`)
        )
        const sectionProps = mapFunc(section)
        if(sectionProps){
          return <SectionComponent {...sectionProps} key={section._key}/>
        }else {
          return null
        }
      
        })
      }
    </Layout>
  )
}
// prettier-ignore
// const PageTemplate = props => {
//   const { errors, pageContext } = props
//   const content = pageContext && pageContext.content && pageContext.content.content;
//   return (
//     <Layout>
//       {errors ? <pre>{JSON.stringify(errors, null, 2)}</pre> : null}
//       {content &&
//         content.map((section, i) => {
//           const { _type } = section
//           switch (_type) {
//             // case "contractorAccordion": return (<pre>{JSON.stringify(section, null, 2)}</pre>)
//             case "fileLink": return (<FileLink {...mapFileLinkToProps(section)}  key={section._key} />)
//             case "listBanner": return (<BannerList image={section.image.asset._id} key={section._key} />)
//             case "blockImage": return (<BlockImage {...mapBlockImageToProps(section)} key={section._key} />)
//             case "contractorAccordion": return (<ContractorAccordion {...mapContractorAccordionToProps(section)} key={section._key}/>)
//             case "banner": return ( <Banner {...mapBannerToProps(section)} key={section._key} />)
//             case "block": return <Block {...section} key={section._key} />
//             case "blockButton": return ( <BlockButton {...mapBlockButtonToProps(section)} key={section._key} />)
//             case "circleCTAList": return ( <CircleCTASection {...mapCircleCTASectionToProps(section)} key={section._key} />)
//             case "imageLeftSection": return ( <TwoColGrid {...mapTwoColGridToProps(section)} key={section._key} />)
//             case "linebreak": return <br />
//             case "pageHero": return ( <Hero {...mapHeroToProps(section)} key={section._key} section={section} id={section.backgroundImage.asset["_id"]} />)
//             case "reviewSection": return ( <ReviewSection {...mapReviewSectionToProps(section)} key={section._key} />)
//             case "simpleCTA": return ( <SimpleCTA {...mapSimpleCTAToProps(section)} key={section._key} />)
//             case "staffList": return ( <StaffList {...mapStaffListToProps(section)} key={section._key} />)
//             case "twoColumn": return ( <TwoColumn key={section._key} {...mapTwoColumnToProps(section)} />)
//             case "vimeo": return <VimeoSection key={section._key} url={section.url} image={section.image && section.image.asset.url}/>
//             case "youtube": return <YoutubeSection url={section.url} key={section._key} image={section.image && section.image.asset.url}/>
//             case "homePageText": return ( <HomePageTextSection {...mapHomePageTextSectionToProps(section)} key={section._key} />)
//             default:
//               return (
//                 <div key={Math.random()}>
//                   <span style={{ color: "red" }}>
//                     No resolver for type "{_type}" found.
//                   </span>
//                 </div>
//               )
//           }
//         })}
//     </Layout>
//   )
// }
