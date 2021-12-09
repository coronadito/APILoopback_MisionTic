"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServicioRepository = void 0;
const tslib_1 = require("tslib");
const core_1 = require("@loopback/core");
const repository_1 = require("@loopback/repository");
const datasources_1 = require("../datasources");
const models_1 = require("../models");
let ServicioRepository = class ServicioRepository extends repository_1.DefaultCrudRepository {
    constructor(dataSource, rutaRepositoryGetter) {
        super(models_1.Servicio, dataSource);
        this.rutaRepositoryGetter = rutaRepositoryGetter;
        this.rutaFk = this.createBelongsToAccessorFor('rutaFk', rutaRepositoryGetter);
        this.registerInclusionResolver('rutaFk', this.rutaFk.inclusionResolver);
    }
};
ServicioRepository = (0, tslib_1.__decorate)([
    (0, tslib_1.__param)(0, (0, core_1.inject)('datasources.mongo')),
    (0, tslib_1.__param)(1, repository_1.repository.getter('RutaRepository')),
    (0, tslib_1.__metadata)("design:paramtypes", [datasources_1.MongoDataSource, Function])
], ServicioRepository);
exports.ServicioRepository = ServicioRepository;
//# sourceMappingURL=servicio.repository.js.map