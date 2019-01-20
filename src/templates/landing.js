import React, { Component } from 'react'
import { Link, graphql } from 'gatsby'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import BannerLanding from '../components/BannerLanding'
import ShowMoreText from 'react-show-more-text';
import Calendar from "react-big-calendar";
import moment from "moment";



import pic08 from '../assets/images/pic08.jpg'
import pic09 from '../assets/images/pic09.jpg'
import pic10 from '../assets/images/pic10.jpg'
const localizer = Calendar.momentLocalizer(moment);


class Landing extends Component {

  componentDidMount() {
    console.log(this.props.data.prismicLanding)
  }

  executeOnClick(isExpanded) {
        console.log(isExpanded);
    }

  render() {

    const { header, desc, img } = this.props.data.prismicLanding.data
    //const { description } = this.props.data.contentfulLandingSection.description

    return (
      <Layout>
        <Helmet>
            <title>{header.text}</title>
            <meta name="description" content="Landing Page" />
        </Helmet>

        <BannerLanding title={header.text} description={desc.text} img={img.url}/>

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
                                <ShowMoreText lines={3} more='Show more' less='Show less' anchorClass='' onClick={this.executeOnClick}>
                                  <div dangerouslySetInnerHTML={{__html: edge.node.data.desc.html}}></div>
                                  <div dangerouslySetInnerHTML={{__html: edge.node.data.code.text}}></div>

                                </ShowMoreText>
                                <br></br>
                                <ul className="actions">
                                    <li><Link to={"/" + edge.node.data.path.text} className="button">Learn more</Link></li>
                                </ul>
                            </div>
                        </div>
                    </section>
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
     img{
       url
     }
     section {
            html
            text
          }
   }
 }

  allPrismicLandingsection (sort:{fields: data___order, order:ASC} filter:{tags: {eq: $slugs} }){
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
          code {
            html
            text
          }
          section {
            html
            text
          }
          path {
            text
          }
        }
      }
    }
  }


}
`
