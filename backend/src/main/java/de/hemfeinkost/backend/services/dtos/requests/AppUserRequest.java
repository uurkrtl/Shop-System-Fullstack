package de.hemfeinkost.backend.services.dtos.requests;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class AppUserRequest {
    @Size(min = 2, max = 50, message = "Der Benutzername muss zwischen 2 und 50 Zeichen lang sein")
    private String username;
    @Size(min = 8, max = 50, message = "Das Passwort muss zwischen 8 und 50 Zeichen lang sein")
    private String password;
    @NotNull(message = "Die Rolle darf nicht leer sein")
    private String role;
    @Size(min = 2, max = 50, message = "Der Vorname muss zwischen 2 und 50 Zeichen lang sein")
    private String firstName;
    @Size(min = 2, max = 50, message = "Der Nachname muss zwischen 2 und 50 Zeichen lang sein")
    private String lastName;
    @Email(message = "Die E-Mail-Adresse ist ungültig")
    private String email;
    private String imageUrl;
}