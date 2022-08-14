import { ImovelRepository } from '../../../repositories/ImovelRepository';
import { CriaImovelService } from './CriaImovelService';
import { CriaImovelController } from './CriaImovelController';

const imovelRepository = ImovelRepository.getInstance();
const criaImovelService = new CriaImovelService(imovelRepository);
const criaImovelController = new CriaImovelController(criaImovelService);

export { criaImovelController };