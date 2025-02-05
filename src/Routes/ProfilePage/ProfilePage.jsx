import React, { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Chat from '../../Components/Chat/Chat'
import List from '../../Components/List/List'
import { AuthContext } from '../../Context/AuthContext'
import noavatar from '../../assets/images/noavatar.jpg'
import apiRequest from '../../library/apiRequest'
import "../ProfilePage/ProfilePage.scss"

const ProfilePage = () => {
  const {updateUser,currentUser} = useContext(AuthContext)
  const navigate =useNavigate()
 
  const handleLogout = async()=>{ 
    try{
 await apiRequest.post('/auth/logout')
updateUser(null)
navigate("/")
    }catch(err){
      console.log(err)

    }
  }
  return (
    
    <div className="profilePage">
      <div className="details">
        <div className="wrapper">
          <div className="title">
            <h1>User Information</h1>
            <Link to='/profile/update'>
            <button>Update Profile</button> 
            </Link>
            
          </div>
          <div className="info">
            <span>
              Avatar: <img src={currentUser.avatar || noavatar} alt="" />

            </span>
            <span>USer Name: <b>{currentUser.username}</b></span>
            <span>E-mail:<b>{currentUser.email}</b></span>
            <button onClick={handleLogout}>Logout</button>
          </div>
          <div className="title">
            <h1>
              My List
            </h1>
            <button>Create New Post</button>
          </div>
          <List>

            <div className="title">
              <h1>Save List</h1>
            </div>
          </List>
        </div>
      </div>
      <div className="chatContainer">
        <div className="wrapper">
          <Chat/>
        </div>
      </div>
    </div>
    )
  
}

export default ProfilePage