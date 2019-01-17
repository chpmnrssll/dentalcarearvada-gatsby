import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/Layout'

const pageTitle = '404 | Not Found'

const NotFoundPage = () => (
  {/* Overwrite default title with pageTitle */}
  <Helmet>
    <title>{pageTitle}</title>
    <meta name="title" content={pageTitle}/>
    <meta itemprop="name" content={pageTitle}/>
    <meta property="og:title" content={pageTitle}/>
  </Helmet>
  <Layout>
    <h3>NOT FOUND</h3>
    <p>You just hit a route that doesn&#39;t exist...</p>
  </Layout>
)

export default NotFoundPage
