import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/Layout'

const NotFoundPage = () => (
  {/* Overwrite default title with 404 */}
  <Helmet>
    <title>404</title>
    <meta name="title" content="404"/>
    <meta itemprop="name" content="404"/>
    <meta property="og:title" content="404"/>
  </Helmet>
  <Layout>
    <h3>NOT FOUND</h3>
    <p>You just hit a route that doesn&#39;t exist...</p>
  </Layout>
)

export default NotFoundPage
