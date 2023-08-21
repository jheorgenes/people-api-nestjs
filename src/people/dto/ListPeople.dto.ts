import { ContactEntity } from "src/contact/contact.entity";

class ListContactDTO {
  descriptionContact: string;
  cellPhone: string;
}

export class ListPeopleDTO {
  constructor(
    readonly id: string,
    readonly name: string,
    readonly contacts: ListContactDTO[]
  ) {}
}