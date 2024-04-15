package de.hemfeinkost.backend.services.dtos.responses;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class PartyPlatterGetAllResponse {
    private long id;
    private String name;
    private String description;
    private double price;
    private String size;
    private int displayOrder;
    private boolean isActive;
}