package de.hemfeinkost.backend.repositories;

import de.hemfeinkost.backend.models.PartyPlatter;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface PartyPlatterRepository extends JpaRepository<PartyPlatter, Long> {
    List<PartyPlatter> findAllByIsActiveTrue();
}