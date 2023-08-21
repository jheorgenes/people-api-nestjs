
import { IsCPF, IsDate } from 'brazilian-class-validator';
import { Type } from 'class-transformer';
import { IsArray, IsDateString, IsEmail, IsNotEmpty, IsOptional, IsString, ValidateNested } from "class-validator";
import { CreatedAddressDTO } from 'src/address/dto/CreatedAddress.dto';
import { CreatedContactDTO } from 'src/contact/dto/CreatedContact.dto';
export class UpdatedPeopleDTO {

  @IsString({ message: 'O campo name deve ser uma string' })
  @IsNotEmpty({ message: 'O campo name não pode ser vazio' })
  @IsOptional()
  name: string;

  @IsEmail(undefined, { message: 'O e-mail informado é inválido' })
  @IsOptional()
  email: string;

  @IsDateString(undefined, { message: 'O campo birthDate informado é inválido como uma data' })
  @IsNotEmpty({ message: 'O campo birthDate não pode ser vazio' })
  @IsOptional()
  birthDate: Date;

  @IsCPF()
  @IsOptional()
  cpf: string;

  @ValidateNested()
  @IsArray()
  // @ArrayMinSize(1)
  @Type(() => CreatedAddressDTO)
  @IsOptional()
  addresses: CreatedAddressDTO[];

  @ValidateNested()
  @IsArray()
  @Type(() => CreatedContactDTO)
  @IsOptional()
  contacts: CreatedContactDTO[];
}