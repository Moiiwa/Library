package library.repositories;
import library.entities.Book;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface BookRepository extends JpaRepository<Book, Long>{

    public List<Book> getByOwner(String owner);

    public Book getById(Long id);

    public List<Book> getAllBySellingStatus(boolean status);

    public List<Book> getAllByRentingStatus(boolean status);

    public List<Book> getAllBySellingStatusAndOwner(boolean status, String owner);

    public List<Book> getAllByOwner(String owner);

    public List<Book> getAllByHolder(String holder);

}
