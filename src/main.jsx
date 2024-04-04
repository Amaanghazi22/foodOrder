import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Body from './Components/Body.jsx'
import About from './Components/About.jsx'
import Contact from './Components/Contact.jsx'
import './index.css'
import RestaurantsMenu from './Components/RestaurantMenu.jsx'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Cart from './Components/Cart.jsx'

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children: [
      {
        path:"/",
        element: <Body/>
      },
      {
        path:"/about",
        element: <About/>
      },
      {
        path:"/contact",
        element: <Contact/>
      },
      {
        path: "/restaurants/:resId",
        element: <RestaurantsMenu/>
      },
      {
        path: "/cart",
        element: <Cart/>
      }
    ],
    errorElement: <Error/>
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={appRouter}/>
)
