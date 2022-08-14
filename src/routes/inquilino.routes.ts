import { Router } from 'express';

import { criaInquilinoController } from '../modules/contratos/useCases/inquilino/criaInquilino';
import { listaInquilinoController } from '../modules/contratos/useCases/inquilino/listaInquilinos';
import { buscaPorIdController } from '../modules/contratos/useCases/inquilino/buscaPorId';
import { buscaPorCpfController } from '../modules/contratos/useCases/inquilino/buscaPorCpf'
import { excluiInquilinoController } from '../modules/contratos/useCases/inquilino/excluiInquilino';

const inquilinoRotas = Router();


inquilinoRotas.post("/",(request,response) => {
	criaInquilinoController.handle(request, response);
})

inquilinoRotas.get("/",(request,response) => {
	listaInquilinoController.handle(request, response);
})

inquilinoRotas.get("/:id",(request,response) => {
	buscaPorIdController.handle(request, response);
})

inquilinoRotas.get("/:cpf",(request,response) => {
	buscaPorCpfController.handle(request, response);
})

inquilinoRotas.delete("/:id",(request,response) => {
	excluiInquilinoController.handle(request, response);
})

export { inquilinoRotas };