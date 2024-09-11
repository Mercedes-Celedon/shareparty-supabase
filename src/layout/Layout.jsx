import { Outlet} from "react-router-dom"
import { Navbar } from "../components/navbar/Navbar"
import { useAuth } from "../context/auth/authContext";

const Layout = () => {
    //const { userId } = useAuth();
    return (
        <div>
            <nav>
                
                <Navbar />    
            </nav>  
            <main>
            <Outlet />
            </main>
        </div>
    )
}

export default Layout