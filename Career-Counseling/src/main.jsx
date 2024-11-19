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
import Services from './components/Services/Services.jsx';
import Contact from './components/Contact/Contact.jsx';
import Details from './components/Details/Details.jsx';
import ErrorPage from './components/Errorpage/Errorpage.jsx';
import Authprovider from './components/Authprovider/Authprovider.jsx';
import Login from './components/Login/Login.jsx';
import Register from './components/Register/Register.jsx';

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
      { path: '/services', element: <Services></Services> },
      { path: '/contact', element: <Contact></Contact> },
      { path: '/login', element: <Login></Login> },
      { path: '/register', element: <Register></Register> },

      {
        path: "/details/:id",
        element: <Details />,
        loader: async ({ params }) => {
          const res = await fetch('/service.json');
          const data = await res.json();
          const singleData = data.find(d => d.id === params.id);
          if (!singleData) throw new Error("Service not found");
          return singleData;
        }
      },
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Authprovider>
      <RouterProvider router={router} />
    </Authprovider>
  </StrictMode>,
);
