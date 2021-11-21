package library.entities;

import lombok.Data;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import java.sql.Timestamp;

@Entity(name = "books")
@Data
public class Book {

    @Id
    @Column
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column
    private String title;

    @Column
    private String author;

    @Column
    private String owner;

    @Column(name = "selling_status")
    private Boolean sellingStatus;

    @Column(name = "renting_status")
    private Boolean rentingStatus;

    @Column
    private String holder;

    @Column(name = "publisher")
    private String publisher;

    @Column(name = "published_date")
    private Timestamp publishedDate;

    @Column(name = "description")
    private String description;

    @Column(name = "pages")
    private Integer pages;
}
