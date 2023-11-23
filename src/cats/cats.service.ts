import { Injectable } from '@nestjs/common';
import { CreateCatDto } from './dto/create-cat.dto';
import { UpdateCatDto } from './dto/update-cat.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Cat, CatDocument } from './schemas/cat.schema';
import { Model } from 'mongoose';
import { AppRepository } from 'src/app.repository';

@Injectable()
export class CatsService extends AppRepository<CatDocument> {
    constructor(@InjectModel(Cat.name) private catModel: Model<CatDocument>) {
        super(catModel);
    }
}
