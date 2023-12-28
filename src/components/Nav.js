//\\ بسم الله الرحمن الرحيم //\\

// In Nav.js import NavLink from react-router-dom.

// Replace <a> tags with <NavLink> tags from react
// router dom and replace href with to so that Home
// shows you the Home.js component and Trips takes
// you to TripsList component.

// Add a style that if the page is active the link
// becomes underlined.
//
import React from "react";
// In Nav.js import NavLink from react-router-dom.
import { NavLink } from "react-router-dom";

function Nav() {
  return (
    <nav
      className="navbar navbar-expand-lg bg-secondary text-uppercase "
      id="mainNav"
    >
      <div className="container">
        <NavLink className="navbar-brand" to="#">
          Hike
        </NavLink>

        <div className="collapse navbar-collapse" id="navbarResponsive">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item mx-0 mx-lg-1">
              <NavLink className="nav-link py-3 px-0 px-lg-3 rounded" to="/">
                Home
              </NavLink>
            </li>
            <li className="nav-item mx-0 mx-lg-1">
              <NavLink
                className="nav-link py-3 px-0 px-lg-3 rounded"
                to="/tripslist"
              >
                Trips
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
