import { 
  Entity, 
  Column, 
  CreateDateColumn, 
  DeleteDateColumn, 
  PrimaryGeneratedColumn, 
  UpdateDateColumn, 
  OneToMany
} from "typeorm";
import { AddressEntity } from "src/address/address.entity";
import { ContactEntity } from "src/contact/contact.entity";


@Entity({ name: 'peoples' })
export class PeopleEntity {

  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ name: 'name', length: 150, nullable: false })
  name: string;

  @Column({ name: 'email', length: 100, nullable: false })
  email: string;

  @Column({ name: 'birth_date', nullable: false })
  birthDate: Date;

  @Column({ name: 'cpf', length: 100, nullable: false })
  cpf: string;

  @OneToMany(
    () => AddressEntity, 
    (addressEntity) => addressEntity.people,
    { cascade: true, eager: true }
  )
  addresses: AddressEntity[];

  @OneToMany(
    () => ContactEntity, 
    (contactEntity) => contactEntity.people,
    { cascade: true, eager: true }
  )
  contacts: ContactEntity[];

  @CreateDateColumn({ name: 'created_at' })
  createdAt: string;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: string;

  @DeleteDateColumn({ name: 'deleted_at' })
  deletedAt: string;
}