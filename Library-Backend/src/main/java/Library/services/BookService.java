package Library.services;

import Library.entities.Book;
import Library.repositories.BookRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class BookService {

    @Autowired
    BookRepository repository;

    public void addBook(Book book){
        repository.save(book);
    }

    public List<Book> getAllBooks(){
    return repository.findAll();
  }

    public Book getBook(String owner, String title){
        return repository.getByOwnerAndTitle(owner, title);
    }
}
