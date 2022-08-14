import { Router } from 'express';

import { criaImovelController } from '../modules/contratos/useCases/imovel/criaImovel'
import { listaImoveisController } from '../modules/contratos/useCases/imovel/listaImoveis';
import { listaImovelPorIdController } from '../modules/contratos/useCases/imovel/listaImoveisPorId';
import { excluiImovelController } from '../modules/contratos/useCases/imovel/excluiImovel';

const imovelRotas = Router();

imovelRotas.post("/",(request, response)=>{
	criaImovelController.handle(request, response);
})

imovelRotas.get("/",(request,response) =>{
	listaImoveisController.handle(request, response);
});

imovelRotas.get("/:id",(request,response) =>{
	listaImovelPorIdController.handle(request, response);
});

imovelRotas.delete("/:id",(request,response) =>{
	excluiImovelController.handle(request,response);
});

export { imovelRotas };
