import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import Banner from "../Banner/Banner";

const Root = () => {
    return (
        <div className="flex flex-col min-h-screen ">
            
            <Navbar />
            

           
            <div >
                <Outlet></Outlet>
            </div>

           
            <Footer />
        </div>
    );
};

export default Root;