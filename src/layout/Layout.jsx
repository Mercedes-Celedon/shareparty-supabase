import { Outlet} from "react-router-dom"

const Layout = () => {
    return (
        <>  
            <Navbar />
            <section className="outlet">
            <Outlet />
            </section>
        </>
    )
}

export default Layout