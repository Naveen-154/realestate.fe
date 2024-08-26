import React from 'react'
import '../src/layout.scss'
import Navbar from './Components/NavbarComponent/Navbar'
import HomePage from './Routes/HomePageRoute/HomePage'
const App = () => {
  return (
  <React.Fragment>
    <div className='layout'>
      <div className='navbar'>
      <Navbar/>
      </div>
    <div className='content'>
    <HomePage/>
    </div>
    
    </div>
  </React.Fragment>
    
  )
}

export default App