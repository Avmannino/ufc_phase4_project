import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Map from './Map';
import Data from './Data';
import Event from './Event';
import './App.css';
import logoImage from './assets/UFC_Logo1.png';
import { Outlet } from "react-router-dom";
import Login from './Login';
import FighterData from './FighterData';
import Signup from './Signup';

const router = createBrowserRouter([
  // {
  //   path: "/",
  //   element: <Welcome />,
  //   errorElement: <Error />,
  // },
  {
    path: "/",
    element: <App />,
    // errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "login",
        element: <Login />
      },
      {
        path:"signup",
        element: <Signup />
      },
      {
        path: "map",
        element: <Map />,
      },
      {
        path: ":name",
        element: <Home />
      },
      {
        path: "event",
        element: <Event />
      },
      {
        path: "data",
        element: <Data />,
      },
      {
        path: "about",
        element: <About />,
      }
    ]
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);
