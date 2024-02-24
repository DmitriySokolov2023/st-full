import { Injectable } from '@nestjs/common';
import { CreatePizzaDto } from './dto/create-pizza.dto';
import { UpdatePizzaDto } from './dto/update-pizza.dto';
import {PrismaService} from "../prisma.service";

@Injectable()
export class PizzaService {
  constructor(prisma:PrismaService) {}
  create(createPizzaDto: CreatePizzaDto) {
    return 'This action adds a new pizza';
  }

  findAll() {
    return `This action returns all pizza`;
  }

  findOne(id: number) {
    return `This action returns a #${id} pizza`;
  }

  update(id: number, updatePizzaDto: UpdatePizzaDto) {
    return `This action updates a #${id} pizza`;
  }

  remove(id: number) {
    return `This action removes a #${id} pizza`;
  }
}
