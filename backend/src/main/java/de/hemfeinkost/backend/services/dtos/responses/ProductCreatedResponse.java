package de.hemfeinkost.backend.services.dtos.responses;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class ProductCreatedResponse {
    private long id;
    private String name;
    private String description;
    private String ingredients;
    private double price;
    private String imageUrl;
    private long readCount;
    private String unit;
    private long categoryId;
    private String categoryName;
    private boolean isActive;
    private LocalDateTime createdAt;
    private LocalDateTime updatedAt;
}