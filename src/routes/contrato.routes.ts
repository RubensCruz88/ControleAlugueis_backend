import { Router } from 'express';
import { verificaAutenticacao } from '../middleware/verificaAutenticacao';

import { CriaContratoController } from '@modules/contratos/useCases/contrato/criaContrato/CriaContratoController';
import { ListaContratosController } from '@modules/contratos/useCases/contrato/listaContratos/ListaContratosController';
import { BuscaPorIDController } from '@modules/contratos/useCases/contrato/buscaPorId/BuscaPorIdController';
import { ListaContratosAtivosController } from '@modules/contratos/useCases/contrato/listaContratosAtivos/ListaContratosAtivosController';
import { ListaLancamentosContratoController } from '@modules/contratos/useCases/contrato/listaLancamentosContrato/ListaLancamentosContratoController';

const contratoRotas = Router();

const criaContratoController = new CriaContratoController();
const listaContratosController = new ListaContratosController();
const buscaPorIDController = new BuscaPorIDController();
const listaContratosAtivosController = new ListaContratosAtivosController();
const listaLancamentosContratoController = new ListaLancamentosContratoController();

contratoRotas.use(verificaAutenticacao);

contratoRotas.get("/ativos/", listaContratosAtivosController.handle);
contratoRotas.post("/", criaContratoController.handle);
contratoRotas.get("/", listaContratosController.handle);
contratoRotas.get("/:id/lancamentos/", listaLancamentosContratoController.handle);
contratoRotas.get("/:id", buscaPorIDController.handle);

export { contratoRotas};