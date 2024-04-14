package de.hemfeinkost.backend.services.abstracts;

import de.hemfeinkost.backend.services.dtos.requests.PartyPlatterRequest;
import de.hemfeinkost.backend.services.dtos.responses.PartyPlatterCreatedResponse;
import de.hemfeinkost.backend.services.dtos.responses.PartyPlatterGetAllResponse;

import java.util.List;

public interface PartyPlatterService {
    List<PartyPlatterGetAllResponse> getAllPartyPlatters();
    List<PartyPlatterGetAllResponse> getActivePartyPlatters();
    PartyPlatterCreatedResponse addPartyPlatter(PartyPlatterRequest partyPlatter);
}