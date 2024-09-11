import { createBrowserRouter } from "react-router-dom"
import { Home } from "../pages/Home"
import { Register } from "../pages/Register"
import { Login } from "../pages/Login"
import Layout from "../layout/Layout"
import {MyParties} from "../pages/MyParties"
import {CreateParty} from "../pages/CreateParty"
import {EditParty} from "../pages/EditParty"
import { SingleParty } from "../pages/SingleParty"
import {ErrorPage} from "../pages/ErrorPage"

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Home/>,
        errorElement:<ErrorPage />    
    },
    {
        path: "/registrar",
        element: <Register/>,
        errorElement:<ErrorPage />    
    },
    {
        path: "/ingresar",
        element: <Login/>,
        errorElement:<ErrorPage />    
    },

    {   path: "/fiestas",
        element: <Layout/>,
        errorElement:<ErrorPage />, 
        children: [
            {
                path: "mis-fiestas",
                element: <MyParties/>,
                errorElement:<ErrorPage />  
            },
            {
                path: "crear",
                element: <CreateParty/>,
                errorElement:<ErrorPage />  
            },
            {
                path: "mis-fiestas/:id",
                element: <SingleParty/>,
                errorElement:<ErrorPage />  
            },
            {
                path: "edit/:id",
                element: <EditParty/>,
                errorElement:<ErrorPage />  
            },  
        ]
    },
])