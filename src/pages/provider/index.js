import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../../components/Layout'

const pageTitle = 'Preferred Provider'

const ProviderPage = ({data}) => (<Layout>
  {/* Overwrite default title with pageTitle */}
  <Helmet>
    <title>{pageTitle}</title>
    <meta name="title" content={pageTitle}/>
    <meta itemprop="name" content={pageTitle}/>
    <meta property="og:title" content={pageTitle}/>
  </Helmet>
  <h3 className="is-size-3">Preferred Provider</h3>
  <section className="section">
    <p>Dr. Waters proudly participates as a preferred provider for the following Dental Health Insurance Plans:</p>
  </section>
  <section className="section">
    <ul>
      <li>Cigna Dental PPO</li>
      <li>Delta Dental PPO</li>
      <li>Delta Dental Premier</li>
      <li>Guardian DentalGuard Preferred</li>
      <li>UHC Choice Plus POS</li>
      <li>UHC Options PPO</li>
      <li>United Concordia Advantage Plus PPO</li>
      <li>United Healthcare Dental PPO</li>
    </ul>
  </section>
  <b>Payment Methods:</b>
  <section className="section">
    <p>Cash, Check, Debit, Visa, Discover, Mastercard, Care Credit</p>
    <p>Please call for more information.</p>
  </section>
</Layout>)

export default ProviderPage
