package de.hemfeinkost.backend.models;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

@Table(name = "party-platters")
@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
public class PartyPlatter {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private long id;

    @Column(name = "name")
    private String name;

    @Column(name = "description", length = 1000)
    private String description;

    @Column(name = "size")
    private String size;

    @Column(name = "price")
    private double price;

    @Column(name = "active")
    private boolean isActive;

    @Column(name = "created-at")
    private LocalDateTime createdAt;

    @Column(name = "updated-at")
    private LocalDateTime updatedAt;
}