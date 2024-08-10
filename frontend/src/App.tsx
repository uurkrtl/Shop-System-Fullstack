import "./App.css";
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'semantic-ui-css/semantic.min.css'
import Dashboard from "./layouts/Dashboard.tsx";
import {useEffect, useState} from "react";
import {User} from "./types/User.ts";
import UserService from "./services/UserService.ts";
import AdminDashboard from "./layouts/AdminDashboard.tsx";
import {useLocation} from "react-router-dom";
import Login from "./pages/admin/login/Login.tsx";

function App() {
    const [user, setUser] = useState<User | null>(null);
    const userService = new UserService();

    const Navigation = () => {
        const location = useLocation();

        const isAdminRoute = () => {
            return location.pathname.includes('/admin');
        };

        const isLoginRoute = () => {
            return location.pathname.includes('/login');
        };

        let componentToRender;
        if (isLoginRoute() || (isAdminRoute() && !user?.role)) {
            componentToRender = <Login/>;
        } else if (isAdminRoute()) {
            componentToRender = <AdminDashboard/>;
        } else {
            componentToRender = <Dashboard/>;
        }

        return componentToRender;
    };

    useEffect(() => {
        userService.getLoggedInUser()
            .then((response) => {
                setUser(response.data);
            })
            .catch(() => {
                setUser(null);
            });
    }, []);

    return <Navigation />;
}

export default App;