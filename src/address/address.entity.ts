import { PeopleEntity } from "src/people/people.entity";
import { 
  Entity, 
  CreateDateColumn, 
  DeleteDateColumn, 
  UpdateDateColumn, 
  PrimaryGeneratedColumn,
  Column,
  ManyToOne
} from "typeorm";

@Entity({ name: 'addresses' })
export class AddressEntity {

  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ name: 'number_address', nullable: false })
  numberAddress: string;

  @Column({ name: 'zip_code', length: 9, nullable: false })
  zipCode: string;

  @Column({ name: 'street', length: 250, nullable: false })
  street: string;

  @Column({ name: 'address_complement', length: 250, nullable: false })
  addressComplement: string;

  @Column({ name: 'district', length: 150, nullable: false })
  district: string;

  @Column({ name: 'city', length: 150, nullable: false })
  city: string;

  @Column({ name: 'state', length: 150, nullable: false })
  state: string;

  @Column({ name: 'country', length: 150, nullable: false })
  country: string;

  @ManyToOne(
    () => PeopleEntity,
    (people) => people.addresses,
    { 
      orphanedRowAction:'delete',
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE'
    }
  )
  people: PeopleEntity;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: string;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: string;

  @DeleteDateColumn({ name: 'deleted_at' })
  deletedAt: string;
}