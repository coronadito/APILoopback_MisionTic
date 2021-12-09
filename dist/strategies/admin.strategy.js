"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdministradorStrategy = void 0;
const tslib_1 = require("tslib");
const core_1 = require("@loopback/core");
const rest_1 = require("@loopback/rest");
const parse_bearer_token_1 = (0, tslib_1.__importDefault)(require("parse-bearer-token"));
const services_1 = require("../services");
let AdministradorStrategy = class AdministradorStrategy {
    constructor(serviceAuth) {
        this.serviceAuth = serviceAuth;
        this.name = 'admin';
    }
    async authenticate(request) {
        const token = (0, parse_bearer_token_1.default)(request);
        if (!token) {
            throw new rest_1.HttpErrors[401]("No existe un token en la solicitud.");
        }
        let info = this.serviceAuth.validarTokenJWT(token);
        if (info) {
            let perfil = Object.assign({
                nombre: info.data.nombre
            });
            return perfil;
        }
        else {
            throw new rest_1.HttpErrors[401]("El token es válido, pero no tiene los permisos suficientes para ejecutar esta acción.");
        }
    }
};
AdministradorStrategy = (0, tslib_1.__decorate)([
    (0, tslib_1.__param)(0, (0, core_1.service)(services_1.AuthService)),
    (0, tslib_1.__metadata)("design:paramtypes", [services_1.AuthService])
], AdministradorStrategy);
exports.AdministradorStrategy = AdministradorStrategy;
//# sourceMappingURL=admin.strategy.js.map