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

  if (result.errors) throw result.errors
  
  const pageEdges = (result.data.allSanityPage || {}).edges || []
  createPage({
    path: "/effi-app/",
    component: require.resolve(`./src/templates/Page`),
  })
  createPage({
    path: "/es/effi-app/",
    component: require.resolve(`./src/templates/Page`),
  })
  pageEdges.forEach((edge, index) => {
    const { id, _rawLocalePage, pageName } = edge.node

    if (_rawLocalePage && "es" in _rawLocalePage) {
      const slug = slugify(pageName)
      const path = slug === "Home-Page" ? "/es/" : `/es/${slug.toLowerCase()}/`
      reporter.info(`------------------------ \u001b[32;1msuccess \u001b[36;1m/es/\u001b[34;1m${slug.toLowerCase()}`)
      createPage({
        path,
        component: require.resolve(`./src/templates/Page`),
        context: { id, content: _rawLocalePage["es"] },
        ...(path.match(/^\/[a-z]{2}\/404\/$/) && reporter.info(`the path matches 404. \n     ${path}\n`) && {matchPath: `/es/*`})
        
      })
    }
    
    if (_rawLocalePage && "en" in _rawLocalePage) {
      
      const slug = slugify(pageName)
      const path = slug === "Home-Page" ? "/" : `/${slug.toLowerCase()}/`
      reporter.info(`------------------------ \u001b[32;1msuccess\u001b[34m ${path}`)
      createPage({
        path,
        component: require.resolve(`./src/templates/Page`),
        context: { id, content: _rawLocalePage["en"] },
        ...(path.match(/^\/404\/$/) && reporter.info(`the path matches 404. \n     ${path}\n`) && {matchPath: `/*`})
    })
    }

  })
  
}

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createRedirect} = actions; 
  await createRootPages(graphql, actions, reporter)
  createRedirect({
    fromPath: "https://energy-smart.netlify.com/es/*", 
    toPath: "https://energy-smart.netlify.com/es/404/", 
    isPermanent: true, 
    force: true
  })
  createRedirect({
    fromPath: "https://energy-smart.netlify.com/*", 
    toPath: "https://energy-smart.netlify.com/404/", 
    isPermanent: true, 
    force: true
  })
}


// exports.onCreatePage = async ({page, actions, reporter}) => {
//   const {createPage, deletePage} = actions; 
//   reporter.info("Finding 404 Pages"); 
//   reporter.info(`-------------------------------------------------#### > ${page.path}`)
//   if (page.path.match(/^\/[a-z]{2}\/404\/$/)) {
//     const oldPage = {...page}
//     reporter.info(`found page ===============================${page}`)
//     const langCode = page.path.split('/')[1]; 
//     reporter.info(`------------------------------LanguageCode - ${langCode}`)
//     page.matchPath = `/${langCode}/*`
//     deletePage(oldPage); 
//     createPage(page); 
//   }
// }
