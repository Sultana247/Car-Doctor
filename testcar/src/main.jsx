import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Main from './Component/Main.jsx';
import Home from './Component/Pages/HomePage/Home.jsx';
import ServiceDetails from './Component/Pages/ServiceDetails.jsx/ServiceDetails.jsx';
import AuthProvider from './Component/Provider/AuthProvider.jsx';
import Login from './Component/Pages/Login/Login.jsx';
import SignUp from './Component/Pages/SignUp/SignUp.jsx';

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
        
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/signup',
        element: <SignUp></SignUp>
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
  <AuthProvider>
    <RouterProvider router={router} />,
  </AuthProvider>
  </StrictMode>,
)
