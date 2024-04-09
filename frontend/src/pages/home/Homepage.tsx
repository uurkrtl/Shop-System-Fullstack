import './Homepage.css'
import {Link} from "react-router-dom";

function Homepage() {
    return (
        <main>

            <div id="myCarousel" className="carousel slide mb-6" data-bs-ride="carousel">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="0" className="active"
                            aria-label="Slide 1"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img
                            src="https://i.ibb.co/QF44DWM/Whats-App-Image-2024-04-09-at-15-47-36-2.jpg"
                            className="d-block w-100" alt="Hem Feinkost"/>
                        <div className="container">
                        </div>
                    </div>
                </div>
            </div>

            <div className="container marketing">

                <div className="row">
                    <div className="col-lg-4">
                        <svg xmlns="http://www.w3.org/2000/svg" className="bd-placeholder-img" width="140" height="140"
                             viewBox="0 0 24 24.001"
                             id="food">
                            <path fill="none" d="M0 0h24v24.001H0z"></path>
                            <g fill="#757575">
                                <path
                                    d="M20.708 2.294a1 1 0 00-1.707.707v19h2v-6h2a1 1 0 001-1c0-9.307-3.158-12.572-3.293-12.707zm.293 11.707V7.244c.487 1.6.908 3.808.987 6.757h-.987zM8.001 6.001v-4h-2v4c0 .737-.405 1.375-1 1.723V2.001h-2v5.723c-.595-.348-1-.985-1-1.723v-4h-2v4c0 1.858 1.28 3.41 3 3.858v12.142h2V9.859c1.721-.448 3-2 3-3.858z"></path>
                                <path
                                    d="M12.001 9.001c-3.309 0-6 2.691-6 6s2.691 6 6 6 6-2.691 6-6-2.691-6-6-6zm0 9s-3-2-3-3.5a1.5 1.5 0 0 1 3 0 1.5 1.5 0 0 1 3 0c0 1.5-3 3.5-3 3.5z"></path>
                            </g>
                            <title>Unsere Produkte</title>
                        </svg>

                        <h2 className="fw-normal">Unsere Produkte</h2>
                        <p>Entdecken Sie die exquisite Auswahl an feinsten Delikatessen in unserem Sortiment.</p>
                        <p><Link to={'/'} className="btn btn-secondary">View details »</Link></p>
                    </div>

                    <div className="col-lg-4">
                        <svg xmlns="http://www.w3.org/2000/svg" className="bd-placeholder-img" width="140" height="140" fill="none" viewBox="0 0 96 96"
                             id="room-service">
                            <path fill="#FFF1CF" stroke="#FF8A00" strokeLinecap="round" strokeWidth="5"
                                  d="M47 18C34.067 18 23.5233 28.6559 23.0189 41.9989C22.998 42.5508 23.4477 43 24 43L70 43C70.5523 43 71.002 42.5508 70.9811 41.9989C70.4767 28.6559 59.933 18 47 18Z"></path>
                            <path stroke="#FF8A00" strokeLinecap="round" strokeWidth="5" d="M47 13L47 16"></path>
                            <path fill="#FF8A00"
                                  d="M43 13L51 13C52.6569 13 54 11.6569 54 10C54 8.34315 52.6569 7 51 7L47.1795 7L43 7C41.3431 7 40 8.34315 40 10C40 11.6569 41.3431 13 43 13Z"></path>
                            <path stroke="#FF8A00" strokeLinecap="round" strokeWidth="5"
                                  d="M70 43L48.7561 43L15.903 43C14.0568 43 12.4505 44.2635 12.0156 46.0577L6.19801 70.0577C5.58776 72.5753 7.49497 75 10.0854 75L87 75"></path>
                            <circle cx="21" cy="81" r="6" stroke="#FF8A00" strokeWidth="5"
                                    transform="rotate(-180 21 81)"></circle>
                            <circle cx="72" cy="81" r="6" stroke="#FF8A00" strokeWidth="5"
                                    transform="rotate(-180 72 81)"></circle>
                            <path stroke="#FF8A00" strokeLinecap="round" strokeWidth="5"
                                  d="M75 54L83 54M78 43L84.5 43M70 64L90 64"></path>
                        </svg>

                        <h2 className="fw-normal">Partyservice</h2>
                        <p>Unser Partyservice bietet Ihnen eine exquisite Auswahl an feinsten Delikatessen und
                            kulinarischen Köstlichkeiten, um Ihre Veranstaltung zu einem echten Gaumenschmaus zu
                            machen.</p>
                        <p><Link to={'/'} className="btn btn-secondary">View details »</Link></p>
                    </div>

                    <div className="col-lg-4">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" className="bd-placeholder-img" width="140" height="140">
                            <path fill="#e3e2e1"
                                  d="M54.01 58.74C54.01 61.65 44.15 64 32 64c-12.15 0-22.01-2.35-22.01-5.26 0-2.6 7.9-4.74 18.26-5.18h7.5c10.37.44 18.26 2.58 18.26 5.18z"></path>
                            <path fill="#e82327"
                                  d="M32 0C20.7 0 11.54 9.15 11.54 20.45 11.54 31.75 32 58.74 32 58.74s20.45-26.99 20.45-38.29S43.3 0 32 0zm0 33.99c-7.48 0-13.54-6.06-13.54-13.54S24.52 6.91 32 6.91c7.48 0 13.54 6.06 13.54 13.54S39.48 33.99 32 33.99z"></path>
                        </svg>

                        <h2 className="fw-normal">Unser Standort</h2>
                        <p>Besuchen Sie uns in Kerpen! Tauchen Sie ein in unsere exquisite Auswahl an Delikatessen und erleben Sie Qualität und Geschmack in einem Ambiente, das zum Verweilen einlädt.</p>
                        <p><Link to={'/'} className="btn btn-secondary">View details »</Link></p>
                    </div>
                </div>

                <hr className="featurette-divider"/>

                <div className="row featurette">
                    <div className="col-md-7">
                        <h2 className="featurette-heading fw-normal lh-1">Planen Sie Feier? <span
                            className="text-body-secondary">Sie sind bei uns genau richtig.</span></h2>
                        <p className="lead">Planen Sie eine besondere Feier oder Veranstaltung und suchen nach kulinarischen Köstlichkeiten,
                        die Ihre Gäste begeistern werden? Dann sind Sie bei uns genau richtig!</p>
                        <Link to={'/'} className="btn btn-secondary">Mehr erfahren »</Link>
                    </div>
                    <div className="col-md-5">
                        <img src="https://i.ibb.co/tMJkMwS/placeholder-img-1.jpg" width="500" height="500" alt="Party service"
                             className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto"/>
                    </div>
                </div>

                <hr className="featurette-divider"/>

                <div className="row featurette">
                    <div className="col-md-7 order-md-2">
                        <h2 className="featurette-heading fw-normal lh-1">Entdecken Sie <span
                            className="text-body-secondary">unsere erlesenen Feinkostprodukte.</span></h2>
                        <p className="lead">Unser Sortiment an Feinkostprodukten ist eine Hommage an die Kunst des guten Geschmacks.
                            Bei uns finden Sie sorgfältig ausgewählte Produkte, die Ihre Sinne verzaubern werden.</p>
                        <Link to={'/'} className="btn btn-secondary">Unsere Produkte »</Link>
                    </div>
                    <div className="col-md-5 order-md-1">
                        <img src="https://i.ibb.co/hK2FHHk/unsere-produkte-1.jpg" width="500" height="500" alt="Unsere Produkte"/>
                    </div>
                </div>

                </div>

        </main>
    );
}

export default Homepage;