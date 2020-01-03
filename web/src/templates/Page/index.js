import React from "react"
import { graphql } from "gatsby"
import Layout from "../../Layout"

export const query = graphql`
  query RootPageTemplateQuery($id: String!) {
    page: sanityPage(id: { eq: $id }) {
      id
      pageName
      _rawContent
    }
  }
`

const PageTemplate = props => {
  const { data, errors } = props
  const page = data && data.page
  return (
    <Layout>
      {page && page.pageName}
      {errors ? <pre>{JSON.stringify(errors, null, 2)}</pre> : null}
    </Layout>
  )
}

export default PageTemplate
