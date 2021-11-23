package library.controllers;

import library.dto.LoginDto;
import library.entities.User;
import library.services.UserService;
import lombok.extern.slf4j.Slf4j;
import lombok.var;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@Slf4j
@RestController
public class UserController {

    @Autowired
    PasswordEncoder passwordEncoder;

    @Autowired
    UserService userService;

    @PostMapping("/register")
    public ResponseEntity<String> register(@RequestBody User userDto){
        try {
            if (userService.getUserByUsername(userDto.getUsername()) != null){
                return new ResponseEntity<>(
                        "User with such username already exists", HttpStatus.FOUND);
            } else {
                userDto.setPassword(passwordEncoder.encode(userDto.getPassword()));
                userService.addUser(userDto);
                return new ResponseEntity<>(
                        "User created", HttpStatus.OK);
            }
        } catch (Exception e){
            log.error(e.getMessage());
            return null;
        }
    }

    @PostMapping("/login")
    public ResponseEntity<User> login(@RequestBody LoginDto loginDto){
        HttpHeaders headers = new HttpHeaders();
            var dbUser = userService.getUserByUsername(loginDto.getUsername());
            if (passwordEncoder.matches(loginDto.getPassword(), dbUser.getPassword())){
                dbUser.setPassword("hidden");
                return new ResponseEntity<>(dbUser, HttpStatus.OK);
            } else {
                return new ResponseEntity<>(dbUser, HttpStatus.UNAUTHORIZED);
            }
    }

}
