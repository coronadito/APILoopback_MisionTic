import { Count, Filter, FilterExcludingWhere, Where } from '@loopback/repository';
import { Ruta } from '../models';
import { RutaRepository } from '../repositories';
export declare class RutaController {
    rutaRepository: RutaRepository;
    constructor(rutaRepository: RutaRepository);
    create(ruta: Omit<Ruta, 'id'>): Promise<Ruta>;
    count(where?: Where<Ruta>): Promise<Count>;
    find(filter?: Filter<Ruta>): Promise<Ruta[]>;
    updateAll(ruta: Ruta, where?: Where<Ruta>): Promise<Count>;
    findById(id: string, filter?: FilterExcludingWhere<Ruta>): Promise<Ruta>;
    updateById(id: string, ruta: Ruta): Promise<void>;
    replaceById(id: string, ruta: Ruta): Promise<void>;
    deleteById(id: string): Promise<void>;
}
