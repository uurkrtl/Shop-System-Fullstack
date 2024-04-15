package de.hemfeinkost.backend.services.abstracts;

import de.hemfeinkost.backend.services.dtos.requests.PartyPlatterRequest;
import de.hemfeinkost.backend.services.dtos.responses.PartyPlatterCreatedResponse;
import de.hemfeinkost.backend.services.dtos.responses.PartyPlatterGetAllResponse;

import java.util.List;

public interface PartyPlatterService {
    List<PartyPlatterGetAllResponse> getAllPartyPlatters();
    List<PartyPlatterGetAllResponse> getActivePartyPlatters();
    PartyPlatterCreatedResponse getPartyPlatterById(long id);
    PartyPlatterCreatedResponse addPartyPlatter(PartyPlatterRequest partyPlatter);
    PartyPlatterCreatedResponse changePartyPlatterStatus(long id, boolean status);
}