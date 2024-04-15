package de.hemfeinkost.backend.repositories;

import de.hemfeinkost.backend.models.Category;
import org.springframework.data.domain.Sort;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface CategoryRepository extends JpaRepository<Category, Long> {
    boolean existsByName(String categoryName);

    List<Category> findAllByIsActiveTrue(Sort displayOrder);

    @Query("SELECT COALESCE(MAX(e.displayOrder), 0) FROM Category e")
    int findMaxDisplayOrder();

    boolean existsByDisplayOrder(int displayOrder);
}