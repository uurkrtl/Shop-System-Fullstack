package de.hemfeinkost.backend.core.exceptions.types;

public class RecordNotFoundException extends RuntimeException {
    public RecordNotFoundException(String message) {
        super(message);
    }
}