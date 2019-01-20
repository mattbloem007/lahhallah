import React from 'react'
import { StaticQuery, graphql} from 'gatsby'


const Banner = ({data}) => {
  return (
    <StaticQuery
      query={
        graphql `
        {
          prismicBanner{
            data{
              header {
                html
                text
              }
              description {
                html
                text
              }
              img {
                url
              }
            }
          }
        }
        `}

        render={data => (
          <section id="banner" className="major" style={{backgroundImage: "url(" + data.prismicBanner.data.img.url + ")"}}>
              <div className="inner">
                  <header className="major">
                      <h1>{data.prismicBanner.data.header.text}</h1>
                  </header>
                  <div className="content">
                      <p>{data.prismicBanner.data.description.text}</p>
{          /**            <ul className="actions">
                          <li><a href="#one" className="button next scrolly">Get Started</a></li>
                      </ul> */}
                  </div>
              </div>
          </section>
        )}

      />
  )


}

export default Banner
