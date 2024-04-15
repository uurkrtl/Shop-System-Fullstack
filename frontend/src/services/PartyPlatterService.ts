import axios from "axios";
import {PartyPlatter} from "../types/PartyPlatter.ts";

export default class PartyPlatterService {
    getAllPartyPlatters() {
        return axios.get(`/api/party-platters`)
    }

    getActivePartyPlatters() {
        return axios.get(`/api/party-platters/active`)
    }

    getPartyPlatterById(id: number) {
        return axios.get(`/api/party-platters/${id}`)
    }

    addPartyPlatter(partyPlatter: PartyPlatter) {
        return axios.post(`/api/party-platters`, partyPlatter)
    }

    updatePartyPlatter(id: number, partyPlatter: PartyPlatter) {
        return axios.put(`/api/party-platters/${id}`, partyPlatter)
    }

    changePartyPlatterStatus(id: number, status: boolean) {
        return axios.put(`/api/party-platters/status/${id}?status=${status}`)
    }
}