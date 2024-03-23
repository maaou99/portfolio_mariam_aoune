import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App'
//import About from './components/about/About'
import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import Homepage from './components/homepage/Homepage';
import Footer from './components/footer/Footer';

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Homepage/>,
    },
    {
        path: "page",
        element: <App/>,
      },
  ]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router}/>)

 