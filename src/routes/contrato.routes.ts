import { Router } from 'express';

import { criaContratoController } from '../modules/contratos/useCases/contrato/criaContrato';
import { listaContratosController } from '../modules/contratos/useCases/contrato/listaContratos';

const contratoRotas = Router();

contratoRotas.post("/", (request, response) => {
	criaContratoController.handle(request, response);
});

contratoRotas.get("/", (request, response) => {
	listaContratosController.handle(request, response);
});

export { contratoRotas};