package de.hemfeinkost.backend.services.concretes;

import de.hemfeinkost.backend.core.mappers.ModelMapperService;
import de.hemfeinkost.backend.models.AppUser;
import de.hemfeinkost.backend.repositories.AppUserRepository;
import de.hemfeinkost.backend.services.abstracts.AppUserService;
import de.hemfeinkost.backend.services.dtos.requests.AppUserRequest;
import de.hemfeinkost.backend.services.dtos.responses.AppUserCreatedResponse;
import de.hemfeinkost.backend.services.dtos.responses.AppUserGetAllResponse;
import de.hemfeinkost.backend.services.messages.AppUserMessage;
import de.hemfeinkost.backend.services.rules.AppUserBusinessRules;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;

@Service
@RequiredArgsConstructor
public class AppUserManager implements AppUserService {
    private final AppUserRepository appUserRepository;
    private final AppUserBusinessRules appUserBusinessRules;
    private final ModelMapperService modelMapperService;
    private final PasswordEncoder passwordEncoder;


    @Override
    public AppUser getUserByUsername(String username) {
        return appUserRepository.findByUsername(username).orElseThrow(() -> new UsernameNotFoundException(AppUserMessage.USER_NOT_FOUND));
    }

    @Override
    public AppUserCreatedResponse getLoggedInUser() {
        var principal = (User) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        AppUser appUser = getUserByUsername(principal.getUsername());
        return modelMapperService.forResponse().map(appUser, AppUserCreatedResponse.class);
    }

    @Override
    public AppUserCreatedResponse registerUser(AppUserRequest appUserRequest) {
        appUserBusinessRules.checkIfUsernameExists(appUserRequest.getUsername());
        appUserBusinessRules.checkIfEmailExists(appUserRequest.getEmail());
        AppUser appUser = modelMapperService.forRequest().map(appUserRequest, AppUser.class);
        appUser.setPassword(passwordEncoder.encode(appUser.getPassword()));
        appUser.setCreatedAt(LocalDateTime.now());
        if (appUser.getImageUrl().isEmpty()){
            appUser.setImageUrl("https://i.ibb.co/z7DKLLh/user-icon-on-transparent-background-free-png.webp");
        }
        appUser = appUserRepository.save(appUser);
        return modelMapperService.forResponse().map(appUser, AppUserCreatedResponse.class);
    }

    @Override
    public List<AppUserGetAllResponse> getAllUsers() {
        List<AppUser> appUsers = appUserRepository.findAll();
        return appUsers.stream()
                .map(appUser->this.modelMapperService.forResponse()
                        .map(appUser, AppUserGetAllResponse.class)).toList();
    }

    @Override
    public AppUserCreatedResponse getUserById(long ownId, String role, long searchId) {
        appUserBusinessRules.checkIfUnauthorizedUser(ownId, role, searchId);
        AppUser appUser = appUserRepository.findById(searchId).orElseThrow(() -> new UsernameNotFoundException(AppUserMessage.USER_NOT_FOUND));
        return modelMapperService.forResponse().map(appUser, AppUserCreatedResponse.class);
    }

    @Override
    public AppUserCreatedResponse updateUser(long ownId, String role, long updateId, AppUserRequest appUserRequest) {
        appUserBusinessRules.checkIfUnauthorizedUser(ownId, role, updateId);
        appUserBusinessRules.checkIfUsernameExists(appUserRequest.getUsername(), updateId);
        appUserBusinessRules.checkIfEmailExists(appUserRequest.getEmail(), updateId);
        AppUser foundedUser = appUserRepository.findById(updateId).orElseThrow(() -> new UsernameNotFoundException(AppUserMessage.USER_NOT_FOUND));
        AppUser appUser = modelMapperService.forRequest().map(appUserRequest, AppUser.class);
        appUser.setId(updateId);
        appUser.setCreatedAt(foundedUser.getCreatedAt());
        appUser.setUpdatedAt(LocalDateTime.now());
        if (appUser.getImageUrl().isEmpty()){
            appUser.setImageUrl("https://i.ibb.co/z7DKLLh/user-icon-on-transparent-background-free-png.webp");
        }
        appUser = appUserRepository.save(appUser);
        return modelMapperService.forResponse().map(appUser, AppUserCreatedResponse.class);
    }
}