package library.dto;

import lombok.Data;

import java.sql.Timestamp;

@Data
public class AddBookDto {

    private String author;

    private String owner;

    private String title;

    private Boolean sellingStatus;

    private Boolean rentingStatus;

    private String holder;

    private String publisher;

    private Timestamp publishedDate;

    private String description;

    private Integer pages;

}
