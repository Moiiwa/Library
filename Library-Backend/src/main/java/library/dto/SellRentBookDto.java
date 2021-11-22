package library.dto;

import lombok.Data;

@Data
public class SellRentBookDto {

    private Long bookId;

    private String buyer;

    private String transactionType;
}
