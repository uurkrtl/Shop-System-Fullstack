import {Link} from "react-router-dom";

function Feature() {
    return (
        <div>
            <hr className="featurette-divider"/>

            <div className="row featurette">
                <div className="col-md-7">
                    <h2 className="featurette-heading fw-normal lh-1">Planen Sie Feier? <span
                        className="text-body-secondary">Sie sind bei uns genau richtig.</span></h2>
                    <p className="lead">Planen Sie eine besondere Feier oder Veranstaltung und suchen nach
                        kulinarischen Köstlichkeiten,
                        die Ihre Gäste begeistern werden? Dann sind Sie bei uns genau richtig!</p>
                    <Link to={'/party-platters'} className="btn btn-secondary mb-3">Mehr erfahren »</Link>
                </div>
                <div className="col-md-5">
                    <img src="https://i.ibb.co/tMJkMwS/placeholder-img-1.jpg" width="500" height="500"
                         alt="Party service"
                         className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto"/>
                </div>
            </div>

            <hr className="featurette-divider"/>

            <div className="row featurette">
                <div className="col-md-7 order-md-2">
                    <h2 className="featurette-heading fw-normal lh-1">Entdecken Sie <span
                        className="text-body-secondary">unsere erlesenen Feinkostprodukte.</span></h2>
                    <p className="lead">Unser Sortiment an Feinkostprodukten ist eine Hommage an die Kunst des guten
                        Geschmacks.
                        Bei uns finden Sie sorgfältig ausgewählte Produkte, die Ihre Sinne verzaubern werden.</p>
                    <Link to={'/products'} className="btn btn-secondary mb-3">Unsere Produkte »</Link>
                </div>
                <div className="col-md-5 order-md-1">
                    <img src="https://i.ibb.co/hK2FHHk/unsere-produkte-1.jpg" width="500" height="500"
                         alt="Unsere Produkte"
                         className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto"/>
                </div>
            </div>
        </div>
    );
}

export default Feature;