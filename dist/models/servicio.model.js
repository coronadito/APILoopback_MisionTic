"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Servicio = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const ruta_model_1 = require("./ruta.model");
let Servicio = class Servicio extends repository_1.Entity {
    constructor(data) {
        super(data);
    }
};
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        id: true,
        generated: true,
    }),
    (0, tslib_1.__metadata)("design:type", String)
], Servicio.prototype, "id", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        required: true,
    }),
    (0, tslib_1.__metadata)("design:type", String)
], Servicio.prototype, "fecha", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        required: true,
    }),
    (0, tslib_1.__metadata)("design:type", String)
], Servicio.prototype, "hora_inicio", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        required: true,
    }),
    (0, tslib_1.__metadata)("design:type", String)
], Servicio.prototype, "hora_final", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        required: true,
    }),
    (0, tslib_1.__metadata)("design:type", String)
], Servicio.prototype, "placa", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        required: true,
    }),
    (0, tslib_1.__metadata)("design:type", String)
], Servicio.prototype, "nombre_conductor", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        required: true,
    }),
    (0, tslib_1.__metadata)("design:type", String)
], Servicio.prototype, "dinero_recogio", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.belongsTo)(() => ruta_model_1.Ruta, { name: 'rutaFk' }),
    (0, tslib_1.__metadata)("design:type", String)
], Servicio.prototype, "ruta", void 0);
Servicio = (0, tslib_1.__decorate)([
    (0, repository_1.model)(),
    (0, tslib_1.__metadata)("design:paramtypes", [Object])
], Servicio);
exports.Servicio = Servicio;
//# sourceMappingURL=servicio.model.js.map