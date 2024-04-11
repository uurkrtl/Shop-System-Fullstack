package de.hemfeinkost.backend.services.dtos.responses;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class CategoryCreatedResponse {
    private long id;
    private String name;
    private String description;
    private String imageUrl;
    private List<ProductGetAllResponse> products;
}