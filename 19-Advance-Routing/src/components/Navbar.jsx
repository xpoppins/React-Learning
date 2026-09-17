import React from 'react'
import {Link} from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
      <header className="header">
        <nav className="navbar">
          <Link to="/" className="navLinks">Home</Link>
          <Link to="/product" className="navLinks">Product</Link>
          <Link to="/about" className="navLinks">About</Link>
          <Link to="/courses" className="navLinks">Courses</Link>
          <Link to="/contact" className="navLinks">Contact</Link>
        </nav>
      </header>
    </div>
  )
}

export default Navbar
