import React from 'react'
import '../../Routes/layout/layout.scss'
import Navbar from'../../Components/NavbarComponent/Navbar'
import HomePage from '../HomePageRoute/HomePage'
import { Outlet } from 'react-router-dom'
const Layout = () => {
  return (
    <React.Fragment>
    <div className='layout'>
      <div className='navbar'>
      <Navbar/>
      </div>
    <div className='content'>
    <Outlet/>
    </div>
    
    </div>
  </React.Fragment>
  )
  }

export default Layout