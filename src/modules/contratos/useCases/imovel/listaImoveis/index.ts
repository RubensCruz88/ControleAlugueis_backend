import { ImovelRepository } from '../../../repositories/ImovelRepository';
import { ListaImoveisService } from './ListaImoveisService';
import { ListaImoveisController } from './ListaImoveisController';

const imovelRepository = ImovelRepository.getInstance();
const listaImoveisService = new ListaImoveisService(imovelRepository);
const listaImoveisController = new ListaImoveisController(listaImoveisService);

export { listaImoveisController };