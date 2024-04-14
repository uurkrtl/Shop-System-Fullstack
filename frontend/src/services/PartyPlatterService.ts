import axios from "axios";

export default class PartyPlatterService {
    getAllPartyPlatters() {
        return axios.get(`/api/party-platters`)
    }

    getActivePartyPlatters() {
        return axios.get(`/api/party-platters/active`)
    }
}