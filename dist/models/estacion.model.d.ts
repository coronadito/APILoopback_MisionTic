import { Entity } from '@loopback/repository';
export declare class Estacion extends Entity {
    id?: string;
    nombre: string;
    direccion: string;
    coordenada_x: string;
    coordenada_y: string;
    Tipo: string;
    constructor(data?: Partial<Estacion>);
}
export interface EstacionRelations {
}
export declare type EstacionWithRelations = Estacion & EstacionRelations;
