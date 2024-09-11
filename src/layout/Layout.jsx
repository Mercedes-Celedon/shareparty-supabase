import { Outlet} from "react-router-dom"
import { Navbar } from "../components/navbar/Navbar"
import { useAuth } from "../context/auth/authContext";

const Layout = () => {
    //const { userId } = useAuth();
    return (
        <div>
            <Navbar />    
            <main>
                <Outlet />
            </main>
        </div>
    )
}

export default Layout