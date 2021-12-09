"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
const tslib_1 = require("tslib");
const core_1 = require("@loopback/core");
//libreria repositorio
const repository_1 = require("@loopback/repository");
//librerias nuevas para la generación y validación del token
const config_1 = require("../config/config");
//librerias del repositorio de usuario
const repositories_1 = require("../repositories");
// Nuevas librerias
const generator = require("password-generator");
const cryptoJS = require("crypto-js");
const jwt = require('jsonwebtoken');
let AuthService = class AuthService {
    constructor(usuarioRepository) {
        this.usuarioRepository = usuarioRepository;
    }
    //Generacion de claves
    GenerarClave() {
        let clave = generator(8, false);
        return clave;
    }
    //cifrar la clave
    CifrarClave(clave) {
        let claveCifrada = cryptoJS.MD5(clave).toString();
        return claveCifrada;
    }
    //metodo generar token JWT, json web token
    GenerarTokenJWT(usuario) {
        let token = jwt.sign({
            data: {
                id: usuario.id,
                correo: usuario.correo,
                nombre: usuario.nombre + " " + usuario.apellidos
            }
        }, config_1.config.claveJWT);
        return token;
    }
    //metodo para validar el token jwt
    validarTokenJWT(token) {
        try {
            let datos = jwt.verify(token, config_1.config.claveJWT);
            return datos;
        }
        catch (error) {
            return false;
        }
    }
    //metodo Autenticacion persona
    IdentificarPersona(correo, password) {
        try {
            let p = this.usuarioRepository.findOne({ where: { correo: correo, password: password } });
            if (p) {
                return p;
            }
            return false;
        }
        catch (_a) {
            return false;
        }
    }
};
AuthService = (0, tslib_1.__decorate)([
    (0, core_1.injectable)({ scope: core_1.BindingScope.TRANSIENT }),
    (0, tslib_1.__param)(0, (0, repository_1.repository)(repositories_1.UsuarioRepository)),
    (0, tslib_1.__metadata)("design:paramtypes", [repositories_1.UsuarioRepository])
], AuthService);
exports.AuthService = AuthService;
//# sourceMappingURL=auth.service.js.map