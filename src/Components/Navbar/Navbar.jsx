import React from 'react'
import { Link } from 'react-router-dom'
import "./Navbar.css"

const Navbar = () => {
  return (
    <div className="mukul">
        <Link to="/">Login</Link>
        <Link to="/Homepage">Homepage</Link>
        <Link to="/product/:id/edit">Edit Product</Link>
        <Link to="/">Logout</Link>
    
    </div>
  )
}

export default Navbar