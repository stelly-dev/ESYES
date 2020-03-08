const slugify = require("slugify")

// const isArray = o => {
//   return Object.prototype.toString.call(o) === "[object Array]"
// }

// const traverseObject = obj => {
//   for (let key in obj) {
//     if (obj.hasOwnProperty(key)) {
//       traverse(obj[key])
//     }
//   }
// }

// const traverseArray = arr => {
//   arr.forEach(x => {
//     traverse(x)
//   })
// }
// // _type === sanity.imageAsset
// const traverse = x => {
//   if (isArray(x)) {
//     traverseArray(x)
//   } else if (typeof x === "object" && x !== null) {
//     traverseObject(x)
//   } else {
//   }
// }

async function createRootPages(graphql, actions, reporter) {
  const { createPage } = actions
  const result = await graphql(`
    {
      allSanityPage {
        edges {
          node {
            id
            pageName
            _rawContent(resolveReferences: { maxDepth: 20 })
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
    const path = slug === "Home-Page" ? "/" : `/${slug}/`.toLowerCase()

    reporter.info(`Creating Page: ${path}`)

    createPage({
      path,
      component: require.resolve(`./src/templates/Page`),
      context: { id, _rawContent },
    })
  })
}

exports.createPages = async ({ graphql, actions, reporter }) => {
  await createRootPages(graphql, actions, reporter)
}
