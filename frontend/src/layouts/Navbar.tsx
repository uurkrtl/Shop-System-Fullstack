import {Link, useNavigate} from "react-router-dom";
import {useEffect, useState} from "react";
import {Category} from "../types/Category.ts";
import CategoryService from "../services/CategoryService.ts";
import {User} from "../types/User.ts";
import UserService from "../services/UserService.ts";

const categoryService = new CategoryService();
function Navbar() {
    const [categories, setCategories] = useState<Category[]>([]);
    const userService = new UserService();
    const [user, setUser] = useState<User | null>(null);
    const navigate = useNavigate();

    useEffect(() => {
        userService.getLoggedInUser()
            .then((response) => {
                setUser(response.data);
            })
            .catch(() => {
                setUser(null);
            });
    }, []);

    function logout() {
        userService.logout()
            .then(() => navigate('/login'))
            .catch((error) => console.error('Etwas ist schief gelaufen:', error))
            .finally(() => setUser(null));
    }

    useEffect(() => {
        categoryService.getAllCategories().then((response) => {
            setCategories(response.data);
        }).catch(error => {
            console.error(`Fehler beim Abrufen von Kategorie: ${error.message}`);
            setCategories([]);
        });
    }, []);

    return (
        <header data-bs-theme="dark">
            <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
                <div className="container-fluid">
                    <div className="navbar-brand">
                        <Link to={'/'}>
                            <img src="/logo.png" height="32" width="32" alt="small logo"/>
                        </Link>
                    </div>
                    <Link to={'/'} className="navbar-brand text-decoration-none">Hem Feinkost</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                            data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false"
                            aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarCollapse">
                        <ul className="navbar-nav me-auto mb-2 mb-md-0">
                            <li className="nav-item">
                                <Link to={'/'} className="nav-link active text-decoration-none" aria-current="page">Startseite</Link>
                            </li>
                            <li className="nav-item dropdown">
                                <Link to={'/'} className="nav-link dropdown-toggle text-decoration-none"
                                      data-bs-toggle="dropdown"
                                      aria-expanded="false">Unsere Produkte</Link>
                                <ul className="dropdown-menu">
                                    {categories.map((category) => {
                                        return (
                                            <li key={category.id}>
                                                <Link to={`/products/${category.id}`}
                                                      className="dropdown-item">{category.name}</Link>
                                            </li>
                                        );
                                    })}
                                    <li>
                                        <hr className="dropdown-divider"/>
                                    </li>
                                    <li><Link to={'/products'} className="dropdown-item">Alle Produkte</Link></li>
                                </ul>
                            </li>
                            <li className="nav-item">
                                <Link to={'/contact'} className="nav-link">Standort</Link>
                            </li>
                            <li className="nav-item">
                                <Link to={'/party-platters'} className="nav-link">Partyservice</Link>
                            </li>
                        </ul>
                        {user && (
                            <li className="nav-item dropdown">
                                <Link to={'/'} className="dropdown-toggle text-decoration-none"
                                      data-bs-toggle="dropdown"
                                      aria-expanded="false">
                                    <img height="38" width="38" className={'rounded-circle'}
                                         src={user.imageUrl}
                                         alt="user information">
                                    </img>
                                </Link>
                                <ul className="dropdown-menu dropdown-menu-end">
                                    <li><Link to={`/admin`}
                                              className="dropdown-item text-decoration-none">{`Administrationsmenü`}</Link>
                                    </li>
                                    <li>
                                        <button onClick={logout}
                                                className="dropdown-item text-decoration-none text-danger">{`Abmelden (${user.firstName} ${user.lastName})`}
                                        </button>
                                    </li>
                                </ul>
                            </li>

                        )}
                    </div>
                </div>
            </nav>
        </header>
    );
}

export default Navbar;