package library.dto;

import lombok.Data;

@Data
public class RentBookDto {

  private Long id;

  private String holder;

  private Boolean sellingStatus;

  private Boolean rentingStatus;
}
