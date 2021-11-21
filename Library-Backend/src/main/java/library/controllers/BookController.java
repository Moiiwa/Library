package library.controllers;

import library.dto.AddBookDto;
import library.dto.ChangeRentStatusDto;
import library.dto.ChangeSellStatusDto;
import library.dto.SellRentBookDto;
import library.entities.Book;
import library.services.BookService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin
@RestController
public class BookController {

    @Autowired
    BookService bookService;

    /**
     * Endpoint for adding a book
     * @param addBookDto
     * @return returns http response with "Done" message if everything is ok
     */
    @PostMapping("/add_book")
    public ResponseEntity addBook(@RequestBody AddBookDto addBookDto) {
        Book book = new Book();
        book.setAuthor(addBookDto.getAuthor());
        book.setTitle(addBookDto.getTitle());
        book.setOwner(addBookDto.getOwner());
        book.setSellingStatus(addBookDto.getSellingStatus());
        book.setRentingStatus(addBookDto.getRentingStatus());
        book.setHolder(addBookDto.getHolder());
        book.setPublisher(addBookDto.getPublisher());
        book.setPublishedDate(addBookDto.getPublishedDate());
        book.setDescription(addBookDto.getDescription());
        book.setPages(addBookDto.getPages());
        bookService.addBook(book);
        return new ResponseEntity("Done", HttpStatus.OK);
    }

    /**
     * Endpoint to get all the books
     * @return list of books
     */
    @GetMapping("/get_books")
    public ResponseEntity<List<Book>> getAllBooks() {
        ResponseEntity response =
                new ResponseEntity(bookService.getAllBooks(), HttpStatus.OK);
        return response;
    }

    /**
     * Endpoint for getting a book by id
     * @param id id of a book
     * @return book
     */
    @GetMapping("/get_book")
    public ResponseEntity<Book> getBook(@RequestParam Long id) {
        ResponseEntity response =
                new ResponseEntity(bookService.getBookById(id), HttpStatus.OK);
        return response;
    }

    /**
     * Endpoint to sell or rent book, depending on field "transactionType"
     * Sell - to sell, Rent - to rent
     * @param body
     * @return
     */
    @PostMapping("/sell_rent_book")
    public ResponseEntity sellBook(@RequestBody SellRentBookDto body){
        Book book = bookService.getBookById(body.getBookId());
        if ("Sell".equals(body.getTransactionType())) {
            book.setOwner(body.getBuyer());
        }
        if ("Sell".equals(body.getTransactionType()) || "Rent".equals(body.getTransactionType())){
            book.setHolder(body.getBuyer());
        } else {
            return new ResponseEntity("Wrong transaction type",HttpStatus.BAD_REQUEST);
        }
        bookService.addBook(book);
        return new ResponseEntity("Done", HttpStatus.OK);
    }

  /**
   * Endpoint to change the rent status of the book
   * @param body with id and rent status
   * @return ok status
   */
  @PostMapping("/rent_status")
  public ResponseEntity changeRentStatus(@RequestBody ChangeRentStatusDto body){
    Book book = bookService.getBookById(body.getId());
    book.setRentingStatus(body.getRentStatus());
    bookService.addBook(book);
    return new ResponseEntity("Done", HttpStatus.OK);
  }

  /**
   * Endpoint to change the sell status of the book
   * @param body with id and sell status
   * @return ok status
   */
  @PostMapping("/sell_status")
  public ResponseEntity changeSellStatus(@RequestBody ChangeSellStatusDto body){
    Book book = bookService.getBookById(body.getId());
    book.setSellingStatus(body.getSellStatus());
    bookService.addBook(book);
    return new ResponseEntity("Done", HttpStatus.OK);
  }

}
