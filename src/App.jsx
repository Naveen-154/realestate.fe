import React from 'react'

import HomePage from './Routes/HomePageRoute/HomePage'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import ListPage from './Routes/ListPageRoute/ListPage'
import SinglePage from './Routes/singlePage/SinglePage'
import Layout from './Routes/layout/Layout'
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
      ]
    }
  ]);
  return (
  
  <RouterProvider router={router}/>
    
  )
}

export default App