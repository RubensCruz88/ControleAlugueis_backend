import { Router } from 'express';
import { verificaAutenticacao } from '../middleware/verificaAutenticacao';

import { CriaContratoController } from '../modules/contratos/useCases/contrato/criaContrato/CriaContratoController';
import { ListaContratosController } from '../modules/contratos/useCases/contrato/listaContratos/ListaContratosController';
import { BuscaPorIDController } from '../modules/contratos/useCases/contrato/buscaPorId/BuscaPorIdController';

const contratoRotas = Router();

const criaContratoController = new CriaContratoController();
const listaContratosController = new ListaContratosController();
const buscaPorIDController = new BuscaPorIDController();

contratoRotas.use(verificaAutenticacao);

contratoRotas.post("/", criaContratoController.handle);
contratoRotas.get("/", listaContratosController.handle);
contratoRotas.get("/:id", buscaPorIDController.handle);

export { contratoRotas};