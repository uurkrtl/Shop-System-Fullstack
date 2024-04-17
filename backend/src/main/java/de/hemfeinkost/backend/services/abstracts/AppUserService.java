package de.hemfeinkost.backend.services.abstracts;

import de.hemfeinkost.backend.models.AppUser;
import de.hemfeinkost.backend.services.dtos.requests.AppUserRequest;
import de.hemfeinkost.backend.services.dtos.responses.AppUserCreatedResponse;
import de.hemfeinkost.backend.services.dtos.responses.AppUserGetAllResponse;

import java.util.List;

public interface AppUserService {
    AppUser getUserByUsername(String username);
    AppUserCreatedResponse getLoggedInUser();
    AppUserCreatedResponse registerUser(AppUserRequest userRequest);
    List<AppUserGetAllResponse> getAllUsers();
    AppUserCreatedResponse getUserById(long ownId, String role, long searchId);
    AppUserCreatedResponse updateUser(long ownId, String role, long updateId, AppUserRequest userRequest);
}