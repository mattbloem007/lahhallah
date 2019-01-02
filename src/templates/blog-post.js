import React, { Component } from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import { graphql } from 'gatsby'


import pic11 from '../assets/images/pic11.jpg'

class Generic extends Component {

  componentDidMount() {
    console.log(this.props.data.prismicBlogpost.data)
  }

  render() {

    return (
      <Layout>
          <Helmet>
              <title>{this.props.data.prismicBlogpost.data.header.text}</title>
              <meta name="description" content="Generic Page" />
          </Helmet>

          <div id="main" className="alt">
              <section id="one">
                  <div className="inner">
                      <header className="major">
                          <h1>{this.props.data.prismicBlogpost.data.header.text}</h1>
                      </header>
                      <span className="image main"><img src={this.props.data.prismicBlogpost.data.img.url} alt="" /></span>
   <div dangerouslySetInnerHTML={{__html: this.props.data.prismicBlogpost.data.blogpost.html}}></div>                  </div>
              </section>
          </div>
      </Layout>
    )
  }
}

export default Generic

export const pageQuery = graphql`
query blogpostQuery($slugs: String!){
  prismicBlogpost(uid: {eq:$slugs}) {
id
  uid
  tags
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
`
