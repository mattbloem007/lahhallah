import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import { graphql } from 'gatsby'


import pic11 from '../assets/images/pic11.jpg'

const Cacao = ({data}) => (
    <Layout>
        <Helmet>
            <title>Shining Hearts Cacao</title>
            <meta name="description" content="Generic Page" />
        </Helmet>

        <div id="main" className="alt">
            <section id="one">
                <div className="inner">
                    <header className="major">
                        <h1>{data.contentfulGenericSection.header}</h1>
                    </header>
                    <span className="image main"><img src={pic11} alt="" /></span>
                    <p>{data.contentfulGenericSection.description.description}</p>
                </div>
            </section>
        </div>

    </Layout>
)

export default Cacao

export const pageQuery = graphql`
query {
  contentfulGenericSection{
    header
    description {
      description
    }
  }
}
`
