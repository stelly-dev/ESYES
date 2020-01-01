import React from "react"
import { graphql } from "gatsby"
import Layout from './src/Containers/Layout; 


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
  return <div>{page && page.pageName}</div>
}

export default PageTemplate
