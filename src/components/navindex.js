import React from 'react';
import './navbar.css'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="container">
        <div className="nav-elements">
          <ul>
            <li>
              <NavLink to="/">Marvel</NavLink>
            </li>
            <li>
              <NavLink to="/UV">UV/UVOD</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar