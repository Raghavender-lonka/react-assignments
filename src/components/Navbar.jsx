import React from "react"
import { NavLink } from "react-router-dom"
import "./Navbar.css"

function Navbar() {
  return (
    <div className="navbar">
      <NavLink to="/" className="main-div1">
        Home
      </NavLink>
      <NavLink to="/students" className="main-div1">
        Students
      </NavLink>
      <NavLink to="/contact-us" className="main-div1">
        Contact Us
      </NavLink>
    </div>
  )
}

export default Navbar
