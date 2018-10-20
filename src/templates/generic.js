import React, { Component } from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import { graphql } from 'gatsby'


import pic11 from '../assets/images/pic11.jpg'

class Generic extends Component {

  render() {

    const { description } = this.props.data.contentfulGenericSection
    return (
      <Layout>
          <Helmet>
              <title>header</title>
              <meta name="description" content="Generic Page" />
          </Helmet>

          <div id="main" className="alt">
              <section id="one">
                  <div className="inner">
                      <header className="major">
                          <h1>header</h1>
                      </header>
                      <span className="image main"><img src={this.props.data.contentfulAsset.file.url} alt="" /></span>
                      <div dangerouslySetInnerHTML={{__html: description.childMarkdownRemark.html}}></div>
                  </div>
              </section>
          </div>
      </Layout>
    )
  }
}

export default Generic

export const pageQuery = graphql`
  query genericQuery($slug: String!){
    contentfulGenericSection(slug: {eq: $slug}) {
      header
      description {
        childMarkdownRemark {
          html
        }
      }
      slug
    }
    contentfulAsset(title: {eq: "gogocacaoTop"}) {
      file {
        url
      }
    }
  }
`
