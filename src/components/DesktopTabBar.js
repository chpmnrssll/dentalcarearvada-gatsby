import React from 'react'
import {Link} from 'gatsby'

const DesktopTabBar = class extends React.Component {
  render() {
    return (<nav className="tabs is-centered is-boxed is-hidden-touch" id="desktopNavMenu">
      <ul>
        <li className="is-active">
          <Link className="navbar-item" to="/">Home</Link>
        </li>
        <li>
          <Link className="navbar-item" to="/gallery">Our Practice</Link>
        </li>
        <li>
          <Link className="navbar-item" to="/reviews">Reviews</Link>
        </li>
        <li>
          <Link className="navbar-item" to="/contacts">Appointments</Link>
        </li>
        <li>
          <Link className="navbar-item" to="/directions">Directions & Map</Link>
        </li>
        <li>
          <Link className="navbar-item" to="/Insurance--Preferred-Dental-Provider">Preferred Provider</Link>
        </li>
        <li>
          <Link className="navbar-item" to="/careers">Forms</Link>
        </li>
        <li>
          <Link className="navbar-item" to="/events">Dental Info</Link>
        </li>
        <li>
          <Link className="navbar-item" to="/system/app/pages/sitemap/hierarchy">Sitemap</Link>
        </li>
      </ul>
    </nav>)
  }
}

export default DesktopTabBar
