import React, { Component } from 'react'
import { Link, graphql } from 'gatsby'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import BannerLanding from '../components/BannerLanding'

import pic08 from '../assets/images/pic08.jpg'
import pic09 from '../assets/images/pic09.jpg'
import pic10 from '../assets/images/pic10.jpg'

class Landing extends Component {

  render() {

    const { description, title } = this.props.data.contentfulLanding
    //const { description } = this.props.data.contentfulLandingSection.description

    return (
      <Layout>
        <Helmet>
            <title>{title}</title>
            <meta name="description" content="Landing Page" />
        </Helmet>

        <BannerLanding title={title} description={description}/>

        <div id="main">
            <section id="one">
                <div className="inner">
                    <header className="major">
                        <h2>{title}</h2>
                    </header>
                    <p>{description}</p>
                </div>
            </section>
            <section id="two" className="spotlights">
              {
                this.props.data.allContentfulLandingSection.edges.map((edge) => {
                  return (
                    <section>
                        <Link to="/generic" className="image">
                            <img src={pic08} alt="" />
                        </Link>
                        <div className="content">
                            <div className="inner">
                                <header className="major">
                                    <h3>{edge.node.header}</h3>
                                </header>
                                <p>{edge.node.description.description}</p>
                                <ul className="actions">
                                    <li><Link to={"/" + edge.node.slug} className="button">Learn more</Link></li>
                                </ul>
                            </div>
                        </div>
                    </section>
                  )
                })
              }
            </section>
        </div>

    </Layout>
    )
  }
}

export default Landing

export const pageQuery = graphql`
  query landingQuery($section: String!, $slug: String!) {
    contentfulLanding(slug: {eq: $slug}){
      title
      description
    }
    allContentfulLandingSection(filter:{section: {eq: $section}}) {
      edges {
        node {
          header
          slug
          description {
            description
          }
        }
      }

    }
  }
`
