import axios from "axios";

export default class PartyPlatterService {
    getAllPartyPlatters() {
        return axios.get(`/api/party-platters`)
    }
}