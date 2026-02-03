import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Main from './Component/Main.jsx';
import Home from './Component/Pages/HomePage/Home.jsx';
import AuthProvider from './Component/Provider/AuthProvider.jsx';
import Login from './Component/Pages/Login/Login.jsx';
import SignUp from './Component/Pages/SignUp/SignUp.jsx';
import Checkout from './Component/Pages/checkout/Checkout.jsx';
import ServiceDetails from './Component/Pages/ServiceDetails/ServiceDetails.jsx';
import Cart from './Component/Pages/checkout/Cart.jsx';
import Private from './Component/PrivateRoute/Private.jsx';

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
        path:'/service-details/:id',
        element: <ServiceDetails></ServiceDetails>,
        loader: ({params})=>fetch(`http://localhost:5000/service/${params.id}`)
        
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/signup',
        element: <SignUp></SignUp>
      },
      {
        path: '/checkout/:id',
        element: <Checkout></Checkout>,
        loader: ({params})=>fetch(`http://localhost:5000/service/${params.id}`)
      },
      {
        path: '/cart',
        element: <Private><Cart></Cart></Private>
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
