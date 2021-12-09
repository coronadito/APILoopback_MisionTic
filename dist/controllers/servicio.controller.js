"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServicioController = void 0;
const tslib_1 = require("tslib");
const authentication_1 = require("@loopback/authentication");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
let ServicioController = class ServicioController {
    constructor(servicioRepository) {
        this.servicioRepository = servicioRepository;
    }
    async create(servicio) {
        return this.servicioRepository.create(servicio);
    }
    async count(where) {
        return this.servicioRepository.count(where);
    }
    async find(filter) {
        return this.servicioRepository.find(filter);
    }
    async updateAll(servicio, where) {
        return this.servicioRepository.updateAll(servicio, where);
    }
    async findById(id, filter) {
        return this.servicioRepository.findById(id, filter);
    }
    async updateById(id, servicio) {
        await this.servicioRepository.updateById(id, servicio);
    }
    async replaceById(id, servicio) {
        await this.servicioRepository.replaceById(id, servicio);
    }
    async deleteById(id) {
        await this.servicioRepository.deleteById(id);
    }
};
(0, tslib_1.__decorate)([
    (0, rest_1.post)('/servicios'),
    (0, rest_1.response)(200, {
        description: 'Servicio model instance',
        content: { 'application/json': { schema: (0, rest_1.getModelSchemaRef)(models_1.Servicio) } },
    }),
    (0, tslib_1.__param)(0, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Servicio, {
                    title: 'NewServicio',
                    exclude: ['id'],
                }),
            },
        },
    })),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], ServicioController.prototype, "create", null);
(0, tslib_1.__decorate)([
    (0, rest_1.get)('/servicios/count'),
    (0, rest_1.response)(200, {
        description: 'Servicio model count',
        content: { 'application/json': { schema: repository_1.CountSchema } },
    }),
    (0, tslib_1.__param)(0, rest_1.param.where(models_1.Servicio)),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], ServicioController.prototype, "count", null);
(0, tslib_1.__decorate)([
    (0, rest_1.get)('/servicios'),
    (0, rest_1.response)(200, {
        description: 'Array of Servicio model instances',
        content: {
            'application/json': {
                schema: {
                    type: 'array',
                    items: (0, rest_1.getModelSchemaRef)(models_1.Servicio, { includeRelations: true }),
                },
            },
        },
    }),
    (0, tslib_1.__param)(0, rest_1.param.filter(models_1.Servicio)),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], ServicioController.prototype, "find", null);
(0, tslib_1.__decorate)([
    (0, rest_1.patch)('/servicios'),
    (0, rest_1.response)(200, {
        description: 'Servicio PATCH success count',
        content: { 'application/json': { schema: repository_1.CountSchema } },
    }),
    (0, tslib_1.__param)(0, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Servicio, { partial: true }),
            },
        },
    })),
    (0, tslib_1.__param)(1, rest_1.param.where(models_1.Servicio)),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [models_1.Servicio, Object]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], ServicioController.prototype, "updateAll", null);
(0, tslib_1.__decorate)([
    (0, rest_1.get)('/servicios/{id}'),
    (0, rest_1.response)(200, {
        description: 'Servicio model instance',
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Servicio, { includeRelations: true }),
            },
        },
    }),
    (0, tslib_1.__param)(0, rest_1.param.path.string('id')),
    (0, tslib_1.__param)(1, rest_1.param.filter(models_1.Servicio, { exclude: 'where' })),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [String, Object]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], ServicioController.prototype, "findById", null);
(0, tslib_1.__decorate)([
    (0, rest_1.patch)('/servicios/{id}'),
    (0, rest_1.response)(204, {
        description: 'Servicio PATCH success',
    }),
    (0, tslib_1.__param)(0, rest_1.param.path.string('id')),
    (0, tslib_1.__param)(1, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Servicio, { partial: true }),
            },
        },
    })),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [String, models_1.Servicio]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], ServicioController.prototype, "updateById", null);
(0, tslib_1.__decorate)([
    (0, rest_1.put)('/servicios/{id}'),
    (0, rest_1.response)(204, {
        description: 'Servicio PUT success',
    }),
    (0, tslib_1.__param)(0, rest_1.param.path.string('id')),
    (0, tslib_1.__param)(1, (0, rest_1.requestBody)()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [String, models_1.Servicio]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], ServicioController.prototype, "replaceById", null);
(0, tslib_1.__decorate)([
    (0, rest_1.del)('/servicios/{id}'),
    (0, rest_1.response)(204, {
        description: 'Servicio DELETE success',
    }),
    (0, tslib_1.__param)(0, rest_1.param.path.string('id')),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [String]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], ServicioController.prototype, "deleteById", null);
ServicioController = (0, tslib_1.__decorate)([
    (0, authentication_1.authenticate)("admin"),
    (0, tslib_1.__param)(0, (0, repository_1.repository)(repositories_1.ServicioRepository)),
    (0, tslib_1.__metadata)("design:paramtypes", [repositories_1.ServicioRepository])
], ServicioController);
exports.ServicioController = ServicioController;
//# sourceMappingURL=servicio.controller.js.map