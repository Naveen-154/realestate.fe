import React from 'react'
import './NavbarComponent/Navbar.css'
import logo from '../assets/images/realestate.png'

const Navbar = () => {
  return (
    <nav>
        <div className='left'>
            <a className='logo'>
                <img src={logo} alt=''/>
                <span>LamaEstate</span>
            </a>
            <a href="/">Home</a>
            <a href="/">About</a>
            <a href="/">Contact</a>
            <a href="/">Agents</a>

        </div>
        <div className='right'>
            <a href="/">Sign in</a>
            <a href="/" className='register'>sign up</a>
            <div>
                
            </div>

        </div>
    </nav>
  )
}

export default Navbar