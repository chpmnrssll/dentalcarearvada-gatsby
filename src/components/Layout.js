import React from 'react'
import Helmet from 'react-helmet'
import {StaticQuery, graphql} from "gatsby"

import './all.sass'
import MobileNavBar from '../components/MobileNavBar'
import DesktopTabBar from '../components/DesktopTabBar'
import Footer from '../components/Footer'

import imgLogo from '../img/customLogoa0e8.jpg'
import imgTopDentistsLogo from '../img/5280_TopDentistsLogo_2015.jpg'
import imgAda from '../img/ada.jpg'
import imgCda from '../img/_cda_logo_sized.jpg'
import imgMdds from '../img/_mdds logo_main.jpg'
import imgWaterlase from '../img/waterlase.jpg'
import imgE4d1 from '../img/e4d1.jpg'
import imgBanner from '../img/banner-v4.jpg'

const TemplateWrapper = ({children}) => (<StaticQuery query={graphql `
    query HeadingQuery {
        site {
          siteMetadata {
            title,
            description,
          }
        }
      }
  `} render={data => (<div>
    <Helmet>
      <html lang="en"/>
      <title>{data.site.siteMetadata.title}</title>
      <link rel="apple-touch-icon" sizes="180x180" href="/img/apple-touch-icon.png"/>
      <link rel="icon" type="image/png" href="/img/favicon-32x32.png" sizes="32x32"/>
      <link rel="icon" type="image/png" href="/img/favicon-16x16.png" sizes="16x16"/>
      <link rel="mask-icon" href="/img/safari-pinned-tab.svg" color="#ff4400"/>

      <meta name="theme-color" content="#fff"/>
      <meta name="description" content={data.site.siteMetadata.description}/>
      <meta property="og:url" content="/"/>
      <meta property="og:type" content="business.business"/>
      <meta property="og:image" content="/img/og-image.jpg"/>
      <meta property="og:title" content={data.site.siteMetadata.title}/>
    </Helmet>
    <section className="hero is-medium">
      <img className="image heroImage" src={imgLogo} alt="Dr. Gregory Waters, DDS"/>
    </section>
    <MobileNavBar/>
    <DesktopTabBar/>
    <div className="container is-fluid">
      <div className="columns">
        <div className="column is-one-quarter">
          <section className="section has-text-centered">
            <div className="image is-3x4">
              <img src={imgTopDentistsLogo} alt="TopDentists"/>
            </div>
          </section>
          <section className="section has-text-centered">
            <h4>
              <strong>Member of:</strong>
            </h4>
            <div className="image is-3x2">
              <img src={imgAda} alt="Ada"/>
            </div>
            <div className="image is-3x1">
              <img src={imgCda} alt="Cda"/>
            </div>
            <div className="image is-1x1">
              <p>Metro Denver Dental Society</p>
              <img src={imgMdds} alt="Mdds"/>
            </div>
            <div className="image is-3x2">
              <img src={imgWaterlase} alt="waterlase"/>
            </div>
          </section>
          <section className="section has-text-centered">
            <div className="image is-3x2">
              <p>Same Day Crowns</p>
              <img src={imgE4d1} alt="E4D1"/>
            </div>
            <div className="image is-16x9">
              <img src={imgBanner} alt="banner-v4"/>
            </div>
          </section>
        </div>
        <div className="column">
          {children}
        </div>
      </div>
    </div>
    <Footer/>
  </div>)}/>)

export default TemplateWrapper
