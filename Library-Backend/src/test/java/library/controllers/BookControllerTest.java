package library.controllers;

import library.dto.*;
import library.entities.Book;
import library.services.BookService;
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

import static org.junit.Assert.assertNotEquals;
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
        addBookDto.setSellingStatus(false);
        addBookDto.setRentingStatus(false);
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
        book.setSellingStatus(false);
        book.setRentingStatus(false);
        book.setTitle("title");
        bookList.add(book);

        when(bookService.getAllBooks("owner")).thenReturn(bookList);

        ResponseEntity<List<Book>> result = subj.getAllBooks("owner");
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
        book.setSellingStatus(false);
        book.setRentingStatus(false);
        book.setTitle("title");
        book.setId(1337l);

        when(bookService.getBookById(1337l)).thenReturn(book);
        ResponseEntity<Book> result = subj.getBook(1337l);
        assertEquals(result.getBody(),book);
    }

    @Test
    public void testChangeRentStatus() {
      Book book = new Book();
      book.setAuthor("moiwa");
      book.setDescription("description");
      book.setHolder("holder");
      book.setOwner("owner");
      book.setPages(3);
      book.setPublishedDate(Timestamp.valueOf(LocalDateTime.now()));
      book.setPublisher("publisher");
      book.setSellingStatus(false);
      book.setRentingStatus(false);
      book.setTitle("title");
      book.setId(1337l);

      ChangeRentStatusDto changeRentStatusDto = new ChangeRentStatusDto();
      changeRentStatusDto.setId(1337l);
      changeRentStatusDto.setRentStatus(true);
      doNothing().when(bookService).addBook(book);
      when(bookService.getBookById(book.getId())).thenReturn(book);
      ResponseEntity result = subj.changeRentStatus(changeRentStatusDto);
      assertEquals(result.getBody(),"Done");
    }

  @Test
  public void testChangeSellStatus() {
    Book book = new Book();
    book.setAuthor("moiwa");
    book.setDescription("description");
    book.setHolder("holder");
    book.setOwner("owner");
    book.setPages(3);
    book.setPublishedDate(Timestamp.valueOf(LocalDateTime.now()));
    book.setPublisher("publisher");
    book.setSellingStatus(false);
    book.setRentingStatus(false);
    book.setTitle("title");
    book.setId(1337l);

    ChangeSellStatusDto changeSellStatusDto = new ChangeSellStatusDto();
    changeSellStatusDto.setId(1337l);
    changeSellStatusDto.setSellStatus(true);
    doNothing().when(bookService).addBook(book);
    when(bookService.getBookById(book.getId())).thenReturn(book);
    ResponseEntity result = subj.changeSellStatus(changeSellStatusDto);
    assertEquals(result.getBody(),"Done");
  }

  @Test
  public void testGetAllSellableBooks() {
      Book book1 = new Book();
      book1.setAuthor("moiwa");
      book1.setDescription("description");
      book1.setHolder("holder");
      book1.setOwner("owner");
      book1.setPages(3);
      book1.setPublishedDate(Timestamp.valueOf(LocalDateTime.now()));
      book1.setPublisher("publisher");
      book1.setSellingStatus(true);
      book1.setRentingStatus(false);
      book1.setTitle("title");
      book1.setId(1337l);
      Book book2 = new Book();
      book2.setAuthor("moiwa");
      book2.setDescription("description");
      book2.setHolder("holder");
      book2.setOwner("owner");
      book2.setPages(3);
      book2.setPublishedDate(Timestamp.valueOf(LocalDateTime.now()));
      book2.setPublisher("publisher");
      book2.setSellingStatus(true);
      book2.setRentingStatus(false);
      book2.setTitle("title");
      book2.setId(1337l);
      List<Book> books = new ArrayList<>();
      books.add(book1);
      books.add(book2);

      when(bookService.getAllSellableBooks()).thenReturn(books);
      ResponseEntity result = subj.getAllSellableBooks();
      assertEquals(result.getBody(),books);
  }

    @Test
    public void testGetAllRentableBooks() {
        Book book1 = new Book();
        book1.setAuthor("moiwa");
        book1.setDescription("description");
        book1.setHolder("holder");
        book1.setOwner("owner");
        book1.setPages(3);
        book1.setPublishedDate(Timestamp.valueOf(LocalDateTime.now()));
        book1.setPublisher("publisher");
        book1.setSellingStatus(true);
        book1.setRentingStatus(true);
        book1.setTitle("title");
        book1.setId(1337l);
        Book book2 = new Book();
        book2.setAuthor("moiwa");
        book2.setDescription("description");
        book2.setHolder("holder");
        book2.setOwner("owner");
        book2.setPages(3);
        book2.setPublishedDate(Timestamp.valueOf(LocalDateTime.now()));
        book2.setPublisher("publisher");
        book2.setSellingStatus(true);
        book2.setRentingStatus(false);
        book2.setTitle("title");
        book2.setId(1337l);
        List<Book> books = new ArrayList<>();
        books.add(book1);

        when(bookService.getAllRentableBooks()).thenReturn(books);
        ResponseEntity result = subj.getAllRentableBooks();
        assertEquals(result.getBody(),books);
    }

    @Test
    public void testGetAllRentableBooksOf() {
        Book book1 = new Book();
        book1.setAuthor("moiwa");
        book1.setDescription("description");
        book1.setHolder("holder");
        book1.setOwner("owner");
        book1.setPages(3);
        book1.setPublishedDate(Timestamp.valueOf(LocalDateTime.now()));
        book1.setPublisher("publisher");
        book1.setSellingStatus(true);
        book1.setRentingStatus(true);
        book1.setTitle("title");
        book1.setId(1337l);
        Book book2 = new Book();
        book2.setAuthor("moiwa");
        book2.setDescription("description");
        book2.setHolder("holder");
        book2.setOwner("owner");
        book2.setPages(3);
        book2.setPublishedDate(Timestamp.valueOf(LocalDateTime.now()));
        book2.setPublisher("publisher");
        book2.setSellingStatus(true);
        book2.setRentingStatus(false);
        book2.setTitle("title");
        book2.setId(1337l);
        List<Book> books = new ArrayList<>();
        books.add(book1);

        when(bookService.getAllRentableBooksOfUser("owner")).thenReturn(books);
        ResponseEntity result = subj.getAllRentableBooksOfUser("owner");
        assertEquals(result.getBody(),books);
    }

  @Test
  public void buyBook() {
    Book book = new Book();
    book.setAuthor("author");
    book.setDescription("description");
    book.setHolder("moiwa");
    book.setOwner("moiwa");
    book.setPages(3);
    book.setPublishedDate(Timestamp.valueOf(LocalDateTime.now()));
    book.setPublisher("publisher");
    book.setSellingStatus(true);
    book.setRentingStatus(false);
    book.setTitle("title");
    book.setId(1337l);

    BuyBookDto buyBookDto = new BuyBookDto();
    buyBookDto.setId(1337l);
    buyBookDto.setSellingStatus(false);
    buyBookDto.setRentingStatus(false);
    buyBookDto.setHolder("nemoiwa");
    buyBookDto.setOwner("nemoiwa");
    doNothing().when(bookService).addBook(book);
    when(bookService.getBookById(book.getId())).thenReturn(book);
    ResponseEntity result = subj.buyBook(buyBookDto);
    assertEquals(result.getBody(),"Done");
  }

  @Test
  public void rentBook() {
    Book book = new Book();
    book.setAuthor("author");
    book.setDescription("description");
    book.setHolder("moiwa");
    book.setOwner("moiwa");
    book.setPages(3);
    book.setPublishedDate(Timestamp.valueOf(LocalDateTime.now()));
    book.setPublisher("publisher");
    book.setSellingStatus(true);
    book.setRentingStatus(false);
    book.setTitle("title");
    book.setId(1337l);

    RentBookDto rentBookDto = new RentBookDto();
    rentBookDto.setId(1337l);
    rentBookDto.setSellingStatus(false);
    rentBookDto.setRentingStatus(false);
    rentBookDto.setHolder("nemoiwa");
    doNothing().when(bookService).addBook(book);
    when(bookService.getBookById(book.getId())).thenReturn(book);
    ResponseEntity result = subj.rentBook(rentBookDto);
    assertEquals(result.getBody(),"Done");
  }

}
