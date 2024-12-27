import React from 'react'
import './navbar.css'
function Navbar() {

  return (
    <header className='header'>
        <div className='logo'> </div>
        <nav className='navbar'>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">Service</a></li>
            <li><a href="#">Product</a></li>
            <li><a href="#">Contact Us</a></li>
            <li><a href="#">About Us</a></li>
          </ul>
        </nav>
        <div className='nav-icon'>
          <span id='menu' className="material-icons">menu</span>
          <span id='close' className="material-icons">close</span>
        </div>
      </header>
  )
}

export default Navbar