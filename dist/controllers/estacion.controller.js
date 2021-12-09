"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EstacionController = void 0;
const tslib_1 = require("tslib");
const authentication_1 = require("@loopback/authentication");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
let EstacionController = class EstacionController {
    constructor(estacionRepository) {
        this.estacionRepository = estacionRepository;
    }
    async create(estacion) {
        return this.estacionRepository.create(estacion);
    }
    async count(where) {
        return this.estacionRepository.count(where);
    }
    async find(filter) {
        return this.estacionRepository.find(filter);
    }
    async updateAll(estacion, where) {
        return this.estacionRepository.updateAll(estacion, where);
    }
    async findById(id, filter) {
        return this.estacionRepository.findById(id, filter);
    }
    async updateById(id, estacion) {
        await this.estacionRepository.updateById(id, estacion);
    }
    async replaceById(id, estacion) {
        await this.estacionRepository.replaceById(id, estacion);
    }
    async deleteById(id) {
        await this.estacionRepository.deleteById(id);
    }
};
(0, tslib_1.__decorate)([
    (0, rest_1.post)('/estacions'),
    (0, rest_1.response)(200, {
        description: 'Estacion model instance',
        content: { 'application/json': { schema: (0, rest_1.getModelSchemaRef)(models_1.Estacion) } },
    }),
    (0, tslib_1.__param)(0, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Estacion, {
                    title: 'NewEstacion',
                    exclude: ['id'],
                }),
            },
        },
    })),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], EstacionController.prototype, "create", null);
(0, tslib_1.__decorate)([
    (0, rest_1.get)('/estacions/count'),
    (0, rest_1.response)(200, {
        description: 'Estacion model count',
        content: { 'application/json': { schema: repository_1.CountSchema } },
    }),
    (0, tslib_1.__param)(0, rest_1.param.where(models_1.Estacion)),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], EstacionController.prototype, "count", null);
(0, tslib_1.__decorate)([
    (0, rest_1.get)('/estacions'),
    (0, rest_1.response)(200, {
        description: 'Array of Estacion model instances',
        content: {
            'application/json': {
                schema: {
                    type: 'array',
                    items: (0, rest_1.getModelSchemaRef)(models_1.Estacion, { includeRelations: true }),
                },
            },
        },
    }),
    (0, tslib_1.__param)(0, rest_1.param.filter(models_1.Estacion)),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], EstacionController.prototype, "find", null);
(0, tslib_1.__decorate)([
    (0, rest_1.patch)('/estacions'),
    (0, rest_1.response)(200, {
        description: 'Estacion PATCH success count',
        content: { 'application/json': { schema: repository_1.CountSchema } },
    }),
    (0, tslib_1.__param)(0, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Estacion, { partial: true }),
            },
        },
    })),
    (0, tslib_1.__param)(1, rest_1.param.where(models_1.Estacion)),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [models_1.Estacion, Object]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], EstacionController.prototype, "updateAll", null);
(0, tslib_1.__decorate)([
    (0, rest_1.get)('/estacions/{id}'),
    (0, rest_1.response)(200, {
        description: 'Estacion model instance',
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Estacion, { includeRelations: true }),
            },
        },
    }),
    (0, tslib_1.__param)(0, rest_1.param.path.string('id')),
    (0, tslib_1.__param)(1, rest_1.param.filter(models_1.Estacion, { exclude: 'where' })),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [String, Object]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], EstacionController.prototype, "findById", null);
(0, tslib_1.__decorate)([
    (0, rest_1.patch)('/estacions/{id}'),
    (0, rest_1.response)(204, {
        description: 'Estacion PATCH success',
    }),
    (0, tslib_1.__param)(0, rest_1.param.path.string('id')),
    (0, tslib_1.__param)(1, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Estacion, { partial: true }),
            },
        },
    })),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [String, models_1.Estacion]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], EstacionController.prototype, "updateById", null);
(0, tslib_1.__decorate)([
    (0, rest_1.put)('/estacions/{id}'),
    (0, rest_1.response)(204, {
        description: 'Estacion PUT success',
    }),
    (0, tslib_1.__param)(0, rest_1.param.path.string('id')),
    (0, tslib_1.__param)(1, (0, rest_1.requestBody)()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [String, models_1.Estacion]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], EstacionController.prototype, "replaceById", null);
(0, tslib_1.__decorate)([
    (0, rest_1.del)('/estacions/{id}'),
    (0, rest_1.response)(204, {
        description: 'Estacion DELETE success',
    }),
    (0, tslib_1.__param)(0, rest_1.param.path.string('id')),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [String]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], EstacionController.prototype, "deleteById", null);
EstacionController = (0, tslib_1.__decorate)([
    (0, authentication_1.authenticate)("admin"),
    (0, tslib_1.__param)(0, (0, repository_1.repository)(repositories_1.EstacionRepository)),
    (0, tslib_1.__metadata)("design:paramtypes", [repositories_1.EstacionRepository])
], EstacionController);
exports.EstacionController = EstacionController;
//# sourceMappingURL=estacion.controller.js.map