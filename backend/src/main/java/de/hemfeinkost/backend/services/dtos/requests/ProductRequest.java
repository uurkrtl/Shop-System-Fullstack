package de.hemfeinkost.backend.services.dtos.requests;

import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Positive;
import jakarta.validation.constraints.Size;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class ProductRequest {
    @Size(min = 2, max = 50, message = "Der Name muss zwischen 2 und 50 Zeichen lang sein")
    private String name;
    @Size(max = 1000, message = "Die Beschreibung darf maximal 1000 Zeichen lang sein")
    private String description;
    @Size(max = 1000, message = "Die Zutatenliste darf maximal 1000 Zeichen lang sein")
    private String ingredients;
    @Positive(message = "Der Preis muss größer als 0 sein")
    private double price;
    private String imageUrl;
    @NotNull(message = "Die Einheit darf nicht leer sein")
    private String unit;
    private long categoryId;
}