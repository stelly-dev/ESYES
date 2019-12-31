const slugify = require("slugify")

async function createRootPages(graphql, actions, reporter) {
  const { createPage } = actions
  const result = await graphql(`
    {
      allSanityPage {
        edges {
          node {
            id
            pageName
            _rawContent(resolveReferences: { maxDepth: 5 })
          }
        }
      }
    }
  `)
  if (result.errors) throw result.errors
  const pageEdges = (result.data.allSanityPage || {}).edges || []
  pageEdges.forEach((edge, index) => {
    const { id, _rawContent, pageName } = edge.node
    const slug = slugify(pageName)
    const path = slug === "Home-Page" ? "/" : `/${slug}`.toLowerCase()

    reporter.info(`Creating Page: ${path}`)

    createPage({
      path,
      component: require.resolve(`./src/templates/Page`),
      context: { id },
    })
  })
}

exports.createPages = async ({ graphql, actions, reporter }) => {
  await createRootPages(graphql, actions, reporter)
}
