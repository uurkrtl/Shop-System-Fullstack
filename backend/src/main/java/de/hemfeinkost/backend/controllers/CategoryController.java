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

    @GetMapping("/active")
    public List<CategoryGetAllResponse> getActiveCategories() {
        return categoryService.getActiveCategories();
    }

    @GetMapping("/{id}")
    public CategoryCreatedResponse getCategoryById(@PathVariable Long id) {
        return categoryService.getCategoryById(id);
    }

    @PostMapping
    public CategoryCreatedResponse addCategory(@Valid @RequestBody CategoryRequest categoryRequest) {
        return categoryService.addCategory(categoryRequest);
    }

    @PutMapping("/{id}")
    public CategoryCreatedResponse updateCategory(@PathVariable long id, @Valid @RequestBody CategoryRequest categoryRequest) {
        return categoryService.updateCategory(id, categoryRequest);
    }

    @PutMapping("/status/{id}")
    public CategoryCreatedResponse changeCategoryStatus(@PathVariable long id, @RequestParam boolean status) {
        return categoryService.changeCategoryStatus(id, status);
    }
}