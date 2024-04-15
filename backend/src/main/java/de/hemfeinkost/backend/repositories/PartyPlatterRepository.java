package de.hemfeinkost.backend.repositories;

import de.hemfeinkost.backend.models.PartyPlatter;
import org.springframework.data.domain.Sort;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface PartyPlatterRepository extends JpaRepository<PartyPlatter, Long> {
    List<PartyPlatter> findAllByIsActiveTrue(Sort displayOrder);

    boolean existsByName(String partyPlatterName);

    boolean existsByDisplayOrder(int displayOrder);

    @Query("SELECT COALESCE(MAX(e.displayOrder), 0) FROM PartyPlatter e")
    int findMaxDisplayOrder();
}