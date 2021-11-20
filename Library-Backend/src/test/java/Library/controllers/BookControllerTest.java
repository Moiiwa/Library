package Library.controllers;

import Library.dto.AddBookDto;
import Library.dto.SellRentBookDto;
import Library.entities.Book;
import Library.services.BookService;
import junit.framework.TestCase;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.MockitoJUnitRunner;
import org.springframework.http.ResponseEntity;

import java.sql.Timestamp;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.doNothing;
import static org.mockito.Mockito.when;
import static org.junit.Assert.assertEquals;


@RunWith(MockitoJUnitRunner.class)
public class BookControllerTest{

    @InjectMocks
    BookController subj;

    @Mock
    BookService bookService;

    @Test
    public void testAddBook() {
        AddBookDto addBookDto = new AddBookDto();
        addBookDto.setAuthor("moiwa");
        addBookDto.setDescription("description");
        addBookDto.setHolder("holder");
        addBookDto.setOwner("owner");
        addBookDto.setPages(3);
        addBookDto.setPublishedDate(Timestamp.valueOf(LocalDateTime.now()));
        addBookDto.setPublisher("publisher");
        addBookDto.setSellingStatus("status");
        addBookDto.setTitle("title");

        doNothing().when(bookService).addBook(any());

        ResponseEntity result = subj.addBook(addBookDto);
        assertEquals(result.getBody(),"Done");
    }

    @Test
    public void testGetAllBooks() {
        List<Book> bookList = new ArrayList<>();
        Book book = new Book();
        book.setAuthor("moiwa");
        book.setDescription("description");
        book.setHolder("holder");
        book.setOwner("owner");
        book.setPages(3);
        book.setPublishedDate(Timestamp.valueOf(LocalDateTime.now()));
        book.setPublisher("publisher");
        book.setSellingStatus("status");
        book.setTitle("title");
        bookList.add(book);

        when(bookService.getAllBooks()).thenReturn(bookList);

        ResponseEntity<List<Book>> result = subj.getAllBooks();
        assertEquals(result.getBody().size(), 1);
        assertEquals(result.getBody().get(0), book);
    }

    @Test
    public void testGetBook() {
        Book book = new Book();
        book.setAuthor("moiwa");
        book.setDescription("description");
        book.setHolder("holder");
        book.setOwner("owner");
        book.setPages(3);
        book.setPublishedDate(Timestamp.valueOf(LocalDateTime.now()));
        book.setPublisher("publisher");
        book.setSellingStatus("status");
        book.setTitle("title");
        book.setId(1337l);

        when(bookService.getBookById(1337l)).thenReturn(book);
        ResponseEntity<Book> result = subj.getBook(1337l);
        assertEquals(result.getBody(),book);
    }

    @Test
    public void testSellBook() {
        Book book = new Book();
        book.setAuthor("moiwa");
        book.setDescription("description");
        book.setHolder("holder");
        book.setOwner("owner");
        book.setPages(3);
        book.setPublishedDate(Timestamp.valueOf(LocalDateTime.now()));
        book.setPublisher("publisher");
        book.setSellingStatus("status");
        book.setTitle("title");
        book.setId(1337l);

        SellRentBookDto sellRentBookDto = new SellRentBookDto();
        sellRentBookDto.setBookId(1337l);
        sellRentBookDto.setBuyer("not moiwa");
        sellRentBookDto.setTransactionType("Sell");
        doNothing().when(bookService).addBook(book);
        when(bookService.getBookById(book.getId())).thenReturn(book);
        ResponseEntity result = subj.sellBook(sellRentBookDto);
        assertEquals(result.getBody(),"Done");
    }

    @Test
    public void testSellWithIncorrectType() {
        Book book = new Book();
        book.setAuthor("moiwa");
        book.setDescription("description");
        book.setHolder("holder");
        book.setOwner("owner");
        book.setPages(3);
        book.setPublishedDate(Timestamp.valueOf(LocalDateTime.now()));
        book.setPublisher("publisher");
        book.setSellingStatus("status");
        book.setTitle("title");
        book.setId(1337l);

        SellRentBookDto sellRentBookDto = new SellRentBookDto();
        sellRentBookDto.setBookId(1337l);
        sellRentBookDto.setBuyer("not moiwa");
        sellRentBookDto.setTransactionType("blabla");
        doNothing().when(bookService).addBook(book);
        when(bookService.getBookById(book.getId())).thenReturn(book);
        ResponseEntity result = subj.sellBook(sellRentBookDto);
        assertEquals(result.getBody(),"Wrong transaction type");
    }
}