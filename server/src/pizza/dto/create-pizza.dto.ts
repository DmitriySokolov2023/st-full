import {IsNumber, IsString} from "class-validator";

export class CreatePizzaDto {
    @IsNumber()
    id: number

    @IsString()
    image:string

    @IsString()
    name:string

    @IsNumber()
    cost:number

    @IsNumber()
    count:number
}
