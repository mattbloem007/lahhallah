import React from 'react'
import { StaticQuery, graphql} from 'gatsby'


const Banner = ({data}) => {
  return (
    <StaticQuery
      query={
        graphql `
        query {
          contentfulBanner {
            header
            description
          }
        }
        `}

        render={data => (
          <section id="banner" className="major">
              <div className="inner">
                  <header className="major">
                      <h1>{data.contentfulBanner.header}</h1>
                  </header>
                  <div className="content">
                      <p>{data.contentfulBanner.description}</p>
                      <ul className="actions">
                          <li><a href="#one" className="button next scrolly">Get Started</a></li>
                      </ul>
                  </div>
              </div>
          </section>
        )}

      />
  )


}

export default Banner
