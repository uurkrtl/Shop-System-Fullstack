package de.hemfeinkost.backend.services.rules;

import de.hemfeinkost.backend.core.exceptions.types.DuplicateRecordException;
import de.hemfeinkost.backend.core.exceptions.types.HaveActiveProductException;
import de.hemfeinkost.backend.repositories.CategoryRepository;
import de.hemfeinkost.backend.repositories.ProductRepository;
import de.hemfeinkost.backend.services.messages.CategoryMessage;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class CategoryBusinessRules {
    private final CategoryRepository categoryRepository;
    private final ProductRepository productRepository;

    public void checkIfCategoryNameExists(String categoryName) {
        if (categoryRepository.existsByName(categoryName)) {
            throw new DuplicateRecordException(CategoryMessage.CATEGORY_NAME_ALREADY_EXISTS);
        }
    }

    public void checkIfCategoryHasActiveProducts(long categoryId) {
        if(this.productRepository.existsByCategoryIdAndIsActiveTrue(categoryId)) {
            throw new HaveActiveProductException(CategoryMessage.CATEGORY_HAS_ACTIVE_PRODUCTS);
        }
    }
}