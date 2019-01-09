import React from 'react'
import {Link} from 'gatsby'

const DesktopTabBar = ({ data }) => (
  <nav className="tabs is-centered is-boxed is-hidden-touch" id="desktopNavMenu">
    <ul>
      <li className="is-active">
        <Link className="navbar-item" to="/">Home</Link>
      </li>
      <li>
        <Link className="navbar-item" to="/practice">Our Practice</Link>
      </li>
      <li>
        <Link className="navbar-item" to="/reviews">Reviews</Link>
      </li>
      <li>
        <Link className="navbar-item" to="/appointments">Appointments</Link>
      </li>
      <li>
        <Link className="navbar-item" to="/directions">Directions & Map</Link>
      </li>
      <li>
        <Link className="navbar-item" to="/provider">Preferred Provider</Link>
      </li>
      <li>
        <Link className="navbar-item" to="/forms">Forms</Link>
      </li>
    </ul>
  </nav>
)

export default DesktopTabBar
