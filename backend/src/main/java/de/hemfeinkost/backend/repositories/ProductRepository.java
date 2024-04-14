package de.hemfeinkost.backend.repositories;

import de.hemfeinkost.backend.models.Product;
import org.springframework.data.domain.Sort;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface ProductRepository extends JpaRepository<Product, Long> {
    boolean existsByName(String productName);

    List<Product> findAllByIsActive(boolean status, Sort name);
}