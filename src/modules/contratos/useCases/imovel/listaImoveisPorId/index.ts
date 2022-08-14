import { ImovelRepository } from '../../../repositories/ImovelRepository';
import { ListaImovelPorIdService } from './ListaImovelPorIdService';
import { ListaImovelPorIdController } from './ListaImovelPorIdController'

const imovelRepository = ImovelRepository.getInstance();
const listaImovelPorIdService = new ListaImovelPorIdService(imovelRepository);
const listaImovelPorIdController = new ListaImovelPorIdController(listaImovelPorIdService);

export { listaImovelPorIdController }

