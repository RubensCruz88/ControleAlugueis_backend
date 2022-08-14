import { ImovelRepository } from '../../../repositories/ImovelRepository';
import { ExcluiImovelService } from './excluiImovelService'
import { ExcluiImovelController } from './ExcluiImovelController'

const imovelRepository = ImovelRepository.getInstance();
const excluiImovelService = new ExcluiImovelService(imovelRepository);
const excluiImovelController = new ExcluiImovelController(excluiImovelService);

export { excluiImovelController };

