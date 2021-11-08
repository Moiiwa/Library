package Library.controllers;

import Library.dto.BookDto;
import Library.entities.Book;
import Library.services.BookService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;

@Controller
public class BookController {

    @Autowired
    BookService bookService;

    @PostMapping("/add_book")
    public ResponseEntity addBook(@RequestBody BookDto bookDto){
        Book book = new Book();
        book.setAuthor(bookDto.getAuthor());
        book.setTitle(bookDto.getTitle());
        book.setOwner(bookDto.getOwner());
        book.setSellingStatus(bookDto.getSellingStatus());
        bookService.addBook(book);
        return new ResponseEntity("Done",HttpStatus.OK);
    }
}
