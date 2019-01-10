import React from 'react'
import Helmet from 'react-helmet'
import {StaticQuery, graphql} from "gatsby"

import './all.sass'
import MobileNavBar from '../components/MobileNavBar'
import DesktopTabBar from '../components/DesktopTabBar'
import SideBar from '../components/SideBar'
import Footer from '../components/Footer'

import imgLogo from '../img/customLogoa0e8.jpg'

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
      <link rel="icon" type="image/png" href="/img/favicon.png" sizes="32x32"/>
      <link rel="icon" type="image/png" href="/img/favicon.png" sizes="16x16"/>
      <link rel="mask-icon" href="/img/safari-pinned-tab.svg" color="#ff4400"/>

      <meta name="theme-color" content="#fff"/>
      <meta name="description" content={data.site.siteMetadata.description}/>
      <meta property="og:url" content="/"/>
      <meta property="og:type" content="business.business"/>
      {/*<meta property="og:image" content="/img/og-image.jpg"/>*/}
      <meta property="og:title" content={data.site.siteMetadata.title}/>
    </Helmet>
    <section className="hero is-medium">
      <img className="image heroImage" src={imgLogo} alt="Dr. Gregory Waters, DDS"/>
    </section>
    <MobileNavBar/>
    <DesktopTabBar/>
    <div className="container is-fluid">
      <div className="columns is-flex" id="Columns">
        <div className="column is-one-fifth">
          <SideBar/>
        </div>
        <div className="column">
          {children}
        </div>
      </div>
    </div>
    <Footer/>
  </div>)}/>)

export default TemplateWrapper
