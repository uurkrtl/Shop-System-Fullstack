package de.hemfeinkost.backend.services.concretes;

import de.hemfeinkost.backend.core.mappers.ModelMapperService;
import de.hemfeinkost.backend.models.Category;
import de.hemfeinkost.backend.models.Product;
import de.hemfeinkost.backend.repositories.CategoryRepository;
import de.hemfeinkost.backend.repositories.ProductRepository;
import de.hemfeinkost.backend.services.abstracts.ProductService;
import de.hemfeinkost.backend.services.dtos.requests.ProductRequest;
import de.hemfeinkost.backend.services.dtos.responses.ProductCreatedResponse;
import de.hemfeinkost.backend.services.messages.CategoryMessage;
import de.hemfeinkost.backend.services.rules.ProductBusinessRules;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class ProductManager implements ProductService {
    private final ProductRepository productRepository;
    private final CategoryRepository categoryRepository;
    private final ModelMapperService modelMapperService;
    private final ProductBusinessRules productBusinessRules;

    @Override
    public ProductCreatedResponse addProduct(ProductRequest productRequest) {
        productBusinessRules.checkIfProductNameExists(productRequest.getName());
        Product product = modelMapperService.forRequest().map(productRequest, Product.class);
        Category selectedCategory = categoryRepository.findById(productRequest.getCategoryId())
                .orElseThrow(() -> new RuntimeException(CategoryMessage.CATEGORY_NAME_NOT_FOUND));
        product.setCategory(selectedCategory);
        product.setReadCount(0);
        if (product.getImageUrl().isEmpty()) {
            product.setImageUrl("https://img.freepik.com/vektoren-premium/foto-kommt-bald-bilderrahmen_268834-398.jpg");
        }
        product = productRepository.save(product);
        return modelMapperService.forResponse().map(product, ProductCreatedResponse.class);
    }
}