package de.hemfeinkost.backend.services.rules;

import de.hemfeinkost.backend.core.exceptions.types.DuplicateRecordException;
import de.hemfeinkost.backend.core.exceptions.types.RecordNotFoundException;
import de.hemfeinkost.backend.models.PartyPlatter;
import de.hemfeinkost.backend.repositories.PartyPlatterRepository;
import de.hemfeinkost.backend.services.messages.PartyPlatterMessage;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class PartyPlatterBusinessRules {
    private final PartyPlatterRepository partyPlatterRepository;
    public void checkIfProductNameExists(String partyPlatterName) {
        if (partyPlatterRepository.existsByName(partyPlatterName)) {
            throw new DuplicateRecordException(PartyPlatterMessage.PARTY_PLATTER_NAME_ALREADY_EXISTS);
        }
    }

    public void checkIfCategoryNameExists(String partyPlatterName, long id) {
        PartyPlatter partyPlatter = partyPlatterRepository.findById(id)
                .orElseThrow(() -> new RecordNotFoundException(PartyPlatterMessage.PARTY_PLATTER_NOT_FOUND));
        if(!partyPlatter.getName().equals(partyPlatterName) && partyPlatterRepository.existsByName(partyPlatterName)) {
            throw new DuplicateRecordException(PartyPlatterMessage.PARTY_PLATTER_NOT_FOUND);
        }
    }
}
