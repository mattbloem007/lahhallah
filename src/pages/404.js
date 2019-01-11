import React from 'react'
import Layout from '../components/layout'
import Calendar from "react-big-calendar";
import moment from "moment";

const localizer = Calendar.momentLocalizer(moment);


const NotFoundPage = () => (
  <Layout>
    <div id="main" className="alt">
        <section id="one">
            <div className="inner">
                <h1>NOT FOUND</h1>
                <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
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

export default NotFoundPage
