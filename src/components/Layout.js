import React from 'react'
import Helmet from 'react-helmet'
import { StaticQuery, graphql, Link } from "gatsby"

import MobileNavBar from '../components/MobileNavBar'
import DesktopTabBar from '../components/DesktopTabBar'
import './all.sass'
import Footer from '../components/Footer'

import imgLogo from '../img/customLogoa0e8.jpg'
import imgTopDentistsLogo from '../img/5280_TopDentistsLogo_2015.jpg'
import imgAda from '../img/ada.jpg'
import imgCda from '../img/_cda_logo_sized.jpg'
import imgMdds from '../img/_mdds logo_main.jpg'
import imgWaterlase from '../img/waterlase.jpg'
import imgE4d1 from '../img/e4d1.jpg'
import imgBanner from '../img/banner-v4.jpg'

const TemplateWrapper = ({ children }) => (
  <StaticQuery
    query={graphql`
      query HeadingQuery {
          site {
            siteMetadata {
              title,
              description,
            }
          }
        }
    `}
    render={data => (
      <div>
        <Helmet>
          <html lang="en" />
          <title>{data.site.siteMetadata.title}</title>
          <meta name="description" content={data.site.siteMetadata.description} />

          <link rel="apple-touch-icon" sizes="180x180" href="/img/apple-touch-icon.png" />
	        <link rel="icon" type="image/png" href="/img/favicon-32x32.png" sizes="32x32" />
	        <link rel="icon" type="image/png" href="/img/favicon-16x16.png" sizes="16x16" />

	        <link rel="mask-icon" href="/img/safari-pinned-tab.svg" color="#ff4400" />
	        <meta name="theme-color" content="#fff" />

	        <meta property="og:type" content="business.business" />
          <meta property="og:title" content={data.site.siteMetadata.title} />
          <meta property="og:url" content="/" />
          <meta property="og:image" content="/img/og-image.jpg" />
        </Helmet>
        <section className="hero is-medium">
          <img className="image heroImage" src={imgLogo} alt="Dr. Gregory Waters, DDS"/>
        </section>
        <MobileNavBar />
        <DesktopTabBar />
        <div className="container is-fluid">
          <div className="columns">
            <div className="column is-one-quarter">
              <div className="container image is-fluid">
                <img src={imgTopDentistsLogo} alt="TopDentists"/>
              </div>
              <h4><strong>Member of:</strong></h4>
              <div className="container image is-128x128">
                <img src={imgAda} alt="Ada"/>
              </div>
              <div className="container image is-fluid">
                <img src={imgCda} alt="Cda"/>
              </div>
              <h5 className="has-text-centered">Metro Denver Dental Society</h5>
              <div className="container image is-128x128">
                <img src={imgMdds} alt="Mdds"/>
              </div>
              <div className="container image is-128x128">
                <img src={imgWaterlase} alt="waterlase"/>
              </div>
              <h5 className="has-text-centered">Same Day Crowns</h5>
              <div className="container image is-128x128">
                <img src={imgE4d1} alt="E4D1"/>
              </div>
              <div className="image is-fluid">
                <img src={imgBanner} alt="banner-v4"/>
              </div>
            </div>
            <div className="column">{children}</div>
          </div>
        </div>
      </div>
    </div>
    <Footer/>
  </div>)}/>)

export default TemplateWrapper
