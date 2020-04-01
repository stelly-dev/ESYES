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
            _rawLocalePage(resolveReferences: { maxDepth: 20 })
          }
        }
      }
    }
  `)

  reporter.info("starting ---------------------------")
  if (result.errors) throw result.errors

  const pageEdges = (result.data.allSanityPage || {}).edges || []
  createPage({
    path: "/effi-app/",
    component: require.resolve(`./src/templates/Page`),
  })
  pageEdges.forEach((edge, index) => {
    const { id, _rawLocalePage, pageName } = edge.node

    if (_rawLocalePage && "en" in _rawLocalePage) {
      reporter.info("Creating English Language Pages")
      reporter.info("-------------------------------")
      const slug = slugify(pageName)
      const path = slug === "Home-Page" ? "/" : `/${slug.toLowerCase()}/`
      reporter.info(`-----------------------------------   ${path}`)
      createPage({
        path,
        component: require.resolve(`./src/templates/Page`),
        context: { id, content: _rawLocalePage["en"] },
      })
    }
    if (_rawLocalePage && "es" in _rawLocalePage) {
      reporter.info("Creating Spanish Language Pages")
      reporter.info("-------------------------------")
      const slug = slugify(pageName)
      const path = slug === "Home-Page" ? "/es/" : `/es/${slug.toLowerCase()}`
      reporter.info(`-----------------------------------   ${path}`)
      createPage({
        path,
        component: require.resolve(`./src/templates/Page`),
        context: { id, content: _rawLocalePage["es"] },
      })
    }
  })
}

exports.createPages = async ({ graphql, actions, reporter }) => {
  await createRootPages(graphql, actions, reporter)
}
