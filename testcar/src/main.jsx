import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Main from './Component/Main.jsx';
import Home from './Component/Pages/HomePage/Home.jsx';
import ServiceDetails from './Component/Pages/ServiceDetails.jsx/ServiceDetails.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path:'/service-details/:service_id',
        element: <ServiceDetails></ServiceDetails>,
        
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
  <RouterProvider router={router} />,
  </StrictMode>,
)
