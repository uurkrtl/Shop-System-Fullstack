package de.hemfeinkost.backend.services.dtos.responses;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class PartyPlatterCreatedResponse {
    private long id;
    private String name;
    private String description;
    private String size;
}