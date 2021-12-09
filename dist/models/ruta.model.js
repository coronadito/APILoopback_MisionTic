"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Ruta = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const estacion_model_1 = require("./estacion.model");
let Ruta = class Ruta extends repository_1.Entity {
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
], Ruta.prototype, "id", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        required: true,
    }),
    (0, tslib_1.__metadata)("design:type", String)
], Ruta.prototype, "tiempo_estimado", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.belongsTo)(() => estacion_model_1.Estacion, { name: 'origenFk' }),
    (0, tslib_1.__metadata)("design:type", String)
], Ruta.prototype, "origen", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.belongsTo)(() => estacion_model_1.Estacion, { name: 'destinoFk' }),
    (0, tslib_1.__metadata)("design:type", String)
], Ruta.prototype, "destino", void 0);
Ruta = (0, tslib_1.__decorate)([
    (0, repository_1.model)(),
    (0, tslib_1.__metadata)("design:paramtypes", [Object])
], Ruta);
exports.Ruta = Ruta;
//# sourceMappingURL=ruta.model.js.map