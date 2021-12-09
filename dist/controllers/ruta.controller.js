"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RutaController = void 0;
const tslib_1 = require("tslib");
const authentication_1 = require("@loopback/authentication");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
let RutaController = class RutaController {
    constructor(rutaRepository) {
        this.rutaRepository = rutaRepository;
    }
    async create(ruta) {
        return this.rutaRepository.create(ruta);
    }
    async count(where) {
        return this.rutaRepository.count(where);
    }
    async find(filter) {
        return this.rutaRepository.find(filter);
    }
    async updateAll(ruta, where) {
        return this.rutaRepository.updateAll(ruta, where);
    }
    async findById(id, filter) {
        return this.rutaRepository.findById(id, filter);
    }
    async updateById(id, ruta) {
        await this.rutaRepository.updateById(id, ruta);
    }
    async replaceById(id, ruta) {
        await this.rutaRepository.replaceById(id, ruta);
    }
    async deleteById(id) {
        await this.rutaRepository.deleteById(id);
    }
};
(0, tslib_1.__decorate)([
    (0, rest_1.post)('/rutas'),
    (0, rest_1.response)(200, {
        description: 'Ruta model instance',
        content: { 'application/json': { schema: (0, rest_1.getModelSchemaRef)(models_1.Ruta) } },
    }),
    (0, tslib_1.__param)(0, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Ruta, {
                    title: 'NewRuta',
                    exclude: ['id'],
                }),
            },
        },
    })),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], RutaController.prototype, "create", null);
(0, tslib_1.__decorate)([
    (0, rest_1.get)('/rutas/count'),
    (0, rest_1.response)(200, {
        description: 'Ruta model count',
        content: { 'application/json': { schema: repository_1.CountSchema } },
    }),
    (0, tslib_1.__param)(0, rest_1.param.where(models_1.Ruta)),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], RutaController.prototype, "count", null);
(0, tslib_1.__decorate)([
    (0, rest_1.get)('/rutas'),
    (0, rest_1.response)(200, {
        description: 'Array of Ruta model instances',
        content: {
            'application/json': {
                schema: {
                    type: 'array',
                    items: (0, rest_1.getModelSchemaRef)(models_1.Ruta, { includeRelations: true }),
                },
            },
        },
    }),
    (0, tslib_1.__param)(0, rest_1.param.filter(models_1.Ruta)),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], RutaController.prototype, "find", null);
(0, tslib_1.__decorate)([
    (0, rest_1.patch)('/rutas'),
    (0, rest_1.response)(200, {
        description: 'Ruta PATCH success count',
        content: { 'application/json': { schema: repository_1.CountSchema } },
    }),
    (0, tslib_1.__param)(0, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Ruta, { partial: true }),
            },
        },
    })),
    (0, tslib_1.__param)(1, rest_1.param.where(models_1.Ruta)),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [models_1.Ruta, Object]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], RutaController.prototype, "updateAll", null);
(0, tslib_1.__decorate)([
    (0, rest_1.get)('/rutas/{id}'),
    (0, rest_1.response)(200, {
        description: 'Ruta model instance',
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Ruta, { includeRelations: true }),
            },
        },
    }),
    (0, tslib_1.__param)(0, rest_1.param.path.string('id')),
    (0, tslib_1.__param)(1, rest_1.param.filter(models_1.Ruta, { exclude: 'where' })),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [String, Object]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], RutaController.prototype, "findById", null);
(0, tslib_1.__decorate)([
    (0, rest_1.patch)('/rutas/{id}'),
    (0, rest_1.response)(204, {
        description: 'Ruta PATCH success',
    }),
    (0, tslib_1.__param)(0, rest_1.param.path.string('id')),
    (0, tslib_1.__param)(1, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Ruta, { partial: true }),
            },
        },
    })),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [String, models_1.Ruta]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], RutaController.prototype, "updateById", null);
(0, tslib_1.__decorate)([
    (0, rest_1.put)('/rutas/{id}'),
    (0, rest_1.response)(204, {
        description: 'Ruta PUT success',
    }),
    (0, tslib_1.__param)(0, rest_1.param.path.string('id')),
    (0, tslib_1.__param)(1, (0, rest_1.requestBody)()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [String, models_1.Ruta]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], RutaController.prototype, "replaceById", null);
(0, tslib_1.__decorate)([
    (0, rest_1.del)('/rutas/{id}'),
    (0, rest_1.response)(204, {
        description: 'Ruta DELETE success',
    }),
    (0, tslib_1.__param)(0, rest_1.param.path.string('id')),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [String]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], RutaController.prototype, "deleteById", null);
RutaController = (0, tslib_1.__decorate)([
    (0, authentication_1.authenticate)("admin"),
    (0, tslib_1.__param)(0, (0, repository_1.repository)(repositories_1.RutaRepository)),
    (0, tslib_1.__metadata)("design:paramtypes", [repositories_1.RutaRepository])
], RutaController);
exports.RutaController = RutaController;
//# sourceMappingURL=ruta.controller.js.map