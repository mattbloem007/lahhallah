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



class SignUp extends React.Component {


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
                            <h1>Register For Thou Art Embodiment Training</h1>
                        </header>
                        <div className="content">
                            <p>Learn to walk the path of remembering</p>
                        </div>
                    </div>
                </section>

                <div id="main">
                  <section id="one">
                    <div className="inner">
                      <form method="post" action="#">
                          <div className="grid-wrapper">
                              <div className="col-6">
                                  <div className="mb-5"><input type="text" name="demo-name" id="demo-name" defaultValue="" placeholder="Name" /></div>
                              </div>
                              <div className="col-6">
                                  <div className="mb-5"><input type="email" name="demo-email" id="demo-email" defaultValue="" placeholder="Email" /></div>
                              </div>
                              <div className="col-12">
                                  <div className="select-wrapper mb-5">
                                      <select name="demo-category" id="demo-category">
                                          <option defaultValue="">- Category -</option>
                                          <option value="1">Manufacturing</option>
                                          <option value="1">Shipping</option>
                                          <option value="1">Administration</option>
                                          <option value="1">Human Resources</option>
                                      </select>
                                  </div>
                              </div>
                              <div className="col-4">
                                  <div className="mb-5">
                                      <input type="radio" id="demo-priority-low" name="demo-priority" defaultChecked />
                                      <label htmlFor="demo-priority-low">Low</label>
                                  </div>
                              </div>
                              <div className="col-4">
                                  <div className="mb-5">
                                      <input type="radio" id="demo-priority-normal" name="demo-priority" />
                                      <label htmlFor="demo-priority-normal">Normal</label>
                                  </div>
                              </div>
                              <div className="col-4">
                                  <div className="mb-5">
                                      <input type="radio" id="demo-priority-high" name="demo-priority" />
                                      <label htmlFor="demo-priority-high">High</label>
                                  </div>
                              </div>
                              <div className="col-6">
                                  <div className="mb-5">
                                      <input type="checkbox" id="demo-copy" name="demo-copy" />
                                      <label htmlFor="demo-copy">Email me a copy</label>
                                  </div>
                              </div>
                              <div className="col-6">
                                  <div className="mb-5">
                                      <input type="checkbox" id="demo-human" name="demo-human" defaultChecked />
                                      <label htmlFor="demo-human">I am a human</label>
                                  </div>
                              </div>
                              <div className="col-12">
                                  <div className="mb-5">
                                      <textarea name="demo-message" id="demo-message" placeholder="Enter your message" rows="6"></textarea>
                                  </div>
                              </div>
                              <div className="col-12">
                                  <ul className="actions">
                                      <li><input type="submit" value="Send Message" className="special" /></li>
                                      <li><input type="reset" value="Reset" /></li>
                                  </ul>
                              </div>
                          </div>
                      </form>
                    </div>
                  </section>
                </div>

            </Layout>
        )
    }
}

export default SignUp

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
