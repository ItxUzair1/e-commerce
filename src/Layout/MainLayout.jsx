import { Outlet } from "react-router-dom";
import NavBar from "../Components/Header/NavBar/NavBar";
import Footer from "../Components/Footer/Footer";


export default function MainLayout(){

    return (
        <div>
            <NavBar/>
            <Outlet/>
            <Footer/>
        </div>
    );
}