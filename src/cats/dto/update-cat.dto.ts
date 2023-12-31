import { IsNotEmpty, IsNumber } from 'class-validator';
import { PartialType } from '@nestjs/mapped-types';
import { CreateCatDto } from './create-cat.dto';

export class UpdateCatDto extends PartialType(CreateCatDto) {
    @IsNotEmpty()
    name: string;

    @IsNumber()
    age: number;

    @IsNotEmpty()
    breed: string;
}
