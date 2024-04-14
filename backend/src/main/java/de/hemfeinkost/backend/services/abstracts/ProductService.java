package de.hemfeinkost.backend.services.abstracts;

import de.hemfeinkost.backend.services.dtos.requests.ProductRequest;
import de.hemfeinkost.backend.services.dtos.responses.ProductCreatedResponse;
import de.hemfeinkost.backend.services.dtos.responses.ProductGetAllResponse;

import java.util.List;

public interface ProductService {
    List<ProductGetAllResponse> getAllProducts();
    ProductCreatedResponse getProductById(Long id);
    ProductCreatedResponse addProduct(ProductRequest productRequest);
}