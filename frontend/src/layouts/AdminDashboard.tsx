import {Route, Routes} from "react-router-dom";
import AdminHomepage from "../pages/admin/admin-homepage/AdminHomepage.tsx";
import AdminProductList from "../pages/admin/products/AdminProductList.tsx";
import AdminProductDetail from "../pages/admin/products/AdminProductDetail.tsx";
import AdminProductAdd from "../pages/admin/products/AdminProductAdd.tsx";
import AdminProductUpdate from "../pages/admin/products/AdminProductUpdate.tsx";
import AdminCategoryList from "../pages/admin/categories/AdminCategoryList.tsx";
import AdminCategoryDetail from "../pages/admin/categories/AdminCategoryDetail.tsx";
import AdminCategoryAdd from "../pages/admin/categories/AdminCategoryAdd.tsx";
import AdminCategoryUpdate from "../pages/admin/categories/AdminCategoryUpdate.tsx";
import AdminPartyPlatterList from "../pages/admin/party-platters/AdminPartyPlatterList.tsx";
import AdminPartyPlatterDetail from "../pages/admin/party-platters/AdminPartyPlatterDetail.tsx";
import AdminPartyPlatterAdd from "../pages/admin/party-platters/AdminPartyPlatterAdd.tsx";
import AdminPartyPlatterUpdate from "../pages/admin/party-platters/AdminPartyPlatterUpdate.tsx";
import Footer from "./Footer.tsx";
import AdminNavbar from "./AdminNavbar.tsx";
import AdminUserAdd from "../pages/admin/users/AdminUserAdd.tsx";
import AdminUserList from "../pages/admin/users/AdminUserList.tsx";
import AdminUserDetail from "../pages/admin/users/AdminUserDetail.tsx";
import AdminUserUpdate from "../pages/admin/users/AdminUserUpdate.tsx";


function AdminDashboard() {
    return (
        <>
            <AdminNavbar/>
            <div className="mt-4">
                <Routes>
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
                    <Route path={'/admin/users'} element={<AdminUserList/>}/>
                    <Route path={'/admin/users/detail/:id'} element={<AdminUserDetail/>}/>
                    <Route path={'/admin/users/add'} element={<AdminUserAdd/>}/>
                    <Route path={'/admin/users/update/:id'} element={<AdminUserUpdate/>}/>
                </Routes>
            </div>
            <Footer/>
        </>
    );
}

export default AdminDashboard;