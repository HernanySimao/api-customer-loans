import { IsNotEmpty, IsNumber, IsString } from "class-validator"

export class CreateClientDto {
    @IsNumber()
    @IsNotEmpty()
    age: number

    @IsString()
    @IsNotEmpty()
    cpf: string

    @IsString()
    name: string

    @IsNumber()
    income: number

    @IsString()
    location: string
}
