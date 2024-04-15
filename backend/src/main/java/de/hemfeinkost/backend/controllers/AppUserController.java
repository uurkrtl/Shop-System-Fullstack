package de.hemfeinkost.backend.controllers;

import de.hemfeinkost.backend.services.abstracts.AppUserService;
import de.hemfeinkost.backend.services.dtos.requests.AppUserRequest;
import de.hemfeinkost.backend.services.dtos.responses.AppUserCreatedResponse;
import de.hemfeinkost.backend.services.dtos.responses.AppUserGetAllResponse;
import jakarta.servlet.http.HttpSession;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/users")
@RequiredArgsConstructor
public class AppUserController {
    private final AppUserService appUserService;

    @GetMapping("/me")
    public AppUserCreatedResponse getLoggedInUser() {
        return appUserService.getLoggedInUser();
    }

    @PostMapping("/login")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void login() {
        // This method is only here to trigger the login process
    }

    @PostMapping("/register")
    @ResponseStatus(HttpStatus.CREATED)
    public AppUserCreatedResponse registerUser(@Valid @RequestBody AppUserRequest userRequest) {
        return appUserService.registerUser(userRequest);
    }

    @PostMapping("/logout")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void logout(HttpSession session) {
        session.invalidate();
        SecurityContextHolder.clearContext();
    }

    @GetMapping
    public List<AppUserGetAllResponse> getAllUsers() {
        return appUserService.getAllUsers();
    }

    @GetMapping("/{id}")
    public AppUserCreatedResponse getUserById(@RequestParam long ownId, @RequestParam String role, @PathVariable long id) {
        return appUserService.getUserById(ownId, role, id);
    }

    @PutMapping("/{id}")
    public AppUserCreatedResponse updateUser(@RequestParam long ownId, @RequestParam String role, @PathVariable long id, @Valid @RequestBody AppUserRequest userRequest) {
        return appUserService.updateUser(ownId, role, id, userRequest);
    }
}