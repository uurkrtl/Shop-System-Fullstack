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
import AdminProductDetail from "../pages/admin/products/AdminProductDetail.tsx";
import AdminProductUpdate from "../pages/admin/products/AdminProductUpdate.tsx";
import AdminCategoryAdd from "../pages/admin/categories/AdminCategoryAdd.tsx";
import AdminCategoryList from "../pages/admin/categories/AdminCategoryList.tsx";
import AdminCategoryDetail from "../pages/admin/categories/AdminCategoryDetail.tsx";


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
                    <Route path={'/admin/products/detail/:id'} element={<AdminProductDetail/>}/>
                    <Route path={'/admin/products/add'} element={<AdminProductAdd/>}/>
                    <Route path={'/admin/products/update/:id'} element={<AdminProductUpdate/>}/>
                    <Route path={'/admin/categories'} element={<AdminCategoryList/>}/>
                    <Route path={'/admin/categories/detail/:id'} element={<AdminCategoryDetail/>}/>
                    <Route path={'/admin/categories/add'} element={<AdminCategoryAdd/>}/>
                </Routes>
            </div>
            <Footer/>
        </>
    );
}

export default Dashboard;