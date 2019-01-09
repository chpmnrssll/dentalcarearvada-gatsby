import React from 'react'

import imgTopDentistsLogo from '../img/5280_TopDentistsLogo_2015.jpg'
import imgAda from '../img/ada.jpg'
import imgCda from '../img/_cda_logo_sized.jpg'
import imgMdds from '../img/_mdds logo_main.jpg'
import imgWaterlase from '../img/waterlase.jpg'
import imgE4d1 from '../img/e4d1.jpg'
import imgBanner from '../img/banner-v4.jpg'

const SideBar = ({data}) => (<div className="column is-one-quarter">
  <section className="section has-text-centered">
    <div className="image is-3x4">
      <img src={imgTopDentistsLogo} alt="TopDentists"/>
    </div>
  </section>
  <section className="section has-text-centered">
    <h4><strong>Member of:</strong></h4>
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
)

export default SideBar
