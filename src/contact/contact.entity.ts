import { PeopleEntity } from "src/people/people.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: 'contacts' })
export class ContactEntity {
  
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ name: 'description_contact', length: 100, nullable: false })
  descriptionContact: string;
  
  @Column({ name: 'cell_phone', length: 16, nullable: false })
  cellPhone: string;


  @ManyToOne(
    () => PeopleEntity,
    (people) => people.contacts,
    { 
      orphanedRowAction:'delete',
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE'
    }
  )
  people: PeopleEntity;
}