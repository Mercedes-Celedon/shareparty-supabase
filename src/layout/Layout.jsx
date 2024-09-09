import { Outlet} from "react-router-dom"
import { Navbar } from "../components/navbar/Navbar"
import { useAuth } from "../context/auth/authConext";

const Layout = () => {
    const { userId } = useAuth();
    return (
        <div>
            <nav>
                {userId &&<Navbar />}    
            </nav>  
            <main>
            <Outlet />
            </main>
        </div>
    )
}

export default Layout