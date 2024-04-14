package de.hemfeinkost.backend.controllers;

import de.hemfeinkost.backend.services.abstracts.ProductService;
import de.hemfeinkost.backend.services.dtos.requests.ProductRequest;
import de.hemfeinkost.backend.services.dtos.responses.ProductCreatedResponse;
import de.hemfeinkost.backend.services.dtos.responses.ProductGetAllResponse;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/products")
@RequiredArgsConstructor
public class ProductController {
    private final ProductService productService;

    @GetMapping
    public List<ProductGetAllResponse> getAllProducts() {
        return productService.getAllProducts();
    }

    @GetMapping("/active")
    public List<ProductGetAllResponse> getActiveProducts() {
        return productService.getActiveProducts();
    }

    @GetMapping("/{id}")
    public ProductCreatedResponse getProductById(@PathVariable long id) {
        return productService.getProductById(id);
    }

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public ProductCreatedResponse addProduct(@Valid @RequestBody ProductRequest productRequest) {
        return productService.addProduct(productRequest);
    }

    @PostMapping("/status/{id}")
    public ProductCreatedResponse changeProductStatus(@PathVariable long id, @RequestParam boolean status) {
        return productService.changeProductStatus(id, status);
    }
}