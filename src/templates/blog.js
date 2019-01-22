import React from 'react'
import { Link, graphql } from 'gatsby'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import Banner from '../components/Banner'
import Calendar from "react-big-calendar";
import moment from "moment";



import pic01 from '../assets/images/pic01.jpg'
import pic02 from '../assets/images/pic02.jpg'
import pic03 from '../assets/images/pic03.jpg'
import pic04 from '../assets/images/pic04.jpg'
import pic05 from '../assets/images/pic05.jpg'
import pic06 from '../assets/images/pic06.jpg'
const localizer = Calendar.momentLocalizer(moment);




class Blog extends React.Component {


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

                <section id="banner" className="major">
                    <div className="inner">
                        <header className="major">
                            <h1>{this.props.data.prismicBlogt.data.header.text}</h1>
                        </header>
                        <div className="content">
                            <p>{this.props.data.prismicBlogt.data.snippet.text}</p>
                            <ul className="actions">
                                <li><a href="#one" className="button next scrolly">Get Started</a></li>
                            </ul>
                        </div>
                    </div>
                </section>

                <div id="main">
                    <section id="one" className="tiles">
                      {
                        this.props.data.allPrismicBlogpost.edges.map((edge) => {
                          return (
                            <article key={edge.node.id} style={{backgroundImage: `url(${edge.node.data.img.url})`}}>
                                <header className="major">
                                    <h3>{edge.node.data.header.text}</h3>
                                    <p>{edge.node.data.desc.text}</p>
                                </header>
                                <Link to= {"/" + edge.node.uid} className="link primary"></Link>
                            </article>
                          )
                        })
                      }
                    </section>
                    <section id="two">
                        <div className="inner">
                            <header className="major">
                                <h2>Current Happenings</h2>
                            </header>
                            <p>Stay tuned for more goodies to be added to the site!</p>
                              <Calendar
                                localizer={localizer}
                                defaultDate={new Date()}
                                defaultView="month"
                                events={[
                                  {
                                    start: new Date(),
                                    end: new Date(moment().add(1, "days")),
                                    title: "Some title"
                                  }
                                ]}
                                style={{ height: "100vh" }}
                              />
                        </div>
                    </section>
                </div>

            </Layout>
        )
    }
}

export default Blog

export const pageQuery = graphql`
query ($slugs: String!) {
  allPrismicBlogpost (filter: {tags: {eq: $slugs}}){
  edges{
    node{
      tags
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

prismicBlogt (uid: {eq:$slugs}){
      uid
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

`
