import { Outlet } from "react-router-dom";
import Footer from "../../Pages/Shared/Footer/Footer";
import Navbar from "../../Pages/Shared/Navber/Navber";

const Main = () => {
    return (
        <>
        <Navbar/>
           <Outlet/> 
           <Footer/>
        </>
    );
};

export default Main;