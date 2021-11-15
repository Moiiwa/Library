package Library.controllers;

import Library.dto.AddBookDto;
import Library.dto.GetBookDto;
import Library.entities.Book;
import Library.services.BookService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@CrossOrigin
@Controller
public class BookController {

    @Autowired
    BookService bookService;

    @PostMapping("/add_book")
    public ResponseEntity addBook(@RequestBody AddBookDto addBookDto) {
        Book book = new Book();
        book.setAuthor(addBookDto.getAuthor());
        book.setTitle(addBookDto.getTitle());
        book.setOwner(addBookDto.getOwner());
        book.setSellingStatus(addBookDto.getSellingStatus());
        book.setPublisher(addBookDto.getPublisher());
        book.setPublishedDate(addBookDto.getPublishedDate());
        book.setDescription(addBookDto.getDescription());
        book.setPages(addBookDto.getPages());
        bookService.addBook(book);
        return new ResponseEntity("Done", HttpStatus.OK);
    }

  @GetMapping("/get_books")
  public ResponseEntity<List<Book>> getAllBooks(){
    ResponseEntity response =
      new ResponseEntity(bookService.getAllBooks(),HttpStatus.OK);
    return response;
  }

    @GetMapping("/get_book")
    public ResponseEntity<Book> getBook(@RequestParam Long id){
        ResponseEntity response =
                new ResponseEntity(bookService.getBookById(id), HttpStatus.OK);
        return response;
    }
}
