import React from 'react'
import Layout from '../../components/Layout'

const DirectionsPage = ({data}) => (<Layout>
  <h3 className="is-size-3">Directions & Map</h3>
  <section className="section">
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3065.233252084108!2d-105.09856298520738!3d39.80175940073485!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x876b8626d5ea6145%3A0xbcee241b5d70ebdc!2s8850+Ralston+Rd+%23104%2C+Arvada%2C+CO+80002!5e0!3m2!1sen!2sus!4v1547009498377" width="100%" height="480" frameBorder="0" allowFullScreen title="DirectionsMap"></iframe>
  </section>
</Layout>)

export default DirectionsPage
