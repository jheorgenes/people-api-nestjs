import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { v4 as uuid } from 'uuid';
import { PeopleEntity } from "./people.entity";
import { Repository } from "typeorm";
import { ListPeopleDTO } from "./dto/ListPeople.dto";
import { UpdatedPeopleDTO } from "./dto/UpdatedPeople.dto";
import { CreatedPeopleDTO } from "./dto/CreatedPeople.dto";

@Injectable()
export class PeopleService {

  constructor(
    @InjectRepository(PeopleEntity)
    private readonly repository: Repository<PeopleEntity>
  ) {}

  async listObject() {
    const objSaved = await this.repository.find();
    const objList = objSaved.map(
      (obj) => new ListPeopleDTO(obj.id, obj.name, obj.contacts)
    );
    return objList;
  }

  // async create(people: PeopleEntity) {
  //   await this.repository.save(people);
  // }
  async create(people: CreatedPeopleDTO) {
    const entity = new PeopleEntity();
    entity.id = uuid();
    entity.name = people.name;
    entity.email = people.email;
    entity.cpf = people.cpf;
    entity.birthDate = people.birthDate;

    const savedEntity = await this.repository.save(people);
    return {
      mensagem: 'Pessoa criada com sucesso',
      people: savedEntity
    }
  }

  async update(id: string, peopleUpdated: UpdatedPeopleDTO) {
    const entity = await this.repository.findOneBy({ id });
    Object.assign(entity, peopleUpdated);

    const updated = await this.repository.save(entity);
    return {
      mensagem: 'Pessoa atualizada com sucesso',
      people: updated
    }
  }

  async delete(id: string) {
    const peopleRemoved = await this.repository.delete(id);
    return {
      mensagem: 'Pessoa removida com sucesso',
      people: peopleRemoved
    }
  }
}