import React from 'react'
import { Link, graphql } from 'gatsby'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import Banner from '../components/Banner'

import pic01 from '../assets/images/pic01.jpg'
import pic02 from '../assets/images/pic02.jpg'
import pic03 from '../assets/images/pic03.jpg'
import pic04 from '../assets/images/pic04.jpg'
import pic05 from '../assets/images/pic05.jpg'
import pic06 from '../assets/images/pic06.jpg'

class HomeIndex extends React.Component {
    render() {
        return (
            <Layout>
                <Helmet
                    title="Lah-Hallah"
                    meta={[
                        { name: 'description', content: 'Sample' },
                        { name: 'keywords', content: 'sample, something' },
                    ]}
                >
                </Helmet>

                <Banner />

                <div id="main">
                    <section id="one" className="tiles">
                      {
                        this.props.data.allContentfulHomePage.edges.map((edge) => {
                          return (
                            <article key={edge.node.id} style={{backgroundImage: `url(${pic01})`}}>
                                <header className="major">
                                    <h3>{edge.node.header}</h3>
                                    <p>{edge.node.description}</p>
                                </header>
                                <Link to= {"/" + edge.node.slug} className="link primary"></Link>
                            </article>
                          )
                        })
                      }

                    </section>
                    <section id="two">
                        <div className="inner">
                            <header className="major">
                                <h2>More To Come</h2>
                            </header>
                            <p>Stay tuned for more goodies to be added to the site!</p>
                            <ul className="actions">
                                <li><a href="#one" className="button next">Get Started</a></li>
                            </ul>
                        </div>
                    </section>
                </div>

            </Layout>
        )
    }
}

export default HomeIndex

export const pageQuery = graphql`
query {
  allContentfulHomePage{
    edges{
      node{
        id
        header
        slug
        description
      }
    }
  }
}
`
