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
import AdminCategoryUpdate from "../pages/admin/categories/AdminCategoryUpdate.tsx";
import AdminPartyPlatterAdd from "../pages/admin/party-platters/AdminPartyPlatterAdd.tsx";
import AdminPartyPlatterList from "../pages/admin/party-platters/AdminPartyPlatterList.tsx";
import AdminPartyPlatterDetail from "../pages/admin/party-platters/AdminPartyPlatterDetail.tsx";
import AdminPartyPlatterUpdate from "../pages/admin/party-platters/AdminPartyPlatterUpdate.tsx";
import PageNotFound404 from "../pages/not-found-404/PageNotFound404.tsx";
import AdminHomepage from "../pages/admin/admin-homepage/AdminHomepage.tsx";


function Dashboard() {
    return (
        <>
            <Navbar/>
            <div className="mt-5">
                <Routes>
                    <Route path={'/'} element={<Homepage/>}/>
                    <Route path={'/products/:categoryId?'} element={<ProductList/>}/>
                    <Route path={'/products/detail/:id'} element={<ProductDetail/>}/>
                    <Route path={'/party-platters'} element={<PartyPlatterList/>}/>
                    <Route path={'/contact'} element={<Contact/>}/>
                    <Route path={'/admin'} element={<AdminHomepage/>}/>
                    <Route path={'/admin/products'} element={<AdminProductList/>}/>
                    <Route path={'/admin/products/detail/:id'} element={<AdminProductDetail/>}/>
                    <Route path={'/admin/products/add'} element={<AdminProductAdd/>}/>
                    <Route path={'/admin/products/update/:id'} element={<AdminProductUpdate/>}/>
                    <Route path={'/admin/categories'} element={<AdminCategoryList/>}/>
                    <Route path={'/admin/categories/detail/:id'} element={<AdminCategoryDetail/>}/>
                    <Route path={'/admin/categories/add'} element={<AdminCategoryAdd/>}/>
                    <Route path={'/admin/categories/update/:id'} element={<AdminCategoryUpdate/>}/>
                    <Route path={'/admin/party-platters'} element={<AdminPartyPlatterList/>}/>
                    <Route path={'/admin/party-platters/detail/:id'} element={<AdminPartyPlatterDetail/>}/>
                    <Route path={'/admin/party-platters/add'} element={<AdminPartyPlatterAdd/>}/>
                    <Route path={'/admin/party-platters/update/:id'} element={<AdminPartyPlatterUpdate/>}/>
                    <Route path={'*'} element={<PageNotFound404/>}/>
                </Routes>
            </div>
            <Footer/>
        </>
    );
}

export default Dashboard;