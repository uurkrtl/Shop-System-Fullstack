package de.hemfeinkost.backend.services.abstracts;

import de.hemfeinkost.backend.services.dtos.requests.PartyPlatterRequest;
import de.hemfeinkost.backend.services.dtos.responses.PartyPlatterCreatedResponse;

public interface PartyPlatterService {
    PartyPlatterCreatedResponse addPartyPlatter(PartyPlatterRequest partyPlatter);
}