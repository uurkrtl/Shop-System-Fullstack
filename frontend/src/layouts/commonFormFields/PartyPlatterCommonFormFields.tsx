import {PartyPlatter} from "../../types/PartyPlatter.ts";


function PartyPlatterCommonFormFields({ partyPlatter, setPartyPlatter }: Readonly<{ partyPlatter: PartyPlatter, setPartyPlatter: (partyPlatter: PartyPlatter) => void }>) {
    return (
        <div className="row g-3">

            <div className="col-sm-6">
                <label htmlFor="name" className="form-label">Plattenname</label>
                <input type="text" className="form-control" id="name"
                       placeholder="Schreiben Sie den Plattenname" value={partyPlatter.name}
                       onChange={(e) => setPartyPlatter({...partyPlatter, name: e.target.value})}/>
            </div>

            <div className="col-sm-6">
                <label htmlFor="description" className="form-label">Beschreibung</label>
                <input type="text" className="form-control" id="description"
                       placeholder="Schreiben Sie die Beschreibung" value={partyPlatter.description}
                       onChange={(e) => setPartyPlatter({...partyPlatter, description: e.target.value})}/>
            </div>

            <div className="col-sm-6">
                <label htmlFor="size" className="form-label">Größe</label>
                <input type="text" className="form-control" id="size"
                       placeholder="Schreiben Sie die Größe" value={partyPlatter.size}
                       onChange={(e) => setPartyPlatter({...partyPlatter, size: e.target.value})}/>
            </div>

            <div className="col-sm-6">
                <label htmlFor="price" className="form-label">Verkaufspreis</label>
                <input type="number" step="0.01" className="form-control" id="price"
                       placeholder="Schreiben Sie den Verkaufspreis" value={partyPlatter.price}
                       onChange={(e) => setPartyPlatter({
                           ...partyPlatter, price: e.target.valueAsNumber
                       })}/>
            </div>

        </div>
    );
}

export default PartyPlatterCommonFormFields;