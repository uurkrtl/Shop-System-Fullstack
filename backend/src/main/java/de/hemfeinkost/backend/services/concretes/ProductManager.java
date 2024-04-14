package de.hemfeinkost.backend.services.concretes;

import de.hemfeinkost.backend.core.exceptions.types.RecordNotFoundException;
import de.hemfeinkost.backend.core.mappers.ModelMapperService;
import de.hemfeinkost.backend.models.Category;
import de.hemfeinkost.backend.models.Product;
import de.hemfeinkost.backend.repositories.CategoryRepository;
import de.hemfeinkost.backend.repositories.ProductRepository;
import de.hemfeinkost.backend.services.abstracts.ProductService;
import de.hemfeinkost.backend.services.dtos.requests.ProductRequest;
import de.hemfeinkost.backend.services.dtos.responses.ProductCreatedResponse;
import de.hemfeinkost.backend.services.dtos.responses.ProductGetAllResponse;
import de.hemfeinkost.backend.services.messages.CategoryMessage;
import de.hemfeinkost.backend.services.messages.ProductMessage;
import de.hemfeinkost.backend.services.rules.ProductBusinessRules;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class ProductManager implements ProductService {
    private final ProductRepository productRepository;
    private final CategoryRepository categoryRepository;
    private final ModelMapperService modelMapperService;
    private final ProductBusinessRules productBusinessRules;

    @Override
    public List<ProductGetAllResponse> getAllProducts() {
        List<Product> products = productRepository.findAll(Sort.by(Sort.Direction.ASC, "name"));
        return products.stream()
                .map(product -> modelMapperService.forResponse().map(product, ProductGetAllResponse.class))
                .toList();
    }

    @Override
    public ProductCreatedResponse getProductById(Long id) {
        Product product = productRepository.findById(id)
                .orElseThrow(() -> new RecordNotFoundException(ProductMessage.PRODUCT_NOT_FOUND));
        return modelMapperService.forResponse().map(product, ProductCreatedResponse.class);
    }

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