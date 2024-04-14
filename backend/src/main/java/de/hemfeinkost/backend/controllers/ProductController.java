package de.hemfeinkost.backend.controllers;

import de.hemfeinkost.backend.services.abstracts.ProductService;
import de.hemfeinkost.backend.services.dtos.requests.ProductRequest;
import de.hemfeinkost.backend.services.dtos.responses.ProductCreatedResponse;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/products")
@RequiredArgsConstructor
public class ProductController {
    private final ProductService productService;

    @GetMapping("/{id}")
    public ProductCreatedResponse getProductById(@PathVariable Long id) {
        return productService.getProductById(id);
    }

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public ProductCreatedResponse addProduct(@Valid @RequestBody ProductRequest productRequest) {
        return productService.addProduct(productRequest);
    }
}