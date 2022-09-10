import React from 'react'
import { Link } from 'react-router-dom'
import "./Navbar.css"

const Navbar = () => {
  return (
    <div className="mukul">
        <Link to="/login">Login</Link>
        <Link to="/">Homepage</Link>
        <Link to="/product/:id">Product</Link>
        <Link to="/product/:id/edit">Edit Product</Link>
    
    </div>
  )
}

export default Navbar