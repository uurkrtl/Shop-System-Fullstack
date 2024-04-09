package de.hemfeinkost.backend.services.dtos.responses;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class CategoryGetAllResponse {
    private long id;
    private String name;
    private List<ProductGetAllResponse> products;
}