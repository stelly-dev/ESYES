const slugify = require("slugify")
const LoadablePlugin = require("@loadable/webpack-plugin")

// code-splitting for dynamic pages
exports.onCreateWebpackConfig = ({
  stage,
  getConfig,
  rules,
  loaders,
  plugins,
  actions,
}) => {
  actions.setWebpackConfig({
    plugins: [new LoadablePlugin()],
  })
}
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
    path: "/contact-testing/",
    component: require.resolve("./src/templates/Page"),
  })
  createPage({
    path: "/es/contact-testing/",
    component: require.resolve("./src/templates/Page"),
  })
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
      reporter.info(
        `------------------------ \u001b[32;1msuccess \u001b[36;1m/es/\u001b[34;1m${slug.toLowerCase()}`
      )
      createPage({
        path,
        component: require.resolve(`./src/templates/Page`),
        context: { id, content: _rawLocalePage["es"] },
        ...(path.match(/^\/[a-z]{2}\/404\/$/) &&
          reporter.info(`the path matches 404. \n     ${path}\n`) && {
            matchPath: `/es/*`,
          }),
      })
    }

    if (_rawLocalePage && "en" in _rawLocalePage) {
      const slug = slugify(pageName)
      const path = slug === "Home-Page" ? "/" : `/${slug.toLowerCase()}/`
      reporter.info(
        `------------------------ \u001b[32;1msuccess\u001b[34m ${path}`
      )
      createPage({
        path,
        component: require.resolve(`./src/templates/Page`),
        context: { id, content: _rawLocalePage["en"] },
        ...(path.match(/^\/404\/$/) &&
          reporter.info(`the path matches 404. \n     ${path}\n`) && {
            matchPath: `/*`,
          }),
      })
    }
  })
}

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createRedirect } = actions
  // 301 Redirects provided by Matt
  createRedirect({
    fromPath: "https://www.energysmartyes.com/",
    toPath: "https://energysmartyes.com/",
    isPermanent: true,
    force: true,
  })
  createRedirect({
    fromPath: "https://www.energysmartyes.com/comfort365/",
    toPath: "https://energysmartyes.com/comfort365/",
    isPermanent: true,
    force: true,
  })
  createRedirect({
    fromPath: "https://www.energysmartyes.com/go-solar/",
    toPath: "https://energysmartyes.com/go-solar/",
    isPermanent: true,
    force: true,
  })
  createRedirect({
    fromPath: "https://www.energysmartyes.com/about-us/",
    toPath: "https://energysmartyes.com/about-us/",
    isPermanent: true,
    force: true,
  })
  createRedirect({
    fromPath: "https://www.energysmartyes.com/services/",
    toPath: "https://energysmartyes.com/services/",
    isPermanent: true,
    force: true,
  })
  createRedirect({
    fromPath: "https://www.energysmartyes.com/espanol/",
    toPath: "https://energysmartyes.com/espanol/",
    isPermanent: true,
    force: true,
  })
  createRedirect({
    fromPath: "https://www.energysmartyes.com/contact-us/",
    toPath: "https://energysmartyes.com/contact/",
    isPermanent: true,
    force: true,
  })
  createRedirect({
    fromPath: "https://www.energysmartyes.com/rebates-financing/",
    toPath: "https://energysmartyes.com/rebates-and-financing/",
    isPermanent: true,
    force: true,
  })
  createRedirect({
    fromPath: "https://www.energysmartyes.com/services/virtualadvisor/",
    toPath: "https://energysmartyes.com/effi/",
    isPermanent: true,
    force: true,
  })
  createRedirect({
    fromPath: "https://www.energysmartyes.com/services/virtualadvisor/app/",
    toPath: "https://energysmartyes.com/effi-app/",
    isPermanent: true,
    force: true,
  })
  createRedirect({
    fromPath:
      "https://www.energysmartyes.com/contractors/residential-contractor-resources/",
    toPath: "https://energysmartyes.com/find-a-contractor/",
    isPermanent: true,
    force: true,
  })
  createRedirect({
    fromPath: "https://www.energysmartyes.com/services/success-stories/",
    toPath: "https://energysmartyes.com/success-stories/",
    isPermanent: true,
    force: true,
  })
  createRedirect({
    fromPath: "https://www.energysmartyes.com/services/for-landlords-tenants/",
    toPath: "https://energysmartyes.com/",
    isPermanent: true,
    force: true,
  })
  createRedirect({
    fromPath: "https://www.energysmartyes.com/services/businesses/",
    toPath: "https://energysmartyes.com/",
    isPermanent: true,
    force: true,
  })
  createRedirect({
    fromPath: "https://www.energysmartyes.com/sign-up/",
    toPath: "https://energysmartyes.com/contact/",
    isPermanent: true,
    force: true,
  })
  createRedirect({
    fromPath: "https://www.energysmartyes.com/services/ev-advising/",
    toPath: "https://energysmartyes.com/electric-vehicles/",
    isPermanent: true,
    force: true,
  })
  createRedirect({
    fromPath:
      "https://www.energysmartyes.com/contractors/become-residential-contractor/",
    toPath: "https://energysmartyes.com/",
    isPermanent: true,
    force: true,
  })
  createRedirect({
    fromPath: "https://www.energysmartyes.com/services/find-a-contractor/",
    toPath: "https://energysmartyes.com/find-a-contractor/",
    isPermanent: true,
    force: true,
  })
  createRedirect({
    fromPath: "https://www.energysmartyes.com/services/home-energy/",
    toPath: "https://energysmartyes.com/effi/",
    isPermanent: true,
    force: true,
  })
  createRedirect({
    fromPath:
      "https://www.energysmartyes.com/services/virtualadvisor/electric-vehicles/",
    toPath: "https://energysmartyes.com/electric-vehicles/",
    isPermanent: true,
    force: true,
  })
  createRedirect({
    fromPath: "https://www.energysmartyes.com/about-us/meet-the-advisors/",
    toPath: "https://energysmartyes.com/about-us/",
    isPermanent: true,
    force: true,
  })
  createRedirect({
    fromPath:
      "https://www.energysmartyes.com/services/virtualadvisor/health-and-safety/",
    toPath: "https://energysmartyes.com/effi/",
    isPermanent: true,
    force: true,
  })
  createRedirect({
    fromPath:
      "https://www.energysmartyes.com/services/virtualadvisor/renewable-energy/",
    toPath: "https://energysmartyes.com/effi/",
    isPermanent: true,
    force: true,
  })
  createRedirect({
    fromPath:
      "https://www.energysmartyes.com/services/virtualadvisor/energy-efficiency/",
    toPath: "https://energysmartyes.com/effi/",
    isPermanent: true,
    force: true,
  })
  // 404 redirects.
  createRedirect({
    fromPath: "https://energy-smart.netlify.com/es/*",
    toPath: "https://energy-smart.netlify.com/es/404/",
  })
  createRedirect({
    fromPath: "https://energy-smart.netlify.com/*",
    toPath: "https://energy-smart.netlify.com/404/",
  })
  await createRootPages(graphql, actions, reporter)
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

// async function createRootPages(graphql, actions, reporter) {
//   const { createPage } = actions
//   const result = await graphql(`
//     {
//       allSanityPage {
//         edges {
//           node {
//             id
//             pageName
//             _rawLocalePage(resolveReferences: { maxDepth: 20 })
//           }
//         }
//       }
//     }
//   `)

//   reporter.info("starting ---------------------------")
//   if (result.errors) throw result.errors

//   const pageEdges = (result.data.allSanityPage || {}).edges || []
//   createPage({
//     path: "/effi-app/",
//     component: require.resolve(`./src/templates/Page`),
//   })
//   pageEdges.forEach((edge, index) => {
//     const { id, _rawLocalePage, pageName } = edge.node

//     if (_rawLocalePage && "en" in _rawLocalePage) {
//       reporter.info("Creating English Language Pages")
//       reporter.info("-------------------------------")
//       const slug = slugify(pageName)
//       const path = slug === "Home-Page" ? "/" : `/${slug.toLowerCase()}/`
//       reporter.info(`-----------------------------------   ${path}`)
//       createPage({
//         path,
//         component: require.resolve(`./src/templates/Page`),
//         context: { id, content: _rawLocalePage["en"] },
//       })
//     }
//     if (_rawLocalePage && "es" in _rawLocalePage) {
//       reporter.info("Creating Spanish Language Pages")
//       reporter.info("-------------------------------")
//       const slug = slugify(pageName)
//       const path = slug === "Home-Page" ? "/es/" : `/es/${slug.toLowerCase()}`
//       reporter.info(`-----------------------------------   ${path}`)
//       createPage({
//         path,
//         component: require.resolve(`./src/templates/Page`),
//         context: { id, content: _rawLocalePage["es"] },
//       })
//     }
//   })
// }

// exports.createPages = async ({ graphql, actions, reporter }) => {
//   await createRootPages(graphql, actions, reporter)
// }
