package library.repositories;
import library.entities.Book;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface BookRepository extends JpaRepository<Book, Long>{

    public List<Book> getByOwner(String owner);

    public Book getById(Long id);

}
