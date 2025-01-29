import React, { useContext, useEffect } from 'react'
import '../../Routes/layout/layout.scss'
import Navbar from'../../Components/NavbarComponent/Navbar'
import HomePage from '../HomePageRoute/HomePage'
import { Navigate, Outlet } from 'react-router-dom'
import { AuthContext } from '../../Context/AuthContext'
 export const Layout = () => {
  return (
   
    <div className='layout'>
      <div className='navbar'>
      <Navbar/>
      </div>
    <div className='content'>
    <Outlet/>
    </div>
    
    </div>
  
  )
  }
 export const RequireAuth = () => {
    const {currentUser}= useContext(AuthContext)

    
  return !currentUser ? (
   
  <Navigate to ="/login"/>
   ) : (
    <div className='layout'>
      <div className='navbar'>
      <Navbar/>
      </div>
    <div className='content'>
    <Outlet/>
    </div>
    
    </div>
    )
   
  
  
  }

