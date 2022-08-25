import { Router } from 'express';

import { CriaInquilinoController } from '../modules/contratos/useCases/inquilino/criaInquilino/CriaInquilinoController';
import { ListaInquilinoController } from '../modules/contratos/useCases/inquilino/listaInquilinos/listaInquilinoController';
import { BuscaPorIdController } from '../modules/contratos/useCases/inquilino/buscaPorId/buscaPorIdController';
import { BuscaPorCpfController } from '../modules/contratos/useCases/inquilino/buscaPorCpf/BuscaPorCpfController'
import { ExcluiInquilinoController } from '../modules/contratos/useCases/inquilino/excluiInquilino/ExcluiInquilinoController';

const inquilinoRotas = Router();

const criaInquilinoController = new CriaInquilinoController();
const listaInquilinoController = new ListaInquilinoController();
const buscaPorCpfController = new BuscaPorCpfController();
const buscaPorIdController = new BuscaPorIdController();
const excluirInquilinoController = new ExcluiInquilinoController();

inquilinoRotas.post("/",criaInquilinoController.handle);

inquilinoRotas.get("/",listaInquilinoController.handle);

inquilinoRotas.get("/:id",buscaPorIdController.handle);

inquilinoRotas.get("/:cpf",buscaPorCpfController.handle);

inquilinoRotas.delete("/:id",excluirInquilinoController.handle);

export { inquilinoRotas };