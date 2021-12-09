import { Entity } from '@loopback/repository';
export declare class Servicio extends Entity {
    id?: string;
    fecha: string;
    hora_inicio: string;
    hora_final: string;
    placa: string;
    nombre_conductor: string;
    dinero_recogio: string;
    ruta: string;
    constructor(data?: Partial<Servicio>);
}
export interface ServicioRelations {
}
export declare type ServicioWithRelations = Servicio & ServicioRelations;
