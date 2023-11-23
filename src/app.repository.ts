import { AnyObject, FilterQuery, Model, ObjectId } from 'mongoose';
import {
    FilterOperators,
    FindManyOptions,
    FindOneAndUpdateOptions,
    ObjectLiteral,
} from 'typeorm';
import { DeleteResult } from 'typeorm/driver/mongodb/typings';

export class AppRepository<Entity> {
    repository: Model<Entity>;

    constructor(
        repository: Model<Entity, Record<string, never>, Record<string, never>>,
    ) {
        this.repository = repository;
    }

    async create(data: Entity | AnyObject): Promise<Entity> {
        const createdModel = new this.repository(data);
        createdModel.save();
        return createdModel;
    }

    async findOneById(
        id: string | number | Date | ObjectId,
    ): Promise<Entity | null> {
        return await this.repository.findById(id).exec();
    }

    async findAll(): Promise<Entity[]> {
        return await this.repository.find().exec();
    }

    async findOneAndUpdate(
        id: string | number | Date | ObjectId,
        updateDto: object,
        options?: FindOneAndUpdateOptions,
    ): Promise<Entity> {
        return await this.repository.findByIdAndUpdate(id, updateDto).exec();
    }

    async remove(id: string | number | Date | ObjectId): Promise<DeleteResult> {
        return await this.repository.findByIdAndDelete(id);
    }
}
