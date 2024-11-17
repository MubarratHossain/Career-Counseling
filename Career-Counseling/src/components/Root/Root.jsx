import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

const Root = () => {
    return (
        <div className="flex flex-col min-h-screen">
            
            <Navbar />

           
            <div className="flex-grow mt-16">
                <Outlet />
            </div>

           
            <Footer />
        </div>
    );
};

export default Root;