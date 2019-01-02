const path = require('path')

exports.createPages = ({graphql, boundActionCreators}) => {
  const {createPage} = boundActionCreators
  return new Promise((resolve, reject) => {
    const genericTemplate = path.resolve('src/templates/generic.js')
    const landingTemplate = path.resolve('src/templates/landing.js')
    const blogTemplate = path.resolve('src/templates/blog.js')
    const blogpostTemplate = path.resolve('src/templates/blog-post.js')
    resolve(
      graphql(`
        {

          allPrismicBlogt{
            edges{
              node{
                uid
                id
                data{
                  header {
                    html
                    text
                  }
                  snippet {
                    html
                    text
                  }
                }
              }
            }
          }

          allPrismicBlogpost {
            edges{
              node{
                tags
                uid
                data{
                  header {
                    html
                    text
                  }
                  blogpost {
                    html
                    text
                  }
                  img {
                    alt
                    copyright
                    url
                  }
                }
              }
            }
          }

          allPrismicGenericsection{
            edges{
              node{
                uid
                id
                data{
                  header {
                    html
                    text
                  }
                  img {
                    alt
                    copyright
                    url
                  }
                  desc {
                    html
                    text
                  }
                }
              }
            }
          }

            allPrismicLandingsection{
              edges{
                node{
                  uid
                  id
                  data{
                    path{
                      text
                    }
                    section {
                      html
                      text
                    }
                    header {
                      html
                      text
                    }
                    desc {
                      html
                      text
                    }
          				}
                }
              }
            }
}
      `).then((result) => {
        if (result.errors) {
          reject(result.errors)
        }
        const genericList = result.data.allPrismicGenericsection.edges;
        const sectionList = result.data.allPrismicLandingsection.edges;
        const blogList = result.data.allPrismicBlogt.edges;
        const blogpostList = result.data.allPrismicBlogpost.edges;

        console.log(genericList)
        console.log(sectionList)

        genericList.forEach((edge) => {
          createPage({
            path: edge.node.uid,
            component: genericTemplate,
            context: {
              slugs: edge.node.uid,
              id: edge.node.id
            }
          })
        })

        sectionList.forEach((edge) => {
          createPage({
            path: edge.node.data.path.text,
            component: landingTemplate,
            context: {
              slugs: edge.node.data.path.text,
              id: edge.node.id
            }
          })
        })

        blogList.forEach((edge) => {
          createPage({
            path: edge.node.uid,
            component: blogTemplate,
            context: {
              slugs: edge.node.uid,
              id: edge.node.id
            }
          })
        })

        blogpostList.forEach((edge) => {
          createPage({
            path: edge.node.uid,
            component: blogpostTemplate,
            context: {
              slugs: edge.node.uid,
              id: edge.node.id
            }
          })
        })
        return
      })
    )
  })
}
