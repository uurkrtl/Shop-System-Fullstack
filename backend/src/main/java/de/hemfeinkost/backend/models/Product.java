package de.hemfeinkost.backend.models;

import de.hemfeinkost.backend.models.enums.Unit;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

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

    @Column(name = "imageUrl")
    private String imageUrl;

    @Column(name = "readCount")
    private long readCount;

    @Column(name = "unit")
    private Unit unit;

    @ManyToOne
    @JoinColumn(name = "category_id")
    private Category category;
}