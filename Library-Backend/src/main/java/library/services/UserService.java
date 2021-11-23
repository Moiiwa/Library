package library.services;

import library.entities.User;
import library.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserService {

    @Autowired
    UserRepository repository;

    public void addUser(User user){
        repository.save(user);
    }

    public User getUserByUsername(String username){
        return repository.findUserByUsername(username);
    }
}
