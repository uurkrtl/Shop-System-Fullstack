import PartyPlatterService from "../../../services/PartyPlatterService.ts";
import {useNavigate, useParams} from "react-router-dom";
import React, {useEffect, useState} from "react";
import {PartyPlatter} from "../../../types/PartyPlatter.ts";
import PageHeader from "../../../layouts/PageHeader.tsx";
import PartyPlatterCommonFormFields from "../../../layouts/commonFormFields/PartyPlatterCommonFormFields.tsx";


const partyPlatterService = new PartyPlatterService();
function AdminPartyPlatterUpdate() {
    const { id = '0' } = useParams();
    const navigate = useNavigate();
    const [errorMessage, setErrorMessage] = useState<string>('');
    const [partyPlatter, setPartyPlatter] = useState<PartyPlatter>({
        id: 0,
        name: '',
        description: '',
        size: '',
        price: 0,
        displayOrder: 0,
        active: true,
        createdAt: new Date(),
        updatedAt: new Date()
    });

    useEffect(() => {
        if (id) {
            partyPlatterService.getPartyPlatterById(Number(id))
                .then((response) => {
                    setPartyPlatter(prevPartyPlatter => ({...prevPartyPlatter, ...response.data}));
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

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        partyPlatterService.updatePartyPlatter(Number(id), partyPlatter)
            .then(() => {
                navigate('/admin/party-platters/detail/' + id)
            })
            .catch(error => {
                if (error.response) {
                    setErrorMessage(error.response.data.message);
                } else {
                    setErrorMessage('Etwas ist schief gelaufen: ' + error.message);
                }
            });
    };

    return (
        <main className={'container'}>
            <PageHeader title="Partyplattenaktualisierung" pageType="partyPlatter"/>

            <div className="row g-5">
                <div className="col-md-12 col-lg-12">
                    <form onSubmit={handleSubmit}>
                        <PartyPlatterCommonFormFields partyPlatter={partyPlatter} setPartyPlatter={setPartyPlatter}/>
                        <button className="w-100 btn btn-primary btn-lg my-4" type="submit">Aktualisieren</button>
                    </form>

                    {errorMessage && (
                        <div className="alert alert-danger" role="alert">
                            {errorMessage}
                        </div>
                    )}

                </div>
            </div>
        </main>
    );
}

export default AdminPartyPlatterUpdate;