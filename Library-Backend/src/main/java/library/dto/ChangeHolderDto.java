package library.dto;

import lombok.Data;

@Data
public class ChangeHolderDto {
  private Long id;

  private String owner;

  private String holder;
}

