import './AdminHomepage.css'
import {Link} from "react-router-dom";

function AdminHomepage() {
    return (
        <main>
            <div className="container marketing">

                <div className="row mt-3 mb-1">
                    <div className="col-lg-3">
                        <Link to={`/admin/products`} className="nav-link active text-decoration-none" aria-current="page">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="140" height="140">
                                <path
                                    d="M32,13A19,19,0,1,0,51,32,19.021,19.021,0,0,0,32,13Zm0,36A17,17,0,1,1,49,32,17.019,17.019,0,0,1,32,49Z"
                                    fill="#d85b53" className="color000000 svgShape"></path>
                                <path
                                    d="M13 21V11H11v9H10V11H8v9H7V11H5v9H4V11H2V26a3.006 3.006 0 0 0 2 2.829V52a3 3 0 0 0 3 3H8a3 3 0 0 0 3-3V28.829A3.006 3.006 0 0 0 13 26zm-2 5a1 1 0 0 1-1 1 1 1 0 0 0-1 1V52a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V28a1 1 0 0 0-1-1 1 1 0 0 1-1-1V22h7zM61 10a9.01 9.01 0 0 0-9 9V32a3 3 0 0 0 3 3V54a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1V11A1 1 0 0 0 61 10zM60 53H57V34a1 1 0 0 0-1-1H55a1 1 0 0 1-1-1V19a7.011 7.011 0 0 1 6-6.929z"
                                    fill="#d85b53" className="color000000 svgShape"></path>
                                <rect width="2" height="15" x="55" y="16" fill="#d85b53"
                                      className="color000000 svgShape"></rect>
                                <path
                                    d="M32,22A10,10,0,1,0,42,32,10.011,10.011,0,0,0,32,22Zm0,18a8,8,0,1,1,8-8A8.009,8.009,0,0,1,32,40Z"
                                    fill="#d85b53" className="color000000 svgShape"></path>
                            </svg>
                            <h3 className="fw-normal">Produktverwaltung</h3>
                        </Link>
                    </div>

                    <div className="col-lg-3">
                        <Link to={`/admin/categories`} className="nav-link active text-decoration-none" aria-current="page">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="140" height="140">
                                <polygon fill="none" stroke="#0832ff" strokeLinecap="round" strokeLinejoin="round"
                                         strokeWidth="2"
                                         points="4.48 15.38 17.62 28.52 27.52 18.62 14.38 5.48 5.19 6.19 4.48 15.38"></polygon>
                                <polygon fill="#0832ff"
                                         points="25.96 17.06 16.06 26.96 17.44 28.44 27.44 18.44 25.96 17.06"></polygon>
                                <line x1="24.83" x2="14.93" y1="15.93" y2="25.83" fill="none" stroke="#0832ff"
                                      strokeLinecap="round" strokeMiterlimit="10"></line>
                                <circle cx="10" cy="11" r="1.5" fill="#0832ff"></circle>
                            </svg>
                            <h3 className="fw-normal">Kategorien-<br/>verwaltung</h3>
                        </Link>
                    </div>

                    <div className="col-lg-3">
                        <Link to={`/admin/party-platters`} className="nav-link active text-decoration-none" aria-current="page">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="140" height="140">
                                <path fill="#4d4d4d" d="M61 24v5h-6c1-2.83 1-5 1-5h5z"></path>
                                <path fill="#8030fe"
                                      d="M56 24s0 2.17-1 5c-.98 2.76-2.92 6.16-6.74 8.78v.01a21.19 21.19 0 0 1-4.81 2.43c-1.2.44-2.52.81-3.97 1.1-2.19.43-4.67.68-7.48.68s-5.29-.25-7.48-.68c-1.45-.29-2.77-.66-3.97-1.1a21.19 21.19 0 0 1-4.81-2.43v-.01C11.92 35.16 9.98 31.76 9 29c-1-2.83-1-5-1-5h48z"></path>
                                <path fill="#6c1ec6"
                                      d="M56 24s0 2.17-1 5c-.98 2.76-2.92 6.16-6.74 8.78v.01a21.19 21.19 0 0 1-4.81 2.43c-1.2.44-2.52.81-3.97 1.1-2.19.43-4.67.68-7.48.68s-5.29-.25-7.48-.68a26.85 26.85 0 0 1-3.83-1.05c1.08.15 2.18.22 3.31.22 11.11 0 20.19-7.3 20.8-16.49H56z"></path>
                                <path fill="#4e0eaa"
                                      d="M56 24s0 2.17-1 5c-.98 2.76-2.92 6.16-6.74 8.78v.01a21.19 21.19 0 0 1-4.81 2.43c-1.2.44-2.52.81-3.97 1.1-1.94.38-4.11.62-6.54.67 9.13-1.86 15.9-8.76 15.9-16.99 0-.34-.01-.67-.04-1H56z"></path>
                                <path fill="#666"
                                      d="M51.66 60.68c.18 1.22-.77 2.32-2 2.32-.97 0-1.8-.68-1.98-1.62L46.8 57l-.8-4-2.55-12.77v-.01a21.19 21.19 0 0 0 4.81-2.43l3.4 22.89z"></path>
                                <path fill="#4d4d4d" d="m46 53 .8 4H17.2l.8-4z"></path>
                                <path fill="#ffc634"
                                      d="M39 13a2.996 2.996 0 0 1 2.12 5.12c-.54.54-1.29.88-2.12.88H25a2.996 2.996 0 0 1-2.12-5.12c.54-.54 1.29-.88 2.12-.88h14z"></path>
                                <path fill="#ff881d"
                                      d="M42 16c0 .83-.34 1.58-.88 2.12S39.83 19 39 19H25c-1.66 0-3-1.34-3-3 0-.06 0-.12.01-.18.31.12.64.18.99.18h14c.83 0 1.58-.34 2.12-.88.5-.5.83-1.18.87-1.94 1.17.4 2.01 1.51 2.01 2.82z"></path>
                                <path fill="#4d4d4d"
                                      d="m39.48 41.32.01.05L37 46H27l-2.49-4.63.01-.05c2.19.43 4.67.68 7.48.68s5.29-.25 7.48-.68z"></path>
                                <path fill="#ffc634" d="M39 28v1c0 2.21-1.79 4-4 4h-6c-2.21 0-4-1.79-4-4v-1h14z"></path>
                                <path fill="#ff881d"
                                      d="M39 28v1c0 2.21-1.79 4-4 4h-6c-2.21 0-4-1.79-4-4v-1h.3c.59 1.47 2.02 2.5 3.7 2.5h6c1.68 0 3.11-1.03 3.7-2.5h.3z"></path>
                                <path fill="#666"
                                      d="M20.55 40.22v.01L18 53l-.8 4-.88 4.38c-.18.94-1.01 1.62-1.98 1.62-1.23 0-2.18-1.1-2-2.32l3.4-22.89c1.35.92 2.94 1.76 4.81 2.43z"></path>
                                <path fill="#4d4d4d" d="M9 29H3v-5h5s0 2.17 1 5z"></path>
                                <path fill="#666"
                                      d="M56 18H8a1 1 0 0 0 0 2h3v4h2v-4h4v4h2v-4h4v4h2v-4h4v4h2v-4h2v4h2v-4h4v4h2v-4h4v4h2v-4h4v4h2v-4h3a1 1 0 0 0 0-2z"></path>
                                <path fill="#ffd91f"
                                      d="M28 16.02a.994.994 0 0 1-.736-.323l-1.86-2.02a1 1 0 1 1 1.472-1.354l1.86 2.02A1 1 0 0 1 28 16.02zm5 0a.994.994 0 0 1-.736-.323l-1.86-2.02a1 1 0 1 1 1.472-1.354l1.86 2.02A1 1 0 0 1 33 16.02zm5 0a.994.994 0 0 1-.736-.323l-1.86-2.02a1 1 0 1 1 1.472-1.354l1.86 2.02A1 1 0 0 1 38 16.02z"></path>
                                <path fill="#f8f4e8"
                                      d="M26 11a1 1 0 0 1-.732-1.682c.48-.519 1.031-1.482.837-1.871-1.307-2.615 1.085-5.052 1.188-5.154a.999.999 0 1 1 1.414 1.414c-.012.012-1.474 1.524-.812 2.846.915 1.83-.949 3.901-1.165 4.131A.997.997 0 0 1 26 11zm10.05 0a1 1 0 0 1-.728-1.685c.482-.518 1.033-1.476.836-1.861-1.31-2.621 1.082-5.058 1.185-5.16a.999.999 0 1 1 1.414 1.414c-.012.012-1.474 1.524-.812 2.846.929 1.828-.95 3.903-1.167 4.133a1.001 1.001 0 0 1-.728.313zM32 11a.999.999 0 0 1-.707-1.707c.294-.304 1.179-1.406 0-2.586-2.142-2.141-.282-5.132 1-6.414a.999.999 0 1 1 1.414 1.414c-.06.062-2.257 2.33-1 3.586 1.986 1.986 1.088 4.326 0 5.414A.997.997 0 0 1 32 11z"></path>
                                <path fill="#b383fe"
                                      d="M11.347 27.252c0 .542.458 1 1 1h4.783c.54 0 1-.46 1-1 0-.542-.458-1-1-1h-4.783c-.54 0-1 .459-1 1zm8.174 0c0 1.287 2 1.289 2 0 0-1.287-2-1.289-2 0z"></path>
                            </svg>
                            <h3 className="fw-normal">Partyplatten-<br/>verwaltung</h3>
                        </Link>
                    </div>

                    <div className="col-lg-3">
                        <Link to={`/admin/users`} className="nav-link active text-decoration-none" aria-current="page">
                            <svg xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" viewBox="0 0 48 48" width="140" height="140">
                                <path fill="#42c3cf"
                                      d="M31.64,27.72a13.94,13.94,0,0,1-15.28,0A18,18,0,0,0,6.05,42.94a1,1,0,0,0,.27.75,1,1,0,0,0,.73.31H41a1,1,0,0,0,.73-.31,1,1,0,0,0,.27-.75A18,18,0,0,0,31.64,27.72Z"></path>
                                <circle cx="24" cy="16" r="12" fill="#42c3cf"></circle>
                            </svg>
                            <h3 className="fw-normal">Benutzer-<br/>verwaltung</h3>
                        </Link>
                    </div>

                </div>

            </div>
        </main>
    );
}

export default AdminHomepage;