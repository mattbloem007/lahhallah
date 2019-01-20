import React from 'react'
import { StaticQuery, graphql} from 'gatsby'

const BannerLanding = (props) => {
  return (
        <section id="banner" className="style2" style={{backgroundImage: "url(" + props.img + ")"}}>
            <div className="inner">
                <header className="major">
                    <h1>{props.title}</h1>
                </header>
                <div className="content">
                    <p>{props.description}</p>
                </div>
            </div>
        </section>
      )
}

export default BannerLanding
