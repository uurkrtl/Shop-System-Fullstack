import {useEffect, useState} from "react";
import {PartyPlatter} from "../../types/PartyPlatter.ts";
import PartyPlatterService from "../../services/PartyPlatterService.ts";
import {Link} from "react-router-dom";

const partyPlatterService = new PartyPlatterService();
function PartyPlatterList() {
    const [partyPlatters, setPartyPlatters] = useState<PartyPlatter[]>([]);
    const [loading, setLoading] = useState(true);
    const [errorMessage, setErrorMessage] = useState<string>('');

    useEffect(() => {
            partyPlatterService.getActivePartyPlatters().then((response) => {
                setPartyPlatters(response.data);
                setLoading(false);
            }).catch(error => {
                setErrorMessage(`Fehler beim Abrufen von Produkte: ${error.message}`);
                setLoading(false);
                setPartyPlatters([]);
            });
    }, []);

    if (loading) {
        return <div className={'container'}>
            <div className={'spinner-border text-primary mt-5'}>
                <span className={'visually-hidden'}></span>
            </div>
            <h5>Wird geledan...</h5>
        </div>;
    }

    return (
        <div className="container">

            <div id="carouselExampleIndicators" className="carousel slide">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0"
                            className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1"
                            aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2"
                            aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src="https://i.ibb.co/v42RxBP/IMG-7070.jpg" className="d-block w-100" alt="party service"/>
                    </div>
                    <div className="carousel-item">
                        <img src="https://i.ibb.co/4Yy6jHq/IMG-7069.jpg" className="d-block w-100" alt="party service"/>
                    </div>
                    <div className="carousel-item">
                        <img src="https://i.ibb.co/Gx6YJxg/IMG-6738.jpg" className="d-block w-100" alt="party service"/>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators"
                        data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators"
                        data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>

            <header>
                <div className="pricing-header p-3 pb-md-4 mx-auto text-center">
                    <h1 className="display-4 fw-normal text-body-emphasis">Ihr Partyspezialist</h1>
                    <p className="fs-5 text-body-secondary">
                        Planen Sie einen Geburtstag, eine Familienfeier, ein Firmenevent oder ein anderes Fest?<br/>
                        Möchten Sie Ihre Gäste mit einem leckeren Buffet verwöhnen?<br/>
                        Wir haben das passende Angebot für Sie! Für jeden Anlass und Geschmack ist etwas dabei.<br/>
                        Mit viele Liebe zum Detail und frischen Zutaten bereiten wir für Sie köstliche Speisen zu.<br/>
                        Mit uns haben Sie die Spezialisten für Ihr mediterranes Catering und PartyService an der
                        Bergstraße und Umgebung.<br/>
                        Wir stellen Ihnen geschmackvolle Feinkostplatten mit Produkten aus unserem Sortiment
                        zusammen.<br/>
                        Sie können zwischen unseren bereits fertig kreierten Platten wählen oder lassen sich Ihre
                        Feinkostplatten noch Ihren Wünschen zusammenstellen.
                    </p>
                </div>
            </header>

            <main>
                <div className="row row-cols-1 row-cols-md-3 text-center">
                    {partyPlatters.map((partyPlatter) => {
                        return (
                            <div className="col" key={partyPlatter.id}>
                                <div className="card mb-4 rounded-3 shadow-sm">
                                    <div className="card-header py-3">
                                        <h4 className="my-0 fw-normal">{partyPlatter.name}</h4>
                                    </div>
                                    <div className="card-body">
                                        <h2 className="card-title pricing-card-title">
                                            {partyPlatter.price.toLocaleString('de-DE', {
                                                style: 'currency',
                                                currency: 'EUR'
                                            })}
                                        </h2>
                                        <ul className="list-unstyled mt-3 mb-4">
                                            <li>{partyPlatter.description}</li>
                                            <li>{partyPlatter.size}</li>
                                        </ul>
                                        <Link to={'/contact'} type="button" className="w-100 btn btn-lg btn-primary">Kontaktiere
                                            uns
                                        </Link>
                                    </div>
                                    {errorMessage && (
                                        <div className="alert alert-danger" role="alert">
                                            {errorMessage}
                                        </div>
                                    )}
                                </div>
                            </div>
                        );
                    })}
                </div>
            </main>
        </div>
    );
}

export default PartyPlatterList;