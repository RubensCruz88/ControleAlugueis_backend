import { ContratoRepository } from '../../../repositories/ContratoRepository';
import { ListaContratosService } from './ListaContratosService';
import { ListaContratosController } from './ListaContratosController';

const contratoRepository = ContratoRepository.getInstance();
const listaContratosService = new ListaContratosService(contratoRepository);
const listaContratosController = new ListaContratosController(listaContratosService);

export { listaContratosController };