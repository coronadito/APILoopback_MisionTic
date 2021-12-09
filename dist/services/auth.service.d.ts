import { Usuario } from '../models';
import { UsuarioRepository } from '../repositories';
export declare class AuthService {
    usuarioRepository: UsuarioRepository;
    constructor(usuarioRepository: UsuarioRepository);
    GenerarClave(): any;
    CifrarClave(clave: String): any;
    GenerarTokenJWT(usuario: Usuario): any;
    validarTokenJWT(token: string): any;
    IdentificarPersona(correo: string, password: string): false | Promise<(Usuario & import("../models").UsuarioRelations) | null>;
}
