package de.hemfeinkost.backend.models;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

@Table(name = "categories")
@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Category {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private long id;

    @Column(name = "name")
    private String name;

    @Column(name = "description", length = 1000)
    private String description;

    @Column(name = "imageUrl")
    private String imageUrl;

    @Column(name = "active")
    private boolean isActive;

    @Column(name = "created-at")
    private LocalDateTime createdAt;

    @Column(name = "updated-at")
    private LocalDateTime updatedAt;
}