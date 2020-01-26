import React from "react"
import { graphql } from "gatsby"
import Layout from "../../Layout"
import Hero from "../../components/sections/Hero/"
import { mapHeroToProps } from "../../utils/mapToProps"

export const query = graphql`
  query RootPageTemplateQuery($id: String!) {
    page: sanityPage(id: { eq: $id }) {
      id
      pageName
      _rawContent(resolveReferences: { maxDepth: 5 })
    }
  }
`

const PageTemplate = props => {
  const { data, errors } = props
  const page = data && data.page

  const content = data && data.page && data.page["_rawContent"]
  return (
    <Layout>
      {page && page.pageName}
      {errors ? <pre>{JSON.stringify(errors, null, 2)}</pre> : null}
      {content &&
        content.map((section, i) => {
          const { _type } = section
          switch (_type) {
            case "pageHero":
              return <Hero {...mapHeroToProps(section)} />
            default:
              return (
                <div>
                  <pre>{JSON.stringify(_type, null, 2)}</pre>
                </div>
              )
          }
        })}
      {content && <pre>{JSON.stringify(content, null, 2)}</pre>}
    </Layout>
  )
}

export default PageTemplate
