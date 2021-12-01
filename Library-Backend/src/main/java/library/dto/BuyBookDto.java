package library.dto;

import lombok.Data;

@Data
public class BuyBookDto {

  private Long id;

  private String owner;

  private String holder;

  private Boolean sellingStatus;

  private Boolean rentingStatus;
}
