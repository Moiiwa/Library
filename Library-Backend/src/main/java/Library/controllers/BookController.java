package Library.controllers;

import Library.dto.AddBookDto;
import Library.dto.GetBookDto;
import Library.entities.Book;
import Library.services.BookService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

@CrossOrigin
@Controller
public class BookController {

    @Autowired
    BookService bookService;

    @PostMapping("/add_book")
    public ResponseEntity addBook(@RequestBody AddBookDto addBookDto){
        Book book = bookService.getBook(addBookDto.getOwner(),addBookDto.getTitle());
        if (book == null) {
            book = new Book();
            book.setAuthor(addBookDto.getAuthor());
            book.setTitle(addBookDto.getTitle());
            book.setOwner(addBookDto.getOwner());
            book.setSellingStatus(addBookDto.getSellingStatus());
            book.setNumberOfCopies(1);
            bookService.addBook(book);
        } else {
            book.setNumberOfCopies(book.getNumberOfCopies() + 1);
            bookService.addBook(book);
        }
        return new ResponseEntity("Done",HttpStatus.OK);
    }

    @GetMapping("/get_book")
    public ResponseEntity getBook(@RequestBody GetBookDto getBookDto){
        ResponseEntity response =
                new ResponseEntity(bookService.getBook(getBookDto.getOwner(), getBookDto.getTitle()),HttpStatus.OK);
        return response;
    }
}
