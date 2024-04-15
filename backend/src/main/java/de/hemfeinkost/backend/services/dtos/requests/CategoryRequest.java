package de.hemfeinkost.backend.services.dtos.requests;

import jakarta.validation.constraints.PositiveOrZero;
import jakarta.validation.constraints.Size;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class CategoryRequest {
    @Size(min = 2, max = 50, message = "Der Name muss zwischen 2 und 50 Zeichen lang sein")
    private String name;
    @Size(max = 1000, message = "Die Beschreibung darf maximal 1000 Zeichen lang sein")
    private String description;
    @PositiveOrZero(message = "Die Anzeigereihenfolge muss größer oder gleich 0 sein")
    private int displayOrder;
}