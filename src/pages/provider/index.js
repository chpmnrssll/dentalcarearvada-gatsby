import React from 'react'
import Layout from '../../components/Layout'

const ProviderPage = ({data}) => (
<Layout>
  <section className="section">
    <h3 className="is-size-3">Preferred Provider</h3>
  </section>
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
</Layout>
  )

export default ProviderPage
