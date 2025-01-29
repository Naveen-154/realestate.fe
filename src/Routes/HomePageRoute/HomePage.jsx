import React, { useContext } from 'react'
import bg from '../../assets/images/bg.png'
import './HomePage.scss'
import Searchbar from '../../Components/SearchbarComponents/Searchbar'
import { AuthContext } from '../../Context/AuthContext'


const HomePage = () => {
 const{currentUser} = useContext(AuthContext)
  console.log(currentUser)
  return (
    <div className='homePage'>
      <div className='textContainer'>
        <div className='wrapper'>
          <h1 className='title'>Find Real Estate & Get Your Dream Place</h1>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Atque ad et, velit, tenetur praesentium doloremque molestiae vero eveniet, vel consequuntur consectetur. Necessitatibus velit accusamus temporibus atque voluptates, doloremque blanditiis repellendus?
          </p>
          <Searchbar />
          <div className='boxes'>
            <div className='box'>
              <h1>
                16+
              </h1>
              <h2>
                Years of experience
              </h2>
            </div>
            <div className='box'>
              <h1>
                200
              </h1>
              <h2>
                Award Gained
              </h2>
            </div>
            <div className='box'>
              <h1>
                1200+
              </h1>
              <h2>
                Property ready
              </h2>
            </div>
          </div>
        </div>

      </div>

      <div className='imgContainer'>
        <img src={bg} alt='' />
      </div>
    </div>
  )
}

export default HomePage