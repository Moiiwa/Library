package library.services;

import library.entities.Book;
import library.repositories.BookRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class BookService {

    @Autowired
    BookRepository repository;

    /**
     * Add book
     * @param book book to add
     */
    public void addBook(Book book) {
        repository.save(book);
    }

    /**
     * Get info about all books
     * @return list of books
     */
    public List<Book> getAllBooks(String owner) {
        return repository.getByOwner(owner);
    }

    /**
     * Get info about the book by its id
     * @param id id of the book
     * @return book
     */
    public Book getBookById(Long id) {
      return repository.getById(id);
    }

}
