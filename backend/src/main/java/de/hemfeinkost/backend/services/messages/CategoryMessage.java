package de.hemfeinkost.backend.services.messages;

public class CategoryMessage {
    private CategoryMessage() {}
    public static final String CATEGORY_NAME_ALREADY_EXISTS = "Kategorie existiert bereits";
    public static final String CATEGORY_NAME_NOT_FOUND = "Kategorie nicht gefunden";
    public static final String CATEGORY_HAS_ACTIVE_PRODUCTS = "Kategorie hat aktives Produkt. Eine Kategorie mit einem aktiven Produkt kann nicht passiv gemacht werden.";
    public static final String DISPLAY_ORDER_ALREADY_EXISTS = "Anzeige Reihenfolge existiert bereits. Geben Sie Null ein, um zur letzten Zeile hinzuzufügen.";
}