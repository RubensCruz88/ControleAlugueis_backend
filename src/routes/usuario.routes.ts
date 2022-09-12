import { Router } from 'express';

import { CriaUsuarioController } from '@modules/contas/useCases/criaUsuario/CriaUsuarioController'

const usuarioRotas = Router();

const criausuarioController = new CriaUsuarioController();

usuarioRotas.post("/",criausuarioController.handle);

export { usuarioRotas };
