import React from 'react'

import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import HomePage from './Routes/HomePageRoute/HomePage'
import ListPage from './Routes/ListPageRoute/ListPage'
import ProfilePage from './Routes/ProfilePage/ProfilePage'
import Layout from './Routes/layout/Layout'
import SinglePage from './Routes/singlePage/SinglePage'
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
          path:'/profile',
          element:<ProfilePage/>
        },
      ]
    }
  ]);
  return (
  
  <RouterProvider router={router}/>
    
  )
}

export default App