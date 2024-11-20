import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Navbar from './components/Navbar/Navbar.jsx';
import Footer from './components/Footer/Footer.jsx';
import Root from './components/Root/Root.jsx';
import About from './components/About/About.jsx';
import Home from './components/Home/Home.jsx';

import Contact from './components/Contact/Contact.jsx';

import ErrorPage from './components/Errorpage/Errorpage.jsx';
import Authprovider from './components/Authprovider/Authprovider.jsx';
import Login from './components/Login/Login.jsx';
import Register from './components/Register/Register.jsx';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; 
import MyProfile from './components/MyProfile/MyProfile.jsx';
import Details from './components/Details/Details.jsx';
import Banner from './components/Banner/Banner.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
        loader: async () => {
          try {
            const [serviceResponse, consultantResponse, clientResponse] = await Promise.all([
              fetch("/service.json"),
              fetch("/consultant.json"),
              fetch("/client.json"),
            ]);

            if (!serviceResponse.ok || !consultantResponse.ok || !clientResponse.ok) {
              throw new Error("Failed to load one or more resources");
            }

            const [servicesData, consultantsData, clientsData] = await Promise.all([
              serviceResponse.json(),
              consultantResponse.json(),
              clientResponse.json(),
            ]);

            return { services: servicesData, consultants: consultantsData, clients: clientsData };
          } catch (error) {
            throw new Error(`Data fetch error: ${error.message}`);
          }
        }
      },
      { path: '/navbar', element: <Navbar></Navbar> },
      { path: '/footer', element: <Footer></Footer> },
      { path: '/about', element: <About></About> },
      { path: '/banner', element: <Banner></Banner> },
     
      { path: '/my-profile', element: <MyProfile></MyProfile> },
      { path: '/contact', element: <Contact></Contact> },
      { path: '/login', element: <Login></Login> },
      { path: '/register', element: <Register></Register> },

      {
        path: "/details/:id",
        element: <Details></Details>,
        loader:async({params})=>{
          const res =await fetch('../public/service.json');
          const data =await res.json();
          const service =data.find(service=>String(service.id) === String(params.id));
          console.log('Fetched service:', service);
          if (!service) throw new Error("Service not found");
          return service;
        },
        future: {
          v7_skipActionErrorRevalidation: true // Add this flag to opt-in to the v7 behavior
        }
      },
      
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Authprovider>
      <RouterProvider router={router} />
      <ToastContainer position="top-center" autoClose={3000} hideProgressBar={false} />
    </Authprovider>
  </StrictMode>,
);
