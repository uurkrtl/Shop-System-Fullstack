package de.hemfeinkost.backend.services.concretes;

import de.hemfeinkost.backend.models.AppUser;
import de.hemfeinkost.backend.services.abstracts.AppUserService;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.core.userdetails.User;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class UserDetailsManager implements UserDetailsService {
    private final AppUserService appUserService;

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        AppUser appUser = appUserService.getUserByUsername(username);
        return new User(
                appUser.getUsername(),
                appUser.getPassword(),
                List.of(
                        new SimpleGrantedAuthority("ROLE_" + appUser.getRole()))
        );
    }
}