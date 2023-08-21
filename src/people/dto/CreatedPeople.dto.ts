import { IsCPF, IsDate } from "brazilian-class-validator";
import { Transform, Type } from "class-transformer";
import { IsArray, IsDateString, IsEmail, IsNotEmpty, IsString, MinDate, ValidateNested } from "class-validator";
import { CreatedAddressDTO } from "src/address/dto/CreatedAddress.dto";
import { CreatedContactDTO } from "src/contact/dto/CreatedContact.dto";

export class CreatedPeopleDTO {

  @IsString({ message: 'O campo name deve ser uma string' })
  @IsNotEmpty({ message: 'O campo name não pode ser vazio' })
  name: string;

  @IsEmail(undefined, { message: 'O e-mail informado é inválido' })
  @IsNotEmpty({ message: 'O campo email não pode ser vazio' })
  email: string;

  @IsDateString(undefined, { message: 'O campo birthDate informado é inválido como uma data' })
  @IsNotEmpty({ message: 'O campo birthDate não pode ser vazio' })
  birthDate: Date;

  @IsCPF({ message: 'O campo "cpf" informado é inválido como CPF' })
  @IsNotEmpty({ message: 'O campo "cpf" não pode ser vazio' })
  cpf: string;

  @ValidateNested()
  @IsArray()
  // @ArrayMinSize(1)
  @Type(() => CreatedAddressDTO)
  addresses: CreatedAddressDTO[];

  @ValidateNested()
  @IsArray()
  // @ArrayMinSize(1)
  @Type(() => CreatedContactDTO)
  contacts: CreatedContactDTO[];
}