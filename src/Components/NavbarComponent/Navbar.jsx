import React, { useState } from 'react'
import logo from '../../assets/images/realestate.png'
import menu from '../../assets/images/menuicon.png'
import './Navbar.scss'
import { Link } from 'react-router-dom'
const Navbar = () => {
  const [open,setOpen]=useState(false)
  return (
    <nav>
        <div className='left'>
            <Link className='logo'>
                <img src={logo} alt=''/>
                <span>RealityZen</span>
            </Link>
            <Link href="/">Home</Link>
            <Link href="/">About</Link>
            <Link href="/">Contact</Link>
            <Link href="/">Agents</Link>

        </div>
        <div className='right'>
            <Link href="/">Sign in</Link>
            <Link href="/" className='register'>sign up</Link>
            <div className='menuIcon'>
              <img src={menu} alt=""  onClick={()=>setOpen((prev)=>!prev)}/>

            </div>
           <div className={open ? "menu active": 'menu'}>
           <Link href="/">Home</Link>
            <Link href="/">About</Link>
            <Link href="/">Contact</Link>
            <Link href="/">Agents</Link>
            <Link href="/">Sign in</Link>
            <Link href="/">Sign up</Link>

           </div>

        </div>
    </nav>
  )
}

export default Navbar