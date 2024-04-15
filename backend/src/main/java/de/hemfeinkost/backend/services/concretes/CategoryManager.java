package de.hemfeinkost.backend.services.concretes;

import de.hemfeinkost.backend.core.exceptions.types.RecordNotFoundException;
import de.hemfeinkost.backend.core.mappers.ModelMapperService;
import de.hemfeinkost.backend.models.Category;
import de.hemfeinkost.backend.repositories.CategoryRepository;
import de.hemfeinkost.backend.services.abstracts.CategoryService;
import de.hemfeinkost.backend.services.dtos.requests.CategoryRequest;
import de.hemfeinkost.backend.services.dtos.responses.CategoryCreatedResponse;
import de.hemfeinkost.backend.services.dtos.responses.CategoryGetAllResponse;
import de.hemfeinkost.backend.services.messages.CategoryMessage;
import de.hemfeinkost.backend.services.rules.CategoryBusinessRules;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;

@Service
@RequiredArgsConstructor
public class CategoryManager implements CategoryService {
    private final CategoryRepository categoryRepository;
    private final ModelMapperService modelMapperService;
    private final CategoryBusinessRules categoryBusinessRules;

    @Override
    public List<CategoryGetAllResponse> getAllCategories() {
        List<Category> categories = categoryRepository.findAll();
        return categories.stream()
                .map(category -> modelMapperService.forResponse()
                        .map(category, CategoryGetAllResponse.class)).toList();
    }

    @Override
    public List<CategoryGetAllResponse> getActiveCategories() {
        List<Category> categories = categoryRepository.findAllByIsActiveTrue();
        return categories.stream()
                .map(category -> modelMapperService.forResponse()
                        .map(category, CategoryGetAllResponse.class)).toList();
    }

    @Override
    public CategoryCreatedResponse getCategoryById(Long id) {
        Category category = categoryRepository.findById(id)
                .orElseThrow(() -> new RecordNotFoundException(CategoryMessage.CATEGORY_NAME_NOT_FOUND));
        return modelMapperService.forResponse().map(category, CategoryCreatedResponse.class);
    }

    @Override
    public CategoryCreatedResponse addCategory(CategoryRequest categoryRequest) {
        categoryBusinessRules.checkIfCategoryNameExists(categoryRequest.getName());
        Category category = modelMapperService.forRequest().map(categoryRequest, Category.class);
        if (category.getImageUrl().isEmpty()) {
            category.setImageUrl("https://img.freepik.com/vektoren-premium/foto-kommt-bald-bilderrahmen_268834-398.jpg");
        }
        category.setActive(true);
        category.setCreatedAt(LocalDateTime.now());
        category = categoryRepository.save(category);
        return modelMapperService.forResponse().map(category, CategoryCreatedResponse.class);
    }

    @Override
    public CategoryCreatedResponse updateCategory(long id, CategoryRequest categoryRequest) {
        categoryBusinessRules.checkIfCategoryNameExists(categoryRequest.getName(), id);
        Category updatedCategory = categoryRepository.findById(id)
                .orElseThrow(() -> new RecordNotFoundException(CategoryMessage.CATEGORY_NAME_NOT_FOUND));
        Category category = modelMapperService.forRequest().map(categoryRequest, Category.class);
        category.setActive(updatedCategory.isActive());
        category.setCreatedAt(updatedCategory.getCreatedAt());
        category.setUpdatedAt(LocalDateTime.now());
        category.setId(id);
        category = categoryRepository.save(category);
        return modelMapperService.forResponse().map(category, CategoryCreatedResponse.class);
    }

    @Override
    public CategoryCreatedResponse changeCategoryStatus(long id, boolean status) {
        categoryBusinessRules.checkIfCategoryHasActiveProducts(id);
        Category category = categoryRepository.findById(id)
                .orElseThrow(() -> new RecordNotFoundException(CategoryMessage.CATEGORY_NAME_NOT_FOUND));
        category.setActive(status);
        category = categoryRepository.save(category);
        return modelMapperService.forResponse().map(category, CategoryCreatedResponse.class);
    }
}