package de.hemfeinkost.backend.services.abstracts;

import de.hemfeinkost.backend.services.dtos.requests.CategoryRequest;
import de.hemfeinkost.backend.services.dtos.responses.CategoryCreatedResponse;
import de.hemfeinkost.backend.services.dtos.responses.CategoryGetAllResponse;

import java.util.List;

public interface CategoryService {
    List<CategoryGetAllResponse> getAllCategories();
    List<CategoryGetAllResponse> getActiveCategories();
    CategoryCreatedResponse getCategoryById(Long id);
    CategoryCreatedResponse addCategory(CategoryRequest categoryRequest);
}