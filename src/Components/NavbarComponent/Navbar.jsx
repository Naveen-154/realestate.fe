import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import menu from '../../assets/images/menuicon.png'
import logo from '../../assets/images/realestate.png'
import './Navbar.scss'
import { AuthContext } from '../../Context/AuthContext'
import noavatar from '../../assets/images/noavatar.jpg'
const Navbar = () => {
  const [open,setOpen]=useState(false);

  const {currentUser}=useContext(AuthContext)
 
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
            {currentUser ? (<div className='user'>
              
            <img src={currentUser.avatar||noavatar} alt="" />
            <span>{currentUser.username}</span>
            <Link to='/profile' className='profile'>
              <div className="notification">3</div>
              <span>Profile</span>
            </Link>
            </div>
            ):(
            <>
            <a href="/login">Sign in</a>
            <a href="/register" className='register'>
              sign up
              </a>
              </>
              )}
            <div className='menuIcon'>
              <img src={menu} alt=""  onClick={()=>setOpen((prev)=>!prev)}/>

            </div>
           <div className={open ? "menu active": 'menu' }>
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