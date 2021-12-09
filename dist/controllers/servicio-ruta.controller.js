"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServicioRutaController = void 0;
const tslib_1 = require("tslib");
const authentication_1 = require("@loopback/authentication");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
let ServicioRutaController = class ServicioRutaController {
    constructor(servicioRepository) {
        this.servicioRepository = servicioRepository;
    }
    async getRuta(id) {
        return this.servicioRepository.rutaFk(id);
    }
};
(0, tslib_1.__decorate)([
    (0, rest_1.get)('/servicios/{id}/ruta', {
        responses: {
            '200': {
                description: 'Ruta belonging to Servicio',
                content: {
                    'application/json': {
                        schema: { type: 'array', items: (0, rest_1.getModelSchemaRef)(models_1.Ruta) },
                    },
                },
            },
        },
    }),
    (0, tslib_1.__param)(0, rest_1.param.path.string('id')),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], ServicioRutaController.prototype, "getRuta", null);
ServicioRutaController = (0, tslib_1.__decorate)([
    (0, authentication_1.authenticate)("admin"),
    (0, tslib_1.__param)(0, (0, repository_1.repository)(repositories_1.ServicioRepository)),
    (0, tslib_1.__metadata)("design:paramtypes", [repositories_1.ServicioRepository])
], ServicioRutaController);
exports.ServicioRutaController = ServicioRutaController;
//# sourceMappingURL=servicio-ruta.controller.js.map