package de.hemfeinkost.backend.controllers;

import de.hemfeinkost.backend.services.abstracts.CategoryService;
import de.hemfeinkost.backend.services.dtos.requests.CategoryRequest;
import de.hemfeinkost.backend.services.dtos.responses.CategoryCreatedResponse;
import de.hemfeinkost.backend.services.dtos.responses.CategoryGetAllResponse;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/categories")
@RequiredArgsConstructor
public class CategoryController {
    private final CategoryService categoryService;

    @GetMapping
    public List<CategoryGetAllResponse> getAllCategories() {
        return categoryService.getAllCategories();
    }

    @PostMapping
    public CategoryCreatedResponse addCategory(@Valid @RequestBody CategoryRequest categoryRequest) {
        return categoryService.addCategory(categoryRequest);
    }
}