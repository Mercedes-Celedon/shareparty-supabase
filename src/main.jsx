import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { RouterProvider } from 'react-router-dom'
import { router } from './router'
import { AuthProvider } from "./context/auth/authContext";
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <AuthProvider>
    <React.StrictMode>
      <RouterProvider router={router}/>
    </React.StrictMode>
  </AuthProvider>
)
