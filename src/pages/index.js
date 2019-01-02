import React from 'react'
import { Link, graphql } from 'gatsby'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import Banner from '../components/Banner'
import Calendar from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";



import pic01 from '../assets/images/pic01.jpg'
import pic02 from '../assets/images/pic02.jpg'
import pic03 from '../assets/images/pic03.jpg'
import pic04 from '../assets/images/pic04.jpg'
import pic05 from '../assets/images/pic05.jpg'
import pic06 from '../assets/images/pic06.jpg'

const localizer = Calendar.momentLocalizer(moment);


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
                        this.props.data.allPrismicHomepage.edges.map((edge) => {
                          return (
                            <article key={edge.node.id} style={{backgroundImage: `url(${pic01})`}}>
                                <header className="major">
                                    <h3>{edge.node.data.header.text}</h3>
                                    <p>{edge.node.data.content1.text}</p>
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

export default HomeIndex

export const pageQuery = graphql`
{
  allPrismicHomepage{
      edges{
        node{
          uid
        	id
          data {
            header {
              html
              text
            }
            content1 {
              html
              text
            }
          }
        }
      }
    }
}

`
