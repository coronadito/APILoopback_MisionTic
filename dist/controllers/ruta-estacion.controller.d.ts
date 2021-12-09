import { Estacion, Ruta } from '../models';
import { RutaRepository } from '../repositories';
export declare class RutaEstacionController {
    rutaRepository: RutaRepository;
    constructor(rutaRepository: RutaRepository);
    getEstacion(id: typeof Ruta.prototype.id): Promise<Estacion>;
}
