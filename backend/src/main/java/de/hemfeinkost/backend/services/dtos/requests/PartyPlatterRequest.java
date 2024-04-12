package de.hemfeinkost.backend.services.dtos.requests;

import jakarta.validation.constraints.Positive;
import jakarta.validation.constraints.Size;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class PartyPlatterRequest {
    @Size(min = 2, max = 50, message = "Der Name muss zwischen 2 und 50 Zeichen lang sein")
    private String name;
    @Size(min = 2, max = 50, message = "Die Beschreibung muss zwischen 2 und 50 Zeichen lang sein")
    private String description;
    @Size(min = 2, max = 50, message = "Die Größe muss zwischen 2 und 50 Zeichen lang sein")
    private String size;
    @Positive(message = "Der Preis muss größer als 0 sein")
    private double price;
}