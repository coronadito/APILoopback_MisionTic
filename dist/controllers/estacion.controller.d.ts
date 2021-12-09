import { Count, Filter, FilterExcludingWhere, Where } from '@loopback/repository';
import { Estacion } from '../models';
import { EstacionRepository } from '../repositories';
export declare class EstacionController {
    estacionRepository: EstacionRepository;
    constructor(estacionRepository: EstacionRepository);
    create(estacion: Omit<Estacion, 'id'>): Promise<Estacion>;
    count(where?: Where<Estacion>): Promise<Count>;
    find(filter?: Filter<Estacion>): Promise<Estacion[]>;
    updateAll(estacion: Estacion, where?: Where<Estacion>): Promise<Count>;
    findById(id: string, filter?: FilterExcludingWhere<Estacion>): Promise<Estacion>;
    updateById(id: string, estacion: Estacion): Promise<void>;
    replaceById(id: string, estacion: Estacion): Promise<void>;
    deleteById(id: string): Promise<void>;
}
