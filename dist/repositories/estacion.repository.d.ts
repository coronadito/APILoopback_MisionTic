import { DefaultCrudRepository } from '@loopback/repository';
import { MongoDataSource } from '../datasources';
import { Estacion, EstacionRelations } from '../models';
export declare class EstacionRepository extends DefaultCrudRepository<Estacion, typeof Estacion.prototype.id, EstacionRelations> {
    constructor(dataSource: MongoDataSource);
}
