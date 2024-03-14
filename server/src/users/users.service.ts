import { Injectable } from '@nestjs/common';
import {UserDto} from "./dto/user.dto";
import {PrismaService} from "../prisma.service";

@Injectable()
export class UsersService {
    constructor(private prismaService:PrismaService) {
    }



    createUser(dto:UserDto){
        return this.prismaService.user.create({
            data:{
                name:dto.name,
                email:dto.email,
                password:dto.password
            }
        })
    }
}
