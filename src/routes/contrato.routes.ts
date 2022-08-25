import { Router } from 'express';

import { CriaContratoController } from '../modules/contratos/useCases/contrato/criaContrato/CriaContratoController';
import { ListaContratosController } from '../modules/contratos/useCases/contrato/listaContratos/ListaContratosController';

const contratoRotas = Router();

const criaContratoController = new CriaContratoController();
const listaContratosController = new ListaContratosController();

contratoRotas.post("/", criaContratoController.handle);

contratoRotas.get("/", listaContratosController.handle);

export { contratoRotas};