package de.hemfeinkost.backend.services.rules;

import de.hemfeinkost.backend.core.exceptions.types.DuplicateRecordException;
import de.hemfeinkost.backend.core.exceptions.types.RecordNotFoundException;
import de.hemfeinkost.backend.core.exceptions.types.UnauthorizedAccessException;
import de.hemfeinkost.backend.models.AppUser;
import de.hemfeinkost.backend.models.enums.UserRole;
import de.hemfeinkost.backend.repositories.AppUserRepository;
import de.hemfeinkost.backend.services.messages.AppUserMessage;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class AppUserBusinessRules {
    private final AppUserRepository appUserRepository;

    public void checkIfUnauthorizedUser(long ownId, String  role, long searchId) {
        if(ownId != searchId && role.equals(UserRole.USER.name())) {
            throw new UnauthorizedAccessException(AppUserMessage.UNAUTHORIZED_ACCESS_REQUEST);
        }
    }

    public void checkIfUsernameExists(String username) {
        if(this.appUserRepository.existsByUsername(username)) {
            throw new DuplicateRecordException(AppUserMessage.USERNAME_ALREADY_EXISTS);
        }
    }

    public void checkIfUsernameExists(String username, long id) {
        AppUser appUser = appUserRepository.findById(id)
                .orElseThrow(() -> new RecordNotFoundException(AppUserMessage.USER_NOT_FOUND));
        if(!appUser.getUsername().equals(username) && appUserRepository.existsByUsername(username)) {
            throw new DuplicateRecordException(AppUserMessage.USERNAME_ALREADY_EXISTS);
        }
    }

    public void checkIfEmailExists(String email) {
        if(this.appUserRepository.existsByEmail(email)) {
            throw new DuplicateRecordException(AppUserMessage.EMAIL_ALREADY_EXISTS);
        }
    }

    public void checkIfEmailExists(String email, long id) {
        AppUser appUser = appUserRepository.findById(id)
                .orElseThrow(() -> new RecordNotFoundException(AppUserMessage.USER_NOT_FOUND));
        if(!appUser.getEmail().equals(email) && appUserRepository.existsByUsername(email)) {
            throw new DuplicateRecordException(AppUserMessage.EMAIL_ALREADY_EXISTS);
        }
    }
}