package de.hemfeinkost.backend.services.concretes;

import de.hemfeinkost.backend.core.exceptions.types.RecordNotFoundException;
import de.hemfeinkost.backend.core.mappers.ModelMapperService;
import de.hemfeinkost.backend.models.PartyPlatter;
import de.hemfeinkost.backend.repositories.PartyPlatterRepository;
import de.hemfeinkost.backend.services.abstracts.PartyPlatterService;
import de.hemfeinkost.backend.services.dtos.requests.PartyPlatterRequest;
import de.hemfeinkost.backend.services.dtos.responses.PartyPlatterCreatedResponse;
import de.hemfeinkost.backend.services.dtos.responses.PartyPlatterGetAllResponse;
import de.hemfeinkost.backend.services.messages.PartyPlatterMessage;
import de.hemfeinkost.backend.services.rules.PartyPlatterBusinessRules;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;

@Service
@RequiredArgsConstructor
public class PartyPlatterManager implements PartyPlatterService {
    private final PartyPlatterRepository partyPlatterRepository;
    private final ModelMapperService modelMapperService;
    private final PartyPlatterBusinessRules partyPlatterBusinessRules;

    @Override
    public List<PartyPlatterGetAllResponse> getAllPartyPlatters() {
        List<PartyPlatter> partyPlatters = partyPlatterRepository.findAll(Sort.by(Sort.Direction.ASC, "displayOrder"));
        return partyPlatters.stream()
                .map(partyPlatter -> modelMapperService.forResponse()
                        .map(partyPlatter, PartyPlatterGetAllResponse.class)).toList();
    }

    @Override
    public List<PartyPlatterGetAllResponse> getActivePartyPlatters() {
        List<PartyPlatter> partyPlatters = partyPlatterRepository.findAllByIsActiveTrue(Sort.by(Sort.Direction.ASC, "displayOrder"));
        return partyPlatters.stream()
                .map(partyPlatter -> modelMapperService.forResponse()
                        .map(partyPlatter, PartyPlatterGetAllResponse.class)).toList();
    }

    @Override
    public PartyPlatterCreatedResponse getPartyPlatterById(long id) {
        PartyPlatter partyPlatter = partyPlatterRepository.findById(id)
                .orElseThrow(() -> new RecordNotFoundException(PartyPlatterMessage.PARTY_PLATTER_NOT_FOUND));
        return modelMapperService.forResponse().map(partyPlatter, PartyPlatterCreatedResponse.class);
    }

    @Override
    public PartyPlatterCreatedResponse addPartyPlatter(PartyPlatterRequest partyPlatterRequest) {
        partyPlatterBusinessRules.checkIfPartyPlatterNameExists(partyPlatterRequest.getName());
        partyPlatterBusinessRules.checkIfPartyPlatterDisplayOrderExists(partyPlatterRequest.getDisplayOrder());
        PartyPlatter partyPlatter = modelMapperService.forRequest().map(partyPlatterRequest, PartyPlatter.class);
        if (partyPlatterRequest.getDisplayOrder() == 0) {
            int maxDisplayOrder = partyPlatterRepository.findMaxDisplayOrder();
            partyPlatter.setDisplayOrder(maxDisplayOrder + 1);
        }
        partyPlatter.setActive(true);
        partyPlatter.setCreatedAt(LocalDateTime.now());
        partyPlatter = partyPlatterRepository.save(partyPlatter);
        return modelMapperService.forResponse().map(partyPlatter, PartyPlatterCreatedResponse.class);
    }

    @Override
    public PartyPlatterCreatedResponse updatePartyPlatter(long id, PartyPlatterRequest partyPlatterRequest) {
        partyPlatterBusinessRules.checkIfPartyPlatterNameExists(partyPlatterRequest.getName(), id);
        partyPlatterBusinessRules.checkIfPartyPlatterDisplayOrderExists(partyPlatterRequest.getDisplayOrder(), id);
        PartyPlatter updatedPartyPlatter = partyPlatterRepository.findById(id)
                .orElseThrow(() -> new RecordNotFoundException(PartyPlatterMessage.PARTY_PLATTER_NOT_FOUND));
        PartyPlatter partyPlatter = modelMapperService.forRequest().map(partyPlatterRequest, PartyPlatter.class);
        if (partyPlatterRequest.getDisplayOrder() == 0) {
            int maxDisplayOrder = partyPlatterRepository.findMaxDisplayOrder();
            partyPlatter.setDisplayOrder(maxDisplayOrder + 1);
        }
        partyPlatter.setCreatedAt(updatedPartyPlatter.getCreatedAt());
        partyPlatter.setUpdatedAt(LocalDateTime.now());
        partyPlatter.setId(id);
        partyPlatter.setActive(updatedPartyPlatter.isActive());
        partyPlatter = partyPlatterRepository.save(partyPlatter);
        return modelMapperService.forResponse().map(partyPlatter, PartyPlatterCreatedResponse.class);
    }

    @Override
    public PartyPlatterCreatedResponse changePartyPlatterStatus(long id, boolean status) {
        PartyPlatter partyPlatter = partyPlatterRepository.findById(id)
                .orElseThrow(() -> new RecordNotFoundException(PartyPlatterMessage.PARTY_PLATTER_NOT_FOUND));
        partyPlatter.setActive(status);
        partyPlatter = partyPlatterRepository.save(partyPlatter);
        return modelMapperService.forResponse().map(partyPlatter, PartyPlatterCreatedResponse.class);
    }
}