import { IsPhone } from "brazilian-class-validator";
import { IsNotEmpty, IsString } from "class-validator";
import { PeopleEntity } from "src/people/people.entity";

export class CreatedContactDTO {

  @IsString({ message: 'O campo "name" deve ser uma string' })
  @IsNotEmpty({ message: 'O campo "name" não pode ser vazio' })
  descriptionContact: string;
  
  @IsString({ message: 'O campo cellPhone deve ser uma string' })
  @IsNotEmpty({ message: 'O campo cellPhone não pode ser vazio' })
  @IsPhone()
  cellPhone: string;

  people: PeopleEntity;
}