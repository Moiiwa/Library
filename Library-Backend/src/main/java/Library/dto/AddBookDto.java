package Library.dto;

import lombok.Data;

import javax.persistence.Column;
import java.sql.Timestamp;

@Data
public class AddBookDto {

    private String author;

    private String owner;

    private String title;

    private String sellingStatus;

    private String publisher;

    private Timestamp publishedDate;

    private String description;

    private Integer pages;

}
