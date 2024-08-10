import {Link} from "react-router-dom";


function ThreeColumns() {
    return (
        <div className="row">

            <div className="col-lg-4">
                <img className="rounded-circle me-1" width="200" height="200"
                     src="https://i.ibb.co/tMJkMwS/placeholder-img-1.jpg" alt=""/>
                <h2 className="fw-normal">Planen Sie Feier?</h2>
                <p>Sie sind bei uns genau richtig.</p>
                <p><Link to='/party-platters' className="btn btn-secondary mb-3">Zur Partyservice »</Link></p>
            </div>

            <div className="col-lg-4">
                <img className="rounded-circle me-1" width="200" height="200"
                     src="https://i.ibb.co/hK2FHHk/unsere-produkte-1.jpg" alt=""/>
                <h2 className="fw-normal">Entdecken Sie unsere Produkte</h2>
                <p>Unser Sortiment an Feinkostprodukten ist eine Hommage an die Kunst des guten
                    Geschmacks.</p>
                <p><Link to='/products' className="btn btn-secondary  mb-3">Zu den Produkten »</Link></p>
            </div>

            <div className="col-lg-4">
                <img className="rounded-circle me-1" width="200" height="200"
                     src="https://i.ibb.co/tMJkMwS/placeholder-img-1.jpg" alt=""/>
                <h2 className="fw-normal">B2B</h2>
                <p>Wir freuen uns auf eine genussvolle Zusammenarbeit.</p>
                <p><Link to='/contact' className="btn btn-secondary">Zum Kontakt »</Link></p>
            </div>

        </div>
    );
}

export default ThreeColumns;