import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { AppRepository } from 'src/app.repository';
import { User, UserDocument } from './schemas/user.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class UsersService extends AppRepository<UserDocument> {
    constructor(
        @InjectModel(User.name) private userModel: Model<UserDocument>,
    ) {
        super(userModel);
    }
}
