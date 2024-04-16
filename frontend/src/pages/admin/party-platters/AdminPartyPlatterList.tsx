import PartyPlatterService from "../../../services/PartyPlatterService.ts";
import React, {useEffect, useState} from "react";
import {PartyPlatter} from "../../../types/PartyPlatter.ts";
import PageHeader from "../../../layouts/PageHeader.tsx";
import {Link} from "react-router-dom";

const partyPlatterService = new PartyPlatterService();
function AdminPartyPlatterList() {
    const [partyPlatters, setPartyPlatters] = useState<PartyPlatter[]>([]);
    const [filterByName, setFilterByName] = useState("");
    const [partyPlatterByStatus, setPartyPlatterByStatus] = useState<PartyPlatter[]>(partyPlatters);
    const [loading, setLoading] = useState(true);
    const [errorMessage, setErrorMessage] = useState<string>('');

    const truncateText = (text: string, maxLength: number) => {
        if (text.length > maxLength) {
            return text.substring(0, maxLength - 3) + '...';
        }
        return text;
    };

    const filteredPartyPlatters = partyPlatterByStatus.filter(
        (partyPlatter) =>
            partyPlatter.name.toLowerCase().includes(filterByName.toLowerCase())
    );

    const handleStatusSelect = (e: React.MouseEvent<HTMLInputElement>) => {
        const target = e.target as HTMLElement;
        if (target.id === "activePartyPlatters") {
            setPartyPlatterByStatus(partyPlatters.filter((partyPlatter) => partyPlatter.active));
        } else if (target.id === "passivePartyPlatters") {
            setPartyPlatterByStatus(partyPlatters.filter((partyPlatter) => !partyPlatter.active));
        } else {
            setPartyPlatterByStatus(partyPlatters);
        }
    };

    useEffect(() => {
        partyPlatterService.getAllPartyPlatters().then((response) => {
            setPartyPlatters(response.data);
            setPartyPlatterByStatus(response.data);
            setErrorMessage('');
            setLoading(false);
        }).catch((error) => {
            setErrorMessage(`Fehler beim Abrufen von Platte: ${error.message}`);
            setLoading(false);
            setPartyPlatters([]);
            setPartyPlatterByStatus([]);
        });
    }, []);

    if (loading) {
        return <div className={'container'}>
            <div className={'spinner-border text-primary'}>
                <span className={'visually-hidden'}></span>
            </div>
            <h5>Wird geledan...</h5>
        </div>;
    }


    return (
        <div className={'container'}>
            <PageHeader title="Partyplattenliste" pageType="partyPlatter"/>

            <div className="d-flex justify-content-end">
                <Link to={"/admin/party-platters/add"} className="btn btn-outline-secondary">Platte erstellen</Link>
            </div>

                <div className="form-check-inline">
                    <p className="form-check-label mx-1">Status auswählen:</p>
                </div>

                <div className="form-check form-check-inline mb-3">
                    <input className="form-check-input" type="radio" name="inlineRadioOptions" id="allPlatters"
                           value="allPlatters" onClick={handleStatusSelect} defaultChecked/>
                    <label className="form-check-label" htmlFor="allPlatters">Alle Platten</label>
                </div>

                <div className="form-check form-check-inline mb-3">
                    <input className="form-check-input" type="radio" name="inlineRadioOptions" id="activePartyPlatters"
                           value="activePartyPlatters" onClick={handleStatusSelect}/>
                    <label className="form-check-label" htmlFor="activePartyPlatters">Aktive Platten</label>
                </div>
                <div className="form-check form-check-inline mb-3">
                    <input className="form-check-input" type="radio" name="inlineRadioOptions" id="passivePartyPlatters"
                           value="passivePartyPlatters" onClick={handleStatusSelect}/>
                    <label className="form-check-label" htmlFor="passivePartyPlatters">Passive Platten</label>
                </div>

            <div className="input-group mb-2">
                <span className="input-group-text" id="basic-addon3">Schreiben einen Namensfilter</span>
                <input
                    type="text"
                    className="form-control"
                    id="basic-url"
                    aria-describedby="basic-addon3 basic-addon4"
                    onChange={(e) => setFilterByName(e.target.value)}
                />
            </div>

            <table className="table table-striped">
                <thead>
                <tr>
                    <th scope="col">Name</th>
                    <th scope="col">Status</th>
                    <th scope="col">Verkaufspreis</th>
                    <th scope="col">Sortiernummer</th>
                    <th scope="col">Detail</th>
                </tr>
                </thead>
                <tbody>
                {filteredPartyPlatters.map((partyPlatter) => {
                    return (
                        <tr key={partyPlatter.id}>
                            <td className={!partyPlatter.active ? "text-danger" : "text-black"}>{truncateText(partyPlatter.name, 40)}</td>
                            <td>{partyPlatter.active ? "Aktiv" : "Passiv"}</td>
                            <td>{partyPlatter.price}</td>
                            <td>{partyPlatter.displayOrder}</td>
                            <td><Link to={`/admin/party-platters/detail/${partyPlatter.id}`}
                                      className="btn btn-outline-info">Detail</Link></td>
                        </tr>
                    );
                })}
                </tbody>

                {errorMessage && (
                    <div className="alert alert-danger mt-3" role="alert">
                        {errorMessage}
                    </div>
                )}

            </table>
        </div>
    );
}

export default AdminPartyPlatterList;