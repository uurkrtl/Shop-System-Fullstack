package de.hemfeinkost.backend.services.dtos.responses;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class AppUserCreatedResponse {
    private long id;
    private String username;
    private String role;
    private String firstName;
    private String lastName;
    private String email;
    private String imageUrl;
    private LocalDateTime createdAt;
    private LocalDateTime updatedAt;
}