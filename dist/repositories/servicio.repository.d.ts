import { Getter } from '@loopback/core';
import { DefaultCrudRepository, BelongsToAccessor } from '@loopback/repository';
import { MongoDataSource } from '../datasources';
import { Servicio, ServicioRelations, Ruta } from '../models';
import { RutaRepository } from './ruta.repository';
export declare class ServicioRepository extends DefaultCrudRepository<Servicio, typeof Servicio.prototype.id, ServicioRelations> {
    protected rutaRepositoryGetter: Getter<RutaRepository>;
    readonly rutaFk: BelongsToAccessor<Ruta, typeof Servicio.prototype.id>;
    constructor(dataSource: MongoDataSource, rutaRepositoryGetter: Getter<RutaRepository>);
}
