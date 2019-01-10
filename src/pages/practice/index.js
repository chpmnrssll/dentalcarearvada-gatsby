import React from 'react'
import Layout from '../../components/Layout'

import imgDrW from '../../img/DrW.jpg'

const PracticePage = ({data}) => (<Layout>
  <h3 className="is-size-3">Our Practice</h3>
  <section className="section">
    <p>Dr. Waters is a 1999 Graduate of University of Colorado Dental School and has served patient's Dentistry needs for over ten years. He completed two years of General Practice Residency in 2000 at Denver Health Medical Center. Dr. Waters is an Arvada native, and with his wife and three children enjoy all Colorado has to offer.</p>
  </section>
  <section className="section">
    <figure className="has-text-centered">
      <img src={imgDrW} alt="Gregory B. Waters, DDS, PC"/>
      <figcaption>Gregory B. Waters, DDS, PC</figcaption>
    </figure>
  </section>
  <section className="section">
    <p>The team at Dr. Waters practice make your visits as comfortable as possible!</p>
  </section>
</Layout>)

export default PracticePage
