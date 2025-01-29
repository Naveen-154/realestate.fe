import React, { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import bg from '../../assets/images/bg.png'
import apiRequest from '../../library/apiRequest'
import './LoginPage.scss'
import { AuthContext } from '../../Context/AuthContext'

const LoginPage = () => {
  const [error,setError]=useState("")
  const [isLoading,setIsLoading]=useState(false);
  const {updateUser}= useContext(AuthContext)
  
    const navigate = useNavigate()
    const handleSubmit =async(e)=>{
        e.preventDefault()
        setError("")
        setIsLoading(true);
        const formData = new FormData(e.target);
        const username = formData.get("username")
       
        const password = formData.get("password")
        try{
            const res = await apiRequest.post("/auth/login",{username,password})
            
            updateUser(res.data)

            navigate('/')

        }catch(err){
           
            setError(err.response.data.message)
        } finally{
          setIsLoading(false);
        }
        

    }
  return (
    <div className="login">
        <div className="formContainer">
            <form onSubmit={handleSubmit} >
                <h1>Welcome back</h1>
                <input type="text" required minLength={3} maxLength={20} name='username' placeholder='Username' />
                <input type="password" required  name='password' placeholder='Password' />
                <button disabled={isLoading} >Login</button>
                {error && <span>{error}</span>}
                
                <Link to="/register">{"Don't"} you have an account</Link>
            </form>
        </div>
        <div className="imgContainer">
            <img src={bg} alt="" />
        </div>
    </div>
  )
}

export default LoginPage