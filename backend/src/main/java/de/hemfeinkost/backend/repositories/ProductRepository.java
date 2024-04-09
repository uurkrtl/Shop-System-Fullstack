package de.hemfeinkost.backend.repositories;

import de.hemfeinkost.backend.models.Product;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ProductRepository extends JpaRepository<Product, Long> {
    boolean existsByName(String productName);
}