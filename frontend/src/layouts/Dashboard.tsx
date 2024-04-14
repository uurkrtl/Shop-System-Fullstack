import {Route, Routes} from "react-router-dom";
import Homepage from "../pages/home/Homepage.tsx";
import Navbar from "./Navbar.tsx";
import Footer from "./Footer.tsx";
import ProductList from "../pages/productList/ProductList.tsx";
import ProductDetail from "../pages/productDetail/ProductDetail.tsx";
import Contact from "../pages/contact/Contact.tsx";
import PartyPlatterList from "../pages/partyPlatterList/PartyPlatterList.tsx";
import AdminProductAdd from "../pages/admin/products/AdminProductAdd.tsx";
import AdminProductList from "../pages/admin/products/AdminProductList.tsx";


function Dashboard() {
    return (
        <>
            <Navbar/>
            <div className="mt-5">
                <Routes>
                    <Route path={'/'} element={<Homepage/>}/>
                    <Route path={'/products/:categoryId?'} element={<ProductList/>}/>
                    <Route path={'/products/detail/:id'} element={<ProductDetail/>}/>
                    <Route path={'/contact'} element={<Contact/>}/>
                    <Route path={'/party-platter'} element={<PartyPlatterList/>}/>
                    <Route path={'/admin/products'} element={<AdminProductList/>}/>
                    <Route path={'/admin/products/add'} element={<AdminProductAdd/>}/>
                </Routes>
            </div>
            <Footer/>
        </>
    );
}

export default Dashboard;