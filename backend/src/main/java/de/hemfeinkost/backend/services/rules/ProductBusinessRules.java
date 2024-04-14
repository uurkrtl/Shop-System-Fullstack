package de.hemfeinkost.backend.services.rules;

import de.hemfeinkost.backend.core.exceptions.types.DuplicateRecordException;
import de.hemfeinkost.backend.models.Product;
import de.hemfeinkost.backend.repositories.ProductRepository;
import de.hemfeinkost.backend.services.messages.ProductMessage;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class ProductBusinessRules {
    private final ProductRepository productRepository;

    public void checkIfProductNameExists(String productName) {
        if (productRepository.existsByName(productName)) {
            throw new DuplicateRecordException(ProductMessage.PRODUCT_NAME_ALREADY_EXISTS);
        }
    }

    public void checkIfProductNameExists(String productName, long id) {
        Product product = productRepository.findById(id)
                .orElseThrow(() -> new RuntimeException(ProductMessage.PRODUCT_NOT_FOUND));
        if(!product.getName().equals(productName) && productRepository.existsByName(productName)) {
            throw new DuplicateRecordException(ProductMessage.PRODUCT_NAME_ALREADY_EXISTS);
        }
    }
}