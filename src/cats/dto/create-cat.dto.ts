import { IsNotEmpty, IsNumber } from 'class-validator';

export class CreateCatDto {
    @IsNotEmpty()
    name: string;

    @IsNumber()
    age: number;

    @IsNotEmpty()
    breed: string;
}
