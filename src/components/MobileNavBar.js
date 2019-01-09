import React from 'react'
import { Link } from 'gatsby'

const MobileNavBar = class extends React.Component {

  componentDidMount() {
    // Get all "navbar-burger" elements
    const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);
    // Check if there are any navbar burgers
    if ($navbarBurgers.length > 0) {

      // Add a click event on each of them
      $navbarBurgers.forEach(el => {
        el.addEventListener('click', () => {

          // Get the target from the "data-target" attribute
          const target = el.dataset.target;
          const $target = document.getElementById(target);

          // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
          el.classList.toggle('is-active');
          $target.classList.toggle('is-active');
        });
      });
    }
  }

  render() {
    return (<nav className="navbar is-hidden-desktop" role="navigation" aria-label="main-navigation">
      <div className="navbar-brand">
        {/* Hamburger menu */}
        <div className="navbar-burger burger" data-target="mobileNavMenu">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
      <div className="navbar-menu has-text-centered" id="mobileNavMenu">
        <div className="navbar-start">
          <Link className="navbar-item" to="/">Home</Link>
          <Link className="navbar-item" to="/practice">Our Practice</Link>
          <Link className="navbar-item" to="/reviews">Reviews</Link>
          <Link className="navbar-item" to="/appointments">Appointments</Link>
          <Link className="navbar-item" to="/directions">Directions & Map</Link>
          <Link className="navbar-item" to="/provider">Preferred Provider</Link>
          <Link className="navbar-item" to="/forms">Forms</Link>
        </div>
      </div>
    </nav>)
  }
}

export default MobileNavBar
