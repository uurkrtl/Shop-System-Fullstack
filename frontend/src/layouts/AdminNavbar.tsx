import {Link, useNavigate} from "react-router-dom";
import {useEffect, useState} from "react";
import UserService from "../services/UserService.ts";
import {User} from "../types/User.ts";

function AdminNavbar() {
    const [user, setUser] = useState<User | null>(null);
    const navigate = useNavigate();
    const userService = new UserService();

    function logout() {
        userService.logout()
            .then(() => navigate('/login'))
            .catch((error) => console.error('Etwas ist schief gelaufen:', error))
            .finally(() => setUser(null));
    }

    useEffect(() => {
        userService.getLoggedInUser()
            .then((response) => {
                setUser(response.data);
            })
            .catch(() => {
                setUser(null);
            });
    }, []);

    return (
        <header data-bs-theme="dark">
            <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark" aria-label="Fourth navbar example">
                <div className="container-fluid">
                    <div className="mx-1">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 25" width="32" height="32">
                            <path
                                d="M20.328,8.572a.276.276,0,0,0-.23-.15,9.4,9.4,0,0,0-4.02.98l-.01.01a7.418,7.418,0,0,0-1.92,1.42,6.15,6.15,0,0,0-.47.56l-.09.04-.84.36a19.38,19.38,0,0,1,.06-2.4c.21-.37.42-.77.62-1.2a.037.037,0,0,0,.01-.03c.97-2.01,1.79-4.35,1.8-4.37a.245.245,0,0,0-.15-.32.248.248,0,0,0-.32.15c-.01.02-.72,2.05-1.6,3.93l-.41-.61c-.62-2.84-4.94-3.66-5.13-3.69a.244.244,0,0,0-.25.11.24.24,0,0,0,0,.28c2.17,3.02,4.45,3.55,5,3.64l.54.8c-.18.37-.37.73-.55,1.06A6.763,6.763,0,0,0,8.768,13c-.03-.01-.07-.03-.11-.04-1.47-.48-3.16.67-3.78,2.57a4.253,4.253,0,0,0-.04,2.66,2.516,2.516,0,0,0,1.57,1.65,2.035,2.035,0,0,0,.69.11,2.693,2.693,0,0,0,1.55-.52,4.166,4.166,0,0,0,1.54-2.16,4.253,4.253,0,0,0,.04-2.66,2.707,2.707,0,0,0-1-1.37,6.446,6.446,0,0,1,3.05-3.52c-.05.82-.04,1.66-.01,2.43v.03c.06,1.23.19,2.25.25,2.66a2.542,2.542,0,0,0-1.37,1.57,4.322,4.322,0,0,0,.03,2.66,3.586,3.586,0,0,0,3.11,2.68,1.978,1.978,0,0,0,.68-.11,2.516,2.516,0,0,0,1.57-1.65,4.253,4.253,0,0,0-.04-2.66,4.126,4.126,0,0,0-1.54-2.16,2.541,2.541,0,0,0-1.96-.48c-.05-.42-.16-1.31-.22-2.37l1.11-.48h.02c3.57,0,6.27-2.88,6.38-3A.227.227,0,0,0,20.328,8.572ZM6.8,18.9a.2.2,0,0,1-.08-.01,1.536,1.536,0,0,1-.93-1.03,2.6,2.6,0,0,1-.1-.4.248.248,0,1,1,.49-.08,2.992,2.992,0,0,0,.08.32,1.141,1.141,0,0,0,.61.72.239.239,0,0,1,.16.31A.234.234,0,0,1,6.8,18.9Zm6.6.95a1.213,1.213,0,0,0,1.1.37.248.248,0,1,1,.16.47,1.209,1.209,0,0,1-.38.06,1.894,1.894,0,0,1-1.21-.53.242.242,0,0,1-.03-.35A.263.263,0,0,1,13.4,19.852Zm.28-9.24a8.082,8.082,0,0,1,3.11-5.05.252.252,0,0,1,.41.2,8.715,8.715,0,0,1-.78,2.93,5.936,5.936,0,0,0-.57.27l-.07.04a5.437,5.437,0,0,0-.88.54,6.662,6.662,0,0,0-1.12.95A1.059,1.059,0,0,0,13.678,10.612Z"
                                fill="#34a853" className="color000000 svgShape"></path>
                        </svg>
                    </div>
                    <Link to={'/'} className="navbar-brand text-decoration-none">Hem Feinkost</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                            data-bs-target="#navbarsExample04" aria-controls="navbarsExample04" aria-expanded="false"
                            aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarsExample04">
                        <ul className="navbar-nav me-auto mb-2 mb-md-0">
                            <li className="nav-item">
                                <Link to={'/'} className="nav-link active text-decoration-none"
                                      aria-current="page">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link to={'/admin'} className="nav-link text-decoration-none"
                                      aria-current="page">Administrator Seite</Link>
                            </li>
                            <li className="nav-item dropdown">
                                <Link to={''} className="nav-link dropdown-toggle text-decoration-none"
                                      data-bs-toggle="dropdown"
                                      aria-expanded="false">Product</Link>
                                <ul className="dropdown-menu">
                                    <li><Link to={'/admin/products'}
                                              className="dropdown-item text-decoration-none">Produktliste</Link></li>
                                    <li><Link to={'admin/products/add'} className="dropdown-item text-decoration-none">Produkt
                                        erstellen</Link>
                                    </li>
                                </ul>
                            </li>
                            <li className="nav-item dropdown">
                                <Link to={'/'} className="nav-link dropdown-toggle text-decoration-none"
                                      data-bs-toggle="dropdown"
                                      aria-expanded="false">Kategorie</Link>
                                <ul className="dropdown-menu">
                                    <li><Link to={'/admin/categories'}
                                              className="dropdown-item text-decoration-none">Kategorieliste</Link></li>
                                    <li><Link to={'/admin/categories/add'} className="dropdown-item text-decoration-none">Kategorie
                                        erstellen</Link>
                                    </li>
                                </ul>
                            </li>
                            <li className="nav-item dropdown">
                                <Link to={'/'} className="nav-link dropdown-toggle text-decoration-none"
                                      data-bs-toggle="dropdown"
                                      aria-expanded="false">Partyplatte</Link>
                                <ul className="dropdown-menu">
                                    <li><Link to={'/admin/party-platters'}
                                              className="dropdown-item text-decoration-none">Partyplattenliste</Link>
                                    </li>
                                    <li><Link to={'/admin/party-platters/add'} className="dropdown-item text-decoration-none">Platte
                                        erstellen</Link>
                                    </li>
                                </ul>
                            </li>
                            {user && user.role === 'ADMIN' && (
                                <li className="nav-item dropdown">
                                    <Link to={'/'} className="nav-link dropdown-toggle text-decoration-none"
                                          data-bs-toggle="dropdown"
                                          aria-expanded="false">Benutzer</Link>
                                    <ul className="dropdown-menu">
                                        <li><Link to={'/admin/users'}
                                                  className="dropdown-item text-decoration-none">Benutzerliste</Link>
                                        </li>
                                        <li><Link to={'/admin/users/add'} className="dropdown-item text-decoration-none">Benutzer
                                            erstellen</Link>
                                        </li>
                                    </ul>
                                </li>
                            )}
                        </ul>
                        <div>
                            {!user && (

                                <Link to={'/login'} className="btn btn-outline-primary me-2">Anmelden</Link>
                            )}
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
                </div>
            </nav>
        </header>
    );
}

export default AdminNavbar;