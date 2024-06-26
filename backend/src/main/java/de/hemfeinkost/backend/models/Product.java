package de.hemfeinkost.backend.models;

import de.hemfeinkost.backend.models.enums.Unit;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

@Table(name = "products")
@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Product {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private long id;

    @Column(name = "name")
    private String name;

    @Column(name = "description", length = 1000)
    private String description;

    @Column(name = "ingredients", length = 1000)
    private String ingredients;

    @Column(name = "price")
    private double price;

    @Column(name = "image-url")
    private String imageUrl;

    @Column(name = "read-count")
    private long readCount;

    @Column(name = "unit")
    private Unit unit;

    @ManyToOne
    @JoinColumn(name = "category-id")
    private Category category;

    @Column(name = "active")
    private boolean isActive;

    @Column(name = "created-at")
    private LocalDateTime createdAt;

    @Column(name = "updated-at")
    private LocalDateTime updatedAt;
}