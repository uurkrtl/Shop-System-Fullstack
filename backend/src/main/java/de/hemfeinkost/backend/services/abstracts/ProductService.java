package de.hemfeinkost.backend.services.abstracts;

import de.hemfeinkost.backend.services.dtos.requests.ProductRequest;
import de.hemfeinkost.backend.services.dtos.responses.ProductCreatedResponse;

public interface ProductService {
    ProductCreatedResponse addProduct(ProductRequest productRequest);
}