import { Getter } from '@loopback/core';
import { DefaultCrudRepository, BelongsToAccessor } from '@loopback/repository';
import { MongoDataSource } from '../datasources';
import { Ruta, RutaRelations, Estacion } from '../models';
import { EstacionRepository } from './estacion.repository';
export declare class RutaRepository extends DefaultCrudRepository<Ruta, typeof Ruta.prototype.id, RutaRelations> {
    protected estacionRepositoryGetter: Getter<EstacionRepository>;
    readonly origenFk: BelongsToAccessor<Estacion, typeof Ruta.prototype.id>;
    readonly destinoFk: BelongsToAccessor<Estacion, typeof Ruta.prototype.id>;
    constructor(dataSource: MongoDataSource, estacionRepositoryGetter: Getter<EstacionRepository>);
}
