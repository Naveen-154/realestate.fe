import React, { useState } from 'react'
import logo from '../../assets/images/realestate.png'
import menu from '../../assets/images/menuicon.png'
import './Navbar.scss'
const Navbar = () => {
  const [open,setOpen]=useState(false)
  return (
    <nav>
        <div className='left'>
            <a className='logo'>
                <img src={logo} alt=''/>
                <span>RealityZen</span>
            </a>
            <a href="/">Home</a>
            <a href="/">About</a>
            <a href="/">Contact</a>
            <a href="/">Agents</a>

        </div>
        <div className='right'>
            <a href="/">Sign in</a>
            <a href="/" className='register'>sign up</a>
            <div className='menuIcon'>
              <img src={menu} alt=""  onClick={()=>setOpen((prev)=>!prev)}/>

            </div>
           <div className={open ? "menu active": 'menu'}>
           <a href="/">Home</a>
            <a href="/">About</a>
            <a href="/">Contact</a>
            <a href="/">Agents</a>
            <a href="/">Sign in</a>
            <a href="/">Sign up</a>

           </div>

        </div>
    </nav>
  )
}

export default Navbar