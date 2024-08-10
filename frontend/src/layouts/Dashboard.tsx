import {Route, Routes} from "react-router-dom";
import Homepage from "../pages/home/Homepage.tsx";
import Navbar from "./Navbar.tsx";
import Footer from "./Footer.tsx";
import ProductList from "../pages/productList/ProductList.tsx";
import ProductDetail from "../pages/productDetail/ProductDetail.tsx";
import Contact from "../pages/contact/Contact.tsx";
import PartyPlatterList from "../pages/partyPlatterList/PartyPlatterList.tsx";
import PageNotFound404 from "../pages/not-found-404/PageNotFound404.tsx";
import Login from "../pages/admin/login/Login.tsx";
import Imprint from "../pages/Imprint.tsx";

function Dashboard() {
    return (
        <>
            <Navbar/>
            <div className="mt-3 shadow-none">
                <Routes>
                    <Route path={'/'} element={<Homepage/>}/>
                    <Route path={'/products/:categoryId?'} element={<ProductList/>}/>
                    <Route path={'/products/detail/:id'} element={<ProductDetail/>}/>
                    <Route path={'/party-platters'} element={<PartyPlatterList/>}/>
                    <Route path={'/contact'} element={<Contact/>}/>
                    <Route path={'/imprint'} element={<Imprint/>}/>
                    <Route path={'/login'} element={<Login/>}/>
                    <Route path={'*'} element={<PageNotFound404/>}/>
                </Routes>
            </div>
            <Footer/>
        </>
    );
}

export default Dashboard;