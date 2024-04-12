package de.hemfeinkost.backend.services.concretes;

import de.hemfeinkost.backend.core.mappers.ModelMapperService;
import de.hemfeinkost.backend.models.PartyPlatter;
import de.hemfeinkost.backend.repositories.PartyPlatterRepository;
import de.hemfeinkost.backend.services.abstracts.PartyPlatterService;
import de.hemfeinkost.backend.services.dtos.requests.PartyPlatterRequest;
import de.hemfeinkost.backend.services.dtos.responses.PartyPlatterCreatedResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class PartyPlatterManager implements PartyPlatterService {
    private final PartyPlatterRepository partyPlatterRepository;
    private final ModelMapperService modelMapperService;

    @Override
    public PartyPlatterCreatedResponse addPartyPlatter(PartyPlatterRequest partyPlatterRequest) {
        PartyPlatter partyPlatter = modelMapperService.forRequest().map(partyPlatterRequest, PartyPlatter.class);
        partyPlatter = partyPlatterRepository.save(partyPlatter);
        return modelMapperService.forResponse().map(partyPlatter, PartyPlatterCreatedResponse.class);
    }
}