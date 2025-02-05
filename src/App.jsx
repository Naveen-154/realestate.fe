import React from 'react'

import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import HomePage from './Routes/HomePageRoute/HomePage'
import ListPage from './Routes/ListPageRoute/ListPage'
import LoginPage from './Routes/LoginPage/LoginPage'
import ProfilePage from './Routes/ProfilePage/ProfilePage'
import RegisterPage from './Routes/RegisterPage/RegisterPage'

import SinglePage from './Routes/singlePage/SinglePage'
import { Layout, RequireAuth } from './Routes/layout/Layout'
import ProfileUpdatePage from './Routes/profileUpdatePage/profileUpdatePage'
const App = () => {
  const router = createBrowserRouter([
    {
      path:"/",
      element:<Layout/>,
      children:[
        {
          path:'/',
          element:<HomePage/>
        },
        {
          path:'/list',
          element:<ListPage/>
        },
        {
          path:'/:id',
          element:<SinglePage/>
        },
       
        {
          path:'/login',
          element:<LoginPage/>
        },
        {
          path:'/register',
          element:<RegisterPage/>
        }
       
      ]
    },
    {
      path:"/",
      element:<RequireAuth/>,
      children:[
        {
          path:'/profile',
          element:<ProfilePage/>
        },
        {
          path:'/profile/update',
          element:<ProfileUpdatePage/>
        },
      ],
    },
  ]);
  return (
  
  <RouterProvider router={router}/>
    
  )
}

export default App