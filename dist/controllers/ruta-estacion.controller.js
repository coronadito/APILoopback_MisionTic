"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RutaEstacionController = void 0;
const tslib_1 = require("tslib");
const authentication_1 = require("@loopback/authentication");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
let RutaEstacionController = class RutaEstacionController {
    constructor(rutaRepository) {
        this.rutaRepository = rutaRepository;
    }
    async getEstacion(id) {
        return this.rutaRepository.destinoFk(id);
    }
};
(0, tslib_1.__decorate)([
    (0, rest_1.get)('/rutas/{id}/estacion', {
        responses: {
            '200': {
                description: 'Estacion belonging to Ruta',
                content: {
                    'application/json': {
                        schema: { type: 'array', items: (0, rest_1.getModelSchemaRef)(models_1.Estacion) },
                    },
                },
            },
        },
    }),
    (0, tslib_1.__param)(0, rest_1.param.path.string('id')),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], RutaEstacionController.prototype, "getEstacion", null);
RutaEstacionController = (0, tslib_1.__decorate)([
    (0, authentication_1.authenticate)("admin"),
    (0, tslib_1.__param)(0, (0, repository_1.repository)(repositories_1.RutaRepository)),
    (0, tslib_1.__metadata)("design:paramtypes", [repositories_1.RutaRepository])
], RutaEstacionController);
exports.RutaEstacionController = RutaEstacionController;
//# sourceMappingURL=ruta-estacion.controller.js.map