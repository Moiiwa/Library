package Library.services;

import Library.entities.Book;
import Library.repositories.BookRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class BookService {

    @Autowired
    BookRepository repository;

    public void addBook(Book book){
        repository.save(book);
    }

    public Book getBook(String owner, String title){
        return repository.getByOwnerAndTitle(owner, title);
    }
}
