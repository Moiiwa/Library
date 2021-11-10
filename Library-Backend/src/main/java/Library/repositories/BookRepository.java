package Library.repositories;
import Library.entities.Book;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface BookRepository extends JpaRepository<Book, Long>{

    public Book getByOwnerAndTitle(String owner, String title);

}
