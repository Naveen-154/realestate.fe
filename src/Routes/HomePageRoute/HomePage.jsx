import React from 'react'
import Searchbar from '../../Components/SearchbarComponents/Searchbar'

const HomePage = () => {
  return (
    <div className='homePage'>
      <div className='textContainer'>
        <div className='wrapper'>
          {/* <h1>Find Real Estate & Get Your Dream Place</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Similique nulla temporibus, est quod molestiae blanditiis soluta. 
            Ad ipsum rem dicta ipsam sequi aut quod tempora officiis ut,
            amet sunt alias!
          </p> */}
           <Searchbar/>
           {/* <div className='boxes'>
              <div className='box'>
                <h1>16+</h1>
                <h1>Years of Experience</h1>
              </div>
              <div className='box'>
                <h1>200</h1>
                <h1>Award Gained</h1>
              </div>
              <div className='box'>
                <h1>1200+</h1>
                <h1>Property Ready</h1>
              </div>
           </div>
           */}
        </div>
      </div>
      <div className='imgContainer'>
        {/* <img className='bgimg' src={image} alt="" /> */}
      </div>
    </div>
  )
}

export default HomePage