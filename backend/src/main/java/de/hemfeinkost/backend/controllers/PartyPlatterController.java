package de.hemfeinkost.backend.controllers;

import de.hemfeinkost.backend.services.abstracts.PartyPlatterService;
import de.hemfeinkost.backend.services.dtos.requests.PartyPlatterRequest;
import de.hemfeinkost.backend.services.dtos.responses.PartyPlatterCreatedResponse;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/party-platters")
@RequiredArgsConstructor
public class PartyPlatterController {
    private final PartyPlatterService partyPlatterService;

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public PartyPlatterCreatedResponse addPartyPlatter(@Valid @RequestBody PartyPlatterRequest partyPlatterRequest) {
        return partyPlatterService.addPartyPlatter(partyPlatterRequest);
    }
}