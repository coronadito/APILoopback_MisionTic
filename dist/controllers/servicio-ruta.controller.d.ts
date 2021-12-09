import { Ruta, Servicio } from '../models';
import { ServicioRepository } from '../repositories';
export declare class ServicioRutaController {
    servicioRepository: ServicioRepository;
    constructor(servicioRepository: ServicioRepository);
    getRuta(id: typeof Servicio.prototype.id): Promise<Ruta>;
}
