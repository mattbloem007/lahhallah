import React from 'react'
import { Link, graphql } from 'gatsby'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import Banner from '../components/Banner'
import Calendar from "react-big-calendar";
import moment from "moment";
import * as emailjs from 'emailjs-com'
import toastr from 'toastr'



import pic01 from '../assets/images/pic01.jpg'
import pic02 from '../assets/images/pic02.jpg'
import pic03 from '../assets/images/pic03.jpg'
import pic04 from '../assets/images/pic04.jpg'
import pic05 from '../assets/images/pic05.jpg'
import pic06 from '../assets/images/pic06.jpg'

const localizer = Calendar.momentLocalizer(moment);



class consultationBookings extends React.Component {

  constructor() {
    super();
    this.state = {
      name: "",
      skype_name: "",
      email: "",
      message: "",
    }
  }

  handleEmail = () => {

    // if (!this.validateMail()) {
    //   return
    // }

    var template_params = {
     "reply_to": this.state.email,
     "from_name": this.state.name,
     "skype_name": this.state.skype_name,
     "to_name": "Lah-Hallah",
     "message_html": this.state.message
    }

    var service_id = "gmail";
    var template_id = " template_m9OkeQLI_clone";
    emailjs.send(service_id,template_id,template_params, "user_wLPGPl2w2ETFdTUDNZQP2")
    .then(function(response) {
      toastr.success("Message Sent Successfully")
    }, function (err) {
      toastr.error(err)
      console.log(err)
    })

    this.setState({
      name: "",
      email: "",
      message: ""
    })
  }


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
                            <h1>Book for a consultation with Lah</h1>
                        </header>
                    </div>
                </section>

                <div id="main">
                  <section id="one">
                    <div className="inner">
                      <form method="post" action="#">
                          <div className="grid-wrapper">
                              <div className="col-6">
                                  <div className="mb-5"><input type="text" name="demo-name" id="demo-name" defaultValue="" placeholder="Name" onChange={(evt) => this.setState({name: evt.target.value})}/></div>
                              </div>
                              <div className="col-6">
                                  <div className="mb-5"><input type="text" name="skype-name" id="demo-name" defaultValue="" placeholder="Skype Name"onChange={(evt) => this.setState({skype_name: evt.target.value})} /></div>
                              </div>
                              <div className="col-6">
                                  <div className="mb-5"><input type="email" name="demo-email" id="demo-email" defaultValue="" placeholder="Email" onChange={(evt) => this.setState({email: evt.target.value})}/></div>
                              </div>
                              <div className="col-12">
                                  <div className="mb-5">
                                      <textarea name="demo-message" id="demo-message" placeholder="Enter your issue/topic here" rows="6" onChange={(evt) => this.setState({message: evt.target.value})}></textarea>
                                  </div>
                              </div>
                              <div className="col-12">
                                  <ul className="actions">
                                      <li><input value="Book Consultation" className="special" onClick={this.handleEmail}/></li>
                                      <li><input type="reset" value="Reset" /></li>
                                  </ul>
                              </div>
                          </div>
                      </form>
                    </div>
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

export default consultationBookings

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
