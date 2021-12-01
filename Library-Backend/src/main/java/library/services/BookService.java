package library.services;

import library.entities.Book;
import library.repositories.BookRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

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
     * Get info about all books except rented and in rent
     * @return list of books
     */
    public List<Book> getAllBooks(String owner) {
      List<Book> list = repository.getByOwner(owner);
      List<Book> filteredList = list.stream()
        .filter((Book book) -> {
          return book.getOwner().equals(book.getHolder());
        })
        .collect(Collectors.toList());
      return filteredList;
    }

    /**
     * Get info about all books which are rented by other people (user=owner & owner != holder)
     * @return list of books
     */
    public List<Book> getAllRentableBooksOfUser(String owner){
      List<Book> list = repository.getAllByOwner(owner);
      System.out.println(list);
      List<Book> filteredList = list.stream()
                                    .filter((Book book) -> {
                                      return !book.getOwner().equals(book.getHolder());
                                    })
                                    .collect(Collectors.toList());
      return filteredList;
    }

    /**
     * Get info about all books which user rented (user=holder & holder != owner)
     * @return list of books
     */
    public List<Book> getAllRentedBooksOfUser(String holder){
      List<Book> list = repository.getAllByHolder(holder);
      List<Book> filteredList = list.stream()
                                    .filter((Book book) -> {
                                      return !book.getOwner().equals(book.getHolder());
                                    })
                                    .collect(Collectors.toList());
      return filteredList;
    }

    /**
     * Get info about the book by its id
     * @param id id of the book
     * @return book
     */
    public Book getBookById(Long id) {
      return repository.getById(id);
    }

    /**
     * Get list of all sellable books
     * @param
     * @return list of books
     */
    public List<Book> getAllSellableBooks(){
        return repository.getAllBySellingStatus(true);
    }

    /**
     * Get list of all rentable books
     * @param
     * @return list of books
     */
    public List<Book> getAllRentableBooks(){
      List<Book> list = repository.getAllByRentingStatus(true);
      List<Book> filteredList = list.stream()
                                    .filter((Book book) -> {
                                      return book.getOwner().equals(book.getHolder());
                                    })
                                    .collect(Collectors.toList());
      return filteredList;
    }

    public List<Book> getAllSellableBooksOfUser(String owner){
        return repository.getAllBySellingStatusAndOwner(true, owner);
    }

}
