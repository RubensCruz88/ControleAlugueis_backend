import { Router } from 'express';
import { verificaAutenticacao } from '../middleware/verificaAutenticacao';

import { CriaImovelController } from '@modules/contratos/useCases/imovel/criaImovel/CriaImovelController'
import { ListaImoveisController } from '@modules/contratos/useCases/imovel/listaImoveis/ListaImoveisController';
import { ListaImovelPorIdController } from '@modules/contratos/useCases/imovel/listaImoveisPorId/ListaImovelPorIdController';
import { ExcluiImovelController } from '@modules/contratos/useCases/imovel/excluiImovel/ExcluiImovelController';

const imovelRotas = Router();

const criaImovelController = new CriaImovelController();
const listaImoveis = new ListaImoveisController();
const listaImovelPorId = new ListaImovelPorIdController();
const excluiImovel = new ExcluiImovelController();

//deve verificar a autenticação em todas as rotas, pois não pode exibir as informações dos imóveis sem estar logado
imovelRotas.use(verificaAutenticacao);

imovelRotas.post("/",criaImovelController.handle);
imovelRotas.get("/",listaImoveis.handle);
imovelRotas.get("/:id",listaImovelPorId.handle);
imovelRotas.delete("/:id",excluiImovel.handle);

export { imovelRotas };
