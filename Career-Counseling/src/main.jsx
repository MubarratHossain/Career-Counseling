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
import PrivateRoute from './components/Privateroute/PrivateRoute.jsx';
import BookNow from './components/BookNow/BookNow.jsx';
import ForgetPassword from './components/ForgetPassword/ForgetPassword.jsx';
import { HelmetProvider } from 'react-helmet-async';
import { Helmet } from 'react-helmet-async';

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
     
      { path: '/my-profile', element: <PrivateRoute><MyProfile></MyProfile> </PrivateRoute>},
      { path: '/contact', element: <Contact></Contact> },
      { path: '/login', element: <Login></Login> },
      { path: '/register', element: <Register></Register> },
      { path: '/forgot-password', element: <ForgetPassword></ForgetPassword> },
      

      {
         path:"/bookNow/:id",
         element:<PrivateRoute><BookNow></BookNow></PrivateRoute>,
         loader:async({params}) =>{
          const res =await fetch('../public/consultant.json');
          const data =await res.json();
          const consultant =data.find(consultant=>String(consultant.id) === String(params.id));
          if (!consultant) throw new Error("Consultant not found");
          return consultant;
         }
      },

      {
        path: "/details/:id",
        element: <PrivateRoute><Details></Details></PrivateRoute>,
        loader:async({params})=>{
          const res =await fetch('../public/service.json');
          const data =await res.json();
          const service =data.find(service=>String(service.id) === String(params.id));
          console.log('Fetched service:', service);
          if (!service) throw new Error("Service not found");
          return service;
        },
        future: {
          v7_skipActionErrorRevalidation: true 
        }
      },
      
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HelmetProvider>
      <Helmet>
        <title>JobZen</title>
      </Helmet>
      <Authprovider>
      <RouterProvider router={router} />
      <ToastContainer position="top-center" autoClose={3000} hideProgressBar={false} />
    </Authprovider>
    </HelmetProvider>

  </StrictMode>,
);
