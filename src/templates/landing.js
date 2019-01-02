import React, { Component } from 'react'
import { Link, graphql } from 'gatsby'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import BannerLanding from '../components/BannerLanding'

import pic08 from '../assets/images/pic08.jpg'
import pic09 from '../assets/images/pic09.jpg'
import pic10 from '../assets/images/pic10.jpg'

class Landing extends Component {

  componentDidMount() {
    console.log(this.props.data.prismicLanding)
  }

  render() {

    const { header, desc } = this.props.data.prismicLanding.data
    //const { description } = this.props.data.contentfulLandingSection.description

    return (
      <Layout>
        <Helmet>
            <title>{header.text}</title>
            <meta name="description" content="Landing Page" />
        </Helmet>

        <BannerLanding title={header.text} description={desc.text}/>

        <div id="main">
{      /**      <section id="one">
                <div className="inner">
                    <header className="major">
                        <h2>{header.text}</h2>
                    </header>
                    <p>{desc.text}</p>
                </div>
            </section> */}
            <section id="two" className="spotlights">
              {
                this.props.data.allPrismicLandingsection.edges.map((edge) => {
                  return (
                    <section>
                        <Link to="/generic" className="image">
                            <img src={pic08} alt="" />
                        </Link>
                        <div className="content">
                            <div className="inner">
                                <header className="major">
                                    <h3>{edge.node.data.header.text}</h3>
                                </header>
                                <p>{edge.node.data.desc.text}</p>
                                <ul className="actions">
                                    <li><Link to={"/" + edge.node.uid} className="button">Learn more</Link></li>
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
query ($slugs: String!) {
  prismicLanding (tags: {eq: $slugs}){
   id
   uid
   data{
     header {
       html
       text
     }
     desc {
       html
       text
     }
     section {
            html
            text
          }
   }
 }

  allPrismicLandingsection (filter:{tags: {eq: $slugs} }){
    edges{
      node{
        uid
        id
        data{
          header {
            html
            text
          }
          desc {
            html
            text
          }
          section {
            html
            text
          }
        }
      }
    }
  }


}
`
