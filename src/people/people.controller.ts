import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { PeopleService } from "./people.service";
import { CreatedPeopleDTO } from "./dto/CreatedPeople.dto";
import { UpdatedPeopleDTO } from "./dto/UpdatedPeople.dto";

@Controller('peoples')
export class PeopleController {

  constructor(private service: PeopleService) {}

  @Post()
  async createPeople(@Body() obj: CreatedPeopleDTO) {
    return await this.service.create(obj);
  }

  @Get()
  async listPeoples() {
    return await this.service.listObject();
  }

  @Put('/:id')
  async updatePeople(@Param('id') id: string, @Body() newPeople: UpdatedPeopleDTO) {
    return await this.service.update(id, newPeople);
  }

  @Delete('/:id')
  async removePeople(@Param('id') id: string) {
    return await this.service.delete(id);
  }
}