import { Router } from 'express';
import { verificaAutenticacao } from '../middleware/verificaAutenticacao';

import { CriaInquilinoController } from '../modules/contratos/useCases/inquilino/criaInquilino/CriaInquilinoController';
import { ListaInquilinoController } from '../modules/contratos/useCases/inquilino/listaInquilinos/listaInquilinoController';
import { BuscaPorIdController } from '../modules/contratos/useCases/inquilino/buscaPorId/buscaPorIdController';
import { ExcluiInquilinoController } from '../modules/contratos/useCases/inquilino/excluiInquilino/ExcluiInquilinoController';

const inquilinoRotas = Router();

const criaInquilinoController = new CriaInquilinoController();
const listaInquilinoController = new ListaInquilinoController();
const buscaPorIdController = new BuscaPorIdController();
const excluirInquilinoController = new ExcluiInquilinoController();

//deve verificar a autenticação em todas as rotas, pois não pode exibir as informações dos imóveis sem estar logado
inquilinoRotas.use(verificaAutenticacao);

inquilinoRotas.post("/",criaInquilinoController.handle);
inquilinoRotas.get("/",listaInquilinoController.handle);
inquilinoRotas.get("/:id",buscaPorIdController.handle);
inquilinoRotas.delete("/:id",excluirInquilinoController.handle);

export { inquilinoRotas };