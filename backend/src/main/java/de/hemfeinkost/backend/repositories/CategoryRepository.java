package de.hemfeinkost.backend.repositories;

import de.hemfeinkost.backend.models.Category;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CategoryRepository extends JpaRepository<Category, Long> {
    boolean existsByName(String categoryName);
}