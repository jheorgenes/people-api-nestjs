import { IsCEP } from "brazilian-class-validator";
import { IsNotEmpty, IsString } from "class-validator";
import { PeopleEntity } from "src/people/people.entity";

export class CreatedAddressDTO {

  @IsString({ message: 'O campo numberAddress deve ser uma string' })
  @IsNotEmpty({ message: 'O campo numberAddress não pode ser vazio' })
  numberAddress: string;

  @IsString({ message: 'O campo zipCode deve ser uma string' })
  @IsNotEmpty({ message: 'O campo zipCode não pode ser vazio' })
  @IsCEP()
  zipCode: string;

  @IsString({ message: 'O campo street deve ser uma string' })
  @IsNotEmpty({ message: 'O campo street não pode ser vazio' })
  street: string;

  @IsString({ message: 'O campo addressComplement deve ser uma string' })
  addressComplement: string;

  @IsString({ message: 'O campo district deve ser uma string' })
  @IsNotEmpty({ message: 'O campo district não pode ser vazio' })
  district: string;

  @IsString({ message: 'O campo city deve ser uma string' })
  @IsNotEmpty({ message: 'O campo city não pode ser vazio' })
  city: string;

  @IsString({ message: 'O campo state deve ser uma string' })
  @IsNotEmpty({ message: 'O campo state não pode ser vazio' })
  state: string;

  @IsString({ message: 'O campo country deve ser uma string' })
  @IsNotEmpty({ message: 'O campo country não pode ser vazio' })
  country: string;

  people: PeopleEntity;
}