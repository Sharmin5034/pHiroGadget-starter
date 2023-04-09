import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import App from './App'
import Home from './components/Home'
import About from './components/About'
import ErrorPage from './components/ErrorPage'
import Shop from './components/Shop'

const router = createBrowserRouter([{
    path:'/',
    element:<App/>,
    errorElement:<ErrorPage/>,
    children:[
        {
            path:'/',
            element:<Home/>
        },
        {
            path:'about',
            element:<About/>
        },
        {
            path:'shop',
            element:<Shop/>,
            loader:()=>fetch('products.json'),
        }
    ]
}])

ReactDOM.createRoot(document.getElementById('root')).render(<RouterProvider router={router} />)
