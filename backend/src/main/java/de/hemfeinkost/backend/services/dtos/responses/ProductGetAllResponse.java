package de.hemfeinkost.backend.services.dtos.responses;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class ProductGetAllResponse {
    private long id;
    private String name;
    private String description;
    private double price;
    private String imageUrl;
    private long readCount;
    private String unit;
    private long categoryId;
    private String categoryName;
}