import { Count, Filter, FilterExcludingWhere, Where } from '@loopback/repository';
import { Servicio } from '../models';
import { ServicioRepository } from '../repositories';
export declare class ServicioController {
    servicioRepository: ServicioRepository;
    constructor(servicioRepository: ServicioRepository);
    create(servicio: Omit<Servicio, 'id'>): Promise<Servicio>;
    count(where?: Where<Servicio>): Promise<Count>;
    find(filter?: Filter<Servicio>): Promise<Servicio[]>;
    updateAll(servicio: Servicio, where?: Where<Servicio>): Promise<Count>;
    findById(id: string, filter?: FilterExcludingWhere<Servicio>): Promise<Servicio>;
    updateById(id: string, servicio: Servicio): Promise<void>;
    replaceById(id: string, servicio: Servicio): Promise<void>;
    deleteById(id: string): Promise<void>;
}
