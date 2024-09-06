

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Layouthomepage/>,
        errorElement:<ErrorPage />    
    },

    {   path: "/trackers",
        errorElement:<ErrorPage />,  
        element: <Layout/>,
        children: [
            {
                path: "tracker1",
                element: <Tracker1/>,
                errorElement:<ErrorPage />  
            },
            {
                path: "tracker2",
                element: <Tracker2/>,
                errorElement:<ErrorPage />  
            },
            {
                path: "tracker3",
                element: <Tracker3/>,
                errorElement:<ErrorPage />  
            },  
            {
                path: "tracker5",
                element: <Tracker5/>,
                errorElement:<ErrorPage />  
            },  
        ]
    },
])