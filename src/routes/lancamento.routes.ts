import { Router } from 'express';

import { CriaLancamentoController } from '@modules/movimentacao/useCases/lancamento/criaLancamento/CriaLancamentoController';
import { BuscaPorIdController } from '@modules/movimentacao/useCases/lancamento/buscaPorId/BuscaPorIdController';
import { verificaAutenticacao } from 'middleware/verificaAutenticacao';

const lancamentoRotas = Router();

const criaLancamentoController = new CriaLancamentoController()
const buscaLancamentoController = new BuscaPorIdController();

//deve verificar a autenticação em todas as rotas, pois não pode exibir as informações dos imóveis sem estar logado
lancamentoRotas.use(verificaAutenticacao);

lancamentoRotas.post("/",criaLancamentoController.handle);
lancamentoRotas.get("/:id",buscaLancamentoController.handle);


export { lancamentoRotas }