import React from 'react'
import {StaticQuery, graphql} from 'gatsby'
import * as emailjs from 'emailjs-com'

class Contact extends React.Component {

  constructor() {
    super();
    this.state = {
      name: "",
      email: "",
      message: ""
    }
  }

  handleEmail = () => {
    var template_params = {
     "reply_to": this.state.email,
     "from_name": this.state.name,
     "to_name": "Lah-Hallah",
     "message_html": this.state.message
    }

    var service_id = "gmail";
    var template_id = "template_m9OkeQLI";
    emailjs.send(service_id,template_id,template_params, "user_wLPGPl2w2ETFdTUDNZQP2");
    this.setState({
      name: "",
      email: "",
      message: ""
    })
  }

  render() {
    return (
      <StaticQuery
        query={
          graphql`
          query {
            prismicContact {
              data {
                email {
                  text
                }
                phone {
                  text
                }
                address {
                  text
                }
              }

            }
          }`
        }

        render={data=> (
          <section id="contact">
              <div className="inner">
                  <section>
                          <div className="field half first">
                              <label htmlFor="name">Name</label>
                              <input type="text" name="name" id="name" onChange={(evt) => this.setState({name: evt.target.value})} />
                          </div>
                          <div className="field half">
                              <label htmlFor="email">Email</label>
                              <input type="text" name="email" id="email" onChange={(evt) => this.setState({email: evt.target.value})}/>
                          </div>
                          <div className="field">
                              <label htmlFor="message">Message</label>
                              <textarea name="message" id="message" rows="6" onChange={(evt) => this.setState({message: evt.target.value})}></textarea>
                          </div>
                          <ul className="actions">
                              <li><button className="special" onClick={this.handleEmail} >Send Message</button></li>
                              <li><input type="reset" value="Clear" /></li>
                          </ul>
                  </section>
                  <section className="split">
                      <section>
                          <div className="contact-method">
                              <span className="icon alt fa-envelope"></span>
                              <h3>Email</h3>
                              <a href="#">{data.prismicContact.data.email.text}</a>
                          </div>
                      </section>
                      <section>
                          <div className="contact-method">
                              <span className="icon alt fa-phone"></span>
                              <h3>Phone</h3>
                              <span>{data.prismicContact.data.phone.text}</span>
                          </div>
                      </section>
                      <section>
                          <div className="contact-method">
                              <span className="icon alt fa-home"></span>
                              <h3>Address</h3>
                              <span>{data.prismicContact.data.address.text}</span>
                          </div>
                      </section>
                  </section>
              </div>
          </section>
        )}
        />

    )
  }

}

export default Contact
