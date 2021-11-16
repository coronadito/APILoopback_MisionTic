import { /* inject, */ BindingScope, injectable} from '@loopback/core';
//libreria repositorio
import {repository} from '@loopback/repository';
//librerias nuevas para la generación y validación del token
import {config} from '../config/config';
import {Usuario} from '../models';
//librerias del repositorio de usuario
import {UsuarioRepository} from '../repositories';

// Nuevas librerias
const generator = require("password-generator");
const cryptoJS = require("crypto-js");
const jwt = require('jsonwebtoken');

@injectable({scope: BindingScope.TRANSIENT})
export class AuthService {
  constructor(@repository(UsuarioRepository)
  public usuarioRepository: UsuarioRepository) { }

  //Generacion de claves
  GenerarClave() {
    let clave = generator(8, false);
    return clave;
  }
  //cifrar la clave
  CifrarClave(clave: String) {
    let claveCifrada = cryptoJS.MD5(clave).toString();
    return claveCifrada;
  }
  //metodo generar token JWT, json web token
  GenerarTokenJWT(usuario: Usuario) {
    let token = jwt.sign({
      data: {
        id: usuario.id,
        correo: usuario.correo,
        nombre: usuario.nombre + " " + usuario.apellidos
      }
    }, config.claveJWT)

    return token
  }

  //metodo para validar el token jwt
  validarTokenJWT(token: string) {
    try {
      let datos = jwt.verify(token, config.claveJWT);
      return datos;
    } catch (error) {
      return false;
    }
  }

  //metodo Autenticacion persona
  IdentificarPersona(correo: string, password: string) {
    try {
      let p = this.usuarioRepository.findOne({where: {correo: correo, password: password}})
      if (p) {
        return p;
      }
      return false;
    } catch {
      return false;
    }
  }





}
