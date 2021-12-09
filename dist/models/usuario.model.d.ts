import { Entity } from '@loopback/repository';
export declare class Usuario extends Entity {
    id?: string;
    nombre: string;
    apellidos: string;
    correo: string;
    telefono: string;
    password?: string;
    constructor(data?: Partial<Usuario>);
}
export interface UsuarioRelations {
}
export declare type UsuarioWithRelations = Usuario & UsuarioRelations;
