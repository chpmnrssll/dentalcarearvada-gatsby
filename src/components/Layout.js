import React from 'react'
import Helmet from 'react-helmet'
import {StaticQuery, graphql} from "gatsby"

import './all.sass'
import MobileNavBar from '../components/MobileNavBar'
import DesktopTabBar from '../components/DesktopTabBar'
import SideBar from '../components/SideBar'
import Footer from '../components/Footer'

import imgLogo from '../img/customLogoa0e8_retouched.jpg'
import imgFavicon from '../img/favicon.png'
import imgSmileMore from '../img/smile_more.jpg'

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
      <meta property="og:url" content="/"/>
      <meta property="og:type" content="business.business"/>
      <meta name="theme-color" content="#fff"/>

      <title>{data.site.siteMetadata.title}</title>
      <meta name="title" content={data.site.siteMetadata.title}/>
      <meta itemprop="name" content={data.site.siteMetadata.title}/>
      <meta property="og:title" content={data.site.siteMetadata.title}/>

      <meta name="description" content={data.site.siteMetadata.description}/>
      <meta itemprop="description" content={data.site.siteMetadata.description}/>
      <meta property="og:description" content={data.site.siteMetadata.description}/>

      <meta itemprop="image" content={imgSmileMore}/>
      <meta property="og:image" content={imgSmileMore}/>

      <link rel="shortcut icon" type="image/x-icon" href={imgFavicon}/>
      <link rel="apple-touch-icon" sizes="180x180" href={imgFavicon}/>
      <link rel="icon" type="image/png" href={imgFavicon} sizes="32x32"/>
      <link rel="icon" type="image/png" href={imgFavicon} sizes="16x16"/>
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
