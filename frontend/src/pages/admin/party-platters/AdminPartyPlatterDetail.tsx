import {Link, useNavigate, useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {PartyPlatter} from "../../../types/PartyPlatter.ts";
import PartyPlatterService from "../../../services/PartyPlatterService.ts";


const partyPlatterService = new PartyPlatterService();
function AdminPartyPlatterDetail() {
    const { id = '0' } = useParams();
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();
    const [successMessage, setSuccessMessage] = useState<string>('');
    const [errorMessage, setErrorMessage] = useState<string>('');
    const [partyPlatter, setPartyPlatter] = useState<PartyPlatter>({
        id: 0,
        name: '',
        description: '',
        size: '',
        price: 0,
        active: true,
        createdAt: new Date(),
        updatedAt: new Date()
    });

    const handleStatusChange = (status: boolean) => {
        partyPlatterService.changePartyPlatterStatus(Number(id), status)
            .then(() => {
                setErrorMessage('')
                setSuccessMessage(successMessage + ' Der Plattenstatus wurde erfolgreich geändert.')
                setPartyPlatter({
                    ...partyPlatter,
                    active: status
                });
            })
            .catch((error) => {
                if (error.response) {
                    setErrorMessage(error.response.data.message);
                    setSuccessMessage('');
                } else {
                    setErrorMessage('Etwas ist schief gelaufen: ' + error.message);
                    setSuccessMessage('');
                }
            });
    }

    useEffect(() => {
        if (id) {
            partyPlatterService.getPartyPlatterById(Number(id))
                .then((response) => {
                    setPartyPlatter(response.data);
                    setLoading(false);
                })
                .catch(error => {
                    if (error.response) {
                        setErrorMessage(error.response.data.message);
                    } else {
                        setErrorMessage('Etwas ist schief gelaufen: ' + error.message);
                    }
                });
        }
    }, [id, navigate]);

    if (errorMessage) {
        return <div className="container">
            <div className="alert alert-danger" role="alert">
                {errorMessage}
            </div>
        </div>
    }

    if (loading && !errorMessage) {
        return <div className={'container'}>
            <div className={'spinner-border text-primary mt-3'}>
                <span className={'visually-hidden'}></span>
            </div>
            <h5>Wird geledan...</h5>
        </div>;
    }

    return (
        <div className="container">
            <div className="row flex-lg-row align-items-center g-5 py-3">
                <div className="col-lg-6">
                    <h1 className="display-5 fw-bold text-body-emphasis lh-1 mb-3">{partyPlatter.name}</h1>
                    <p className="lead">{partyPlatter.description}</p>

                    <table className="table table-striped-columns">
                        <tbody>
                        <tr>
                            <th scope="row">Größe</th>
                            <td>{partyPlatter.size}</td>
                        </tr>
                        <tr>
                            <th scope="row">Verkaufspreis</th>
                            <td>{partyPlatter.price ? partyPlatter.price.toLocaleString('de-DE', {
                                style: 'currency',
                                currency: 'EUR'
                            }) : "-"}</td>
                        </tr>
                        <tr>
                            <th scope="row">Erstellung</th>
                            <td>{partyPlatter.createdAt ? new Date(partyPlatter.createdAt).toLocaleString('de-DE') : "-"}</td>
                        </tr>
                        <tr>
                            <th scope="row">Letzte Aktualisierung</th>
                            <td>{partyPlatter.updatedAt ? new Date(partyPlatter.updatedAt).toLocaleString('de-DE') : "-"}</td>
                        </tr>
                        <tr>
                            <th scope="row">Status</th>
                            <td>{partyPlatter.active ?
                                <span className="badge text-bg-success rounded-pill">Aktiv</span>
                                : <span className="badge text-bg-danger rounded-pill">Passiv</span>}</td>
                        </tr>
                        </tbody>
                    </table>

                    <div className="d-grid gap-2 d-md-flex justify-content-md-start">
                        <Link to={`/admin/party-platters/update/${partyPlatter.id}`} type="button"
                              className="btn btn-primary btn-lg px-4 me-md-2">Aktualisieren</Link>
                        <button type="button"
                                className={partyPlatter.active ? 'btn btn-danger px-4 me-md-2' : 'btn btn-success px-4 me-md-2'}
                                onClick={() => handleStatusChange(!partyPlatter.active)}>
                            {partyPlatter.active ? 'Deaktivieren' : 'Aktivieren'}</button>
                        <Link to={`/admin/party-platters`} type="button"
                              className="btn btn-outline-secondary btn-lg px-4">Plattenliste</Link>
                    </div>
                    {errorMessage && (
                        <div className="alert alert-danger mt-3" role="alert">
                            {errorMessage}
                        </div>
                    )}

                    {successMessage && (
                        <div className="alert alert-success mt-3" role="alert">
                            {successMessage}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default AdminPartyPlatterDetail;