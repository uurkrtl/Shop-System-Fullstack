import {useNavigate} from "react-router-dom";
import React, {useState} from "react";
import PartyPlatterService from "../../../services/PartyPlatterService.ts";
import {PartyPlatter} from "../../../types/PartyPlatter.ts";
import PageHeader from "../../../layouts/PageHeader.tsx";
import PartyPlatterCommonFormFields from "../../../layouts/commonFormFields/PartyPlatterCommonFormFields.tsx";

function AdminPartyPlatterAdd() {
    const navigate = useNavigate();
    const partyPlatterService = new PartyPlatterService();
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

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        partyPlatterService.addPartyPlatter(partyPlatter)
            .then(() => {
                navigate('/admin/party-platters')
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
            <PageHeader title="Partyplatte hinzufügen" pageType="partyPlatter"/>

            <div className="row g-5">
                <div className="col-md-12 col-lg-12">
                    <form onSubmit={handleSubmit}>
                        <PartyPlatterCommonFormFields partyPlatter={partyPlatter} setPartyPlatter={setPartyPlatter}/>
                        <button className="w-100 btn btn-primary btn-lg my-4" type="submit">Speichern</button>
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

export default AdminPartyPlatterAdd;