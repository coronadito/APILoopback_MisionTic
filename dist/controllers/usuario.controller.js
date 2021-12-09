"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsuarioController = void 0;
const tslib_1 = require("tslib");
const authentication_1 = require("@loopback/authentication");
const core_1 = require("@loopback/core");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const axios_1 = (0, tslib_1.__importDefault)(require("axios"));
const models_1 = require("../models");
const repositories_1 = require("../repositories");
const services_1 = require("../services");
let UsuarioController = class UsuarioController {
    constructor(usuarioRepository, servicioAuth) {
        this.usuarioRepository = usuarioRepository;
        this.servicioAuth = servicioAuth;
    }
    async create(usuario) {
        //return this.usuarioRepository.create(usuario);
        //Nuevo
        let clave = this.servicioAuth.GenerarClave();
        let claveCifrada = this.servicioAuth.CifrarClave(clave);
        usuario.password = claveCifrada;
        let p = await this.usuarioRepository.create(usuario);
        // Notificamos al usuario por correo
        let destino = usuario.correo;
        let asunto = 'Registro de usuario en plataforma';
        let contenido = `Hola, ${usuario.nombre} ${usuario.apellidos} su contraseña en el portal es: ${clave}`;
        (0, axios_1.default)({
            method: 'post',
            url: 'http://localhost:5000/send_email',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            data: {
                destino: destino,
                asunto: asunto,
                contenido: contenido
            }
        }).then((data) => {
            console.log(data);
        }).catch((err) => {
            console.log(err);
        });
        return p;
    }
    async count(where) {
        return this.usuarioRepository.count(where);
    }
    async find(filter) {
        return this.usuarioRepository.find(filter);
    }
    async updateAll(usuario, where) {
        return this.usuarioRepository.updateAll(usuario, where);
    }
    async findById(id, filter) {
        return this.usuarioRepository.findById(id, filter);
    }
    async updateById(id, usuario) {
        await this.usuarioRepository.updateById(id, usuario);
    }
    async replaceById(id, usuario) {
        await this.usuarioRepository.replaceById(id, usuario);
    }
    async deleteById(id) {
        await this.usuarioRepository.deleteById(id);
    }
    //Servicio de login
    async login(credenciales) {
        let p = await this.servicioAuth.IdentificarPersona(credenciales.usuario, credenciales.password);
        if (p) {
            let token = this.servicioAuth.GenerarTokenJWT(p);
            return {
                status: "success",
                data: {
                    nombre: p.nombre,
                    apellidos: p.apellidos,
                    correo: p.correo,
                    id: p.id
                },
                token: token
            };
        }
        else {
            throw new rest_1.HttpErrors[401]("Datos invalidos");
        }
    }
};
(0, tslib_1.__decorate)([
    authentication_1.authenticate.skip(),
    (0, rest_1.post)('/usuarios'),
    (0, rest_1.response)(200, {
        description: 'Usuario model instance',
        content: { 'application/json': { schema: (0, rest_1.getModelSchemaRef)(models_1.Usuario) } },
    }),
    (0, tslib_1.__param)(0, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Usuario, {
                    title: 'NewUsuario',
                    exclude: ['id'],
                }),
            },
        },
    })),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], UsuarioController.prototype, "create", null);
(0, tslib_1.__decorate)([
    (0, rest_1.get)('/usuarios/count'),
    (0, rest_1.response)(200, {
        description: 'Usuario model count',
        content: { 'application/json': { schema: repository_1.CountSchema } },
    }),
    (0, tslib_1.__param)(0, rest_1.param.where(models_1.Usuario)),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], UsuarioController.prototype, "count", null);
(0, tslib_1.__decorate)([
    (0, rest_1.get)('/usuarios'),
    (0, rest_1.response)(200, {
        description: 'Array of Usuario model instances',
        content: {
            'application/json': {
                schema: {
                    type: 'array',
                    items: (0, rest_1.getModelSchemaRef)(models_1.Usuario, { includeRelations: true }),
                },
            },
        },
    }),
    (0, tslib_1.__param)(0, rest_1.param.filter(models_1.Usuario)),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], UsuarioController.prototype, "find", null);
(0, tslib_1.__decorate)([
    (0, rest_1.patch)('/usuarios'),
    (0, rest_1.response)(200, {
        description: 'Usuario PATCH success count',
        content: { 'application/json': { schema: repository_1.CountSchema } },
    }),
    (0, tslib_1.__param)(0, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Usuario, { partial: true }),
            },
        },
    })),
    (0, tslib_1.__param)(1, rest_1.param.where(models_1.Usuario)),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [models_1.Usuario, Object]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], UsuarioController.prototype, "updateAll", null);
(0, tslib_1.__decorate)([
    (0, rest_1.get)('/usuarios/{id}'),
    (0, rest_1.response)(200, {
        description: 'Usuario model instance',
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Usuario, { includeRelations: true }),
            },
        },
    }),
    (0, tslib_1.__param)(0, rest_1.param.path.string('id')),
    (0, tslib_1.__param)(1, rest_1.param.filter(models_1.Usuario, { exclude: 'where' })),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [String, Object]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], UsuarioController.prototype, "findById", null);
(0, tslib_1.__decorate)([
    (0, rest_1.patch)('/usuarios/{id}'),
    (0, rest_1.response)(204, {
        description: 'Usuario PATCH success',
    }),
    (0, tslib_1.__param)(0, rest_1.param.path.string('id')),
    (0, tslib_1.__param)(1, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Usuario, { partial: true }),
            },
        },
    })),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [String, models_1.Usuario]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], UsuarioController.prototype, "updateById", null);
(0, tslib_1.__decorate)([
    (0, rest_1.put)('/usuarios/{id}'),
    (0, rest_1.response)(204, {
        description: 'Usuario PUT success',
    }),
    (0, tslib_1.__param)(0, rest_1.param.path.string('id')),
    (0, tslib_1.__param)(1, (0, rest_1.requestBody)()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [String, models_1.Usuario]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], UsuarioController.prototype, "replaceById", null);
(0, tslib_1.__decorate)([
    (0, rest_1.del)('/usuarios/{id}'),
    (0, rest_1.response)(204, {
        description: 'Usuario DELETE success',
    }),
    (0, tslib_1.__param)(0, rest_1.param.path.string('id')),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [String]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], UsuarioController.prototype, "deleteById", null);
(0, tslib_1.__decorate)([
    authentication_1.authenticate.skip(),
    (0, rest_1.post)('/login', {
        responses: {
            '200': {
                description: 'Identificación de usuarios'
            }
        }
    }),
    (0, tslib_1.__param)(0, (0, rest_1.requestBody)()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [models_1.Credenciales]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], UsuarioController.prototype, "login", null);
UsuarioController = (0, tslib_1.__decorate)([
    (0, authentication_1.authenticate)("admin"),
    (0, tslib_1.__param)(0, (0, repository_1.repository)(repositories_1.UsuarioRepository)),
    (0, tslib_1.__param)(1, (0, core_1.service)(services_1.AuthService)),
    (0, tslib_1.__metadata)("design:paramtypes", [repositories_1.UsuarioRepository,
        services_1.AuthService])
], UsuarioController);
exports.UsuarioController = UsuarioController;
//# sourceMappingURL=usuario.controller.js.map