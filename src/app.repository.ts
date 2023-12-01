import { AnyObject, FilterQuery, Model, ObjectId } from 'mongoose';
import {
    FilterOperators,
    FindManyOptions,
    FindOneAndUpdateOptions,
    ObjectLiteral,
} from 'typeorm';
import { DeleteResult } from 'typeorm/driver/mongodb/typings';

export class AppRepository<T> {
    repository: Model<T>;

    constructor(repository: Model<T>) {
        this.repository = repository;
    }

    async create(data: T | AnyObject): Promise<T> {
        const createdModel = new this.repository(data);
        createdModel.save();
        return createdModel;
    }

    async findOne(id: string | number | Date | ObjectId): Promise<T | null> {
        return await this.repository.findById(id).exec();
    }

    async findAll(): Promise<T[]> {
        return await this.repository.find().exec();
    }

    async update(
        id: string | number | Date | ObjectId,
        updateDto: object,
        options?: FindOneAndUpdateOptions,
    ): Promise<T> {
        return await this.repository.findByIdAndUpdate(id, updateDto).exec();
    }

    async remove(id: string | number | Date | ObjectId) {
        return await this.repository.findByIdAndDelete(id);
    }
}
