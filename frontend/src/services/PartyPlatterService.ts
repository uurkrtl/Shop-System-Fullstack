import axios from "axios";
import {PartyPlatter} from "../types/PartyPlatter.ts";

export default class PartyPlatterService {
    getAllPartyPlatters() {
        return axios.get(`/api/party-platters`)
    }

    getActivePartyPlatters() {
        return axios.get(`/api/party-platters/active`)
    }

    addPartyPlatter(partyPlatter: PartyPlatter) {
        return axios.post(`/api/party-platters`, partyPlatter)
    }
}