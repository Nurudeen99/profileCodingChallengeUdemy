import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
// import Count from './components/count/Count.jsx'
import {createBrowserRouter,RouterProvider,} from "react-router-dom";
import Count from './components/count/Count.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  {
    path: "/count",
    element: <Count/>,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

        <RouterProvider router={router} />

  </React.StrictMode>,
)
