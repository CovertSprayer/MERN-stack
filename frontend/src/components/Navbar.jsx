import React from 'react'
import '../App.scss'
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <>
      <nav class="navbar">
        <NavLink class="navbar-brand" to="/">LOGO</NavLink>

        <div id="navbarLinks">
          <ul class="navbar-nav ">
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/about">About</NavLink>
            </li>
            <li>
              <NavLink to="/login">LogIn</NavLink>
            </li>
            <li>
              <NavLink to="/contact">Contact</NavLink>
            </li>
            <li>
              <NavLink to="/signup">Register</NavLink>
            </li>
          </ul>
        </div>
      </nav>

    </>
  )
}

export default Navbar