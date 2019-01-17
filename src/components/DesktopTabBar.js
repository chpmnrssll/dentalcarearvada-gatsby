import React from 'react'
import {Link} from 'gatsby'

const DesktopTabBar = ({ data }) => (
  <nav className="tabs is-centered is-boxed is-hidden-touch" id="desktopTabBar">
    <ul>
      <li id="/" style={{margin: '0 .5rem'}}>
        <Link className="navbar-item" to="/">Home</Link>
      </li>
      <li id="/gallery" style={{margin: '0 .5rem'}}>
        <Link className="navbar-item" to="/gallery">Our Practice</Link>
      </li>
      <li id="/reviews" style={{margin: '0 .5rem'}}>
        <Link className="navbar-item" to="/reviews">Reviews</Link>
      </li>
      <li id="/contacts" style={{margin: '0 .5rem'}}>
        <Link className="navbar-item" to="/contacts">Appointments</Link>
      </li>
      <li id="/directions" style={{margin: '0 .5rem'}}>
        <Link className="navbar-item" to="/directions">Directions & Map</Link>
      </li>
      <li id="/Insurance--Preferred-Dental-Provider" style={{margin: '0 .5rem'}}>
        <Link className="navbar-item" to="/Insurance--Preferred-Dental-Provider">Preferred Provider</Link>
      </li>
      <li id="/careers" style={{margin: '0 .5rem'}}>
        <Link className="navbar-item" to="/careers">Forms</Link>
      </li>
    </ul>
  </nav>
)

export default DesktopTabBar
