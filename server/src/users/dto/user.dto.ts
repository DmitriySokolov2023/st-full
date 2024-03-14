import {IsEmail, IsOptional, IsString} from "class-validator";

export class UserDto{
    @IsString()
    @IsOptional()
    name:string

    @IsEmail()
    email:string


    @IsString()
    @IsOptional()
    password:string
}