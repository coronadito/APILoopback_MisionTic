import { Entity } from '@loopback/repository';
export declare class Ruta extends Entity {
    id?: string;
    tiempo_estimado: string;
    origen: string;
    destino: string;
    constructor(data?: Partial<Ruta>);
}
export interface RutaRelations {
}
export declare type RutaWithRelations = Ruta & RutaRelations;
