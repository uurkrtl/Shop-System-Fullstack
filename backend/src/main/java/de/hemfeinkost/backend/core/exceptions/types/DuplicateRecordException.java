package de.hemfeinkost.backend.core.exceptions.types;

public class DuplicateRecordException extends RuntimeException {
    public DuplicateRecordException(String message) {
        super(message);
    }
}