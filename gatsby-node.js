const path = require('path')

exports.createPages = ({graphql, boundActionCreators}) => {
  const {createPage} = boundActionCreators
  return new Promise((resolve, reject) => {
    const genericTemplate = path.resolve('src/templates/generic.js')
    const landingTemplate = path.resolve('src/templates/landing.js')
    resolve(
      graphql(`
        {
         allContentfulHomePage {
            edges {
              node {
                header
                slug
                description
              }
            }
          }
          allContentfulLandingSection {
            edges {
              node {
                header
                title
                slug
                description {
                  description
                }
              }
            }
          }
}
      `).then((result) => {
        if (result.errors) {
          reject(result.errors)
        }
        const homeList = result.data.allContentfulHomePage.edges;
        const sectionList = result.data.allContentfulLandingSection.edges;

        homeList.forEach((edge) => {
          createPage({
            path: edge.node.slug,
            component: landingTemplate,
            context: {
              slug: edge.node.slug,
              section: edge.node.slug
            }
          })
        })

        sectionList.forEach((edge) => {
          createPage({
            path: edge.node.slug,
            component: genericTemplate,
            context: {
              slug: edge.node.slug,
              title: edge.node.title
            }
          })
        })
        return
      })
    )
  })
}
