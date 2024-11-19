import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Navbar from './components/Navbar/Navbar.jsx';
import Footer from './components/Footer/Footer.jsx';
import Root from './components/Root/Root.jsx';
import About from './components/About/About.jsx';
import Home from './components/Home/Home.jsx';
import Services from './components/Services/Services.jsx';
import Contact from './components/Contact/Contact.jsx';
import Details from './components/Details/Details.jsx';
import ErrorPage from './components/Errorpage/Errorpage.jsx';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement:<ErrorPage></ErrorPage>,
    children:[
      {
        path:'/',
        element:<Home></Home>,
        loader: async () => {
          const response = await fetch("/service.json");
          if (!response.ok) {
              throw new Error("Failed to load services data");
          }
          return response.json();
      }
      },
      {
        path:'/navbar',
        element:<Navbar></Navbar>,
      },
      {
        path:'/footer',
        element:<Footer></Footer>,
      },
      {
        path:'/about',
        element:<About></About>,
      },
      {
        path:'/services',
        element:<Services></Services>,
      },
      {
        path:'/contact',
        element:<Contact></Contact>,
      },
      {
        path: "/details/:id",
        element: <Details />,
        loader: async ({ params }) => {
            const res = await fetch('/service.json');
            const data = await res.json();
            const singleData = data.find(d => d.id === parseInt(params.id)); 
            return singleData;
        }
      },
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
