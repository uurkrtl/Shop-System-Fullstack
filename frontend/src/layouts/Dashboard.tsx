import {Route, Routes} from "react-router-dom";
import Homepage from "../pages/home/Homepage.tsx";
import Navbar from "./Navbar.tsx";
import Footer from "./Footer.tsx";
import ProductList from "../pages/productList/ProductList.tsx";


function Dashboard() {
    return (
        <>
            <Navbar/>
            <div className="mt-5">
                <Routes>
                    <Route path={'/'} element={<Homepage/>}/>
                    <Route path={'/products'} element={<ProductList/>}/>
                </Routes>
            </div>
            <Footer/>
        </>
    );
}

export default Dashboard;