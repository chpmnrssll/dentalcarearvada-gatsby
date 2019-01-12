import React from 'react'
import {Link} from 'gatsby'

const DesktopTabBar = ({ data }) => (
  <nav className="tabs is-centered is-boxed is-hidden-touch" id="desktopTabBar">
    <ul>
      <li id="/" style={{margin: '0 .5rem'}}>
        <Link className="navbar-item" to="/">Home</Link>
      </li>
      <li id="/practice" style={{margin: '0 .5rem'}}>
        <Link className="navbar-item" to="/practice">Our Practice</Link>
      </li>
      <li id="/reviews" style={{margin: '0 .5rem'}}>
        <Link className="navbar-item" to="/reviews">Reviews</Link>
      </li>
      <li id="/appointments" style={{margin: '0 .5rem'}}>
        <Link className="navbar-item" to="/appointments">Appointments</Link>
      </li>
      <li id="/directions" style={{margin: '0 .5rem'}}>
        <Link className="navbar-item" to="/directions">Directions & Map</Link>
      </li>
      <li id="/provider" style={{margin: '0 .5rem'}}>
        <Link className="navbar-item" to="/provider">Preferred Provider</Link>
      </li>
      <li id="/forms" style={{margin: '0 .5rem'}}>
        <Link className="navbar-item" to="/forms">Forms</Link>
      </li>
    </ul>
  </nav>
)

export default DesktopTabBar
