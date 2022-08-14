import { InquilinoRepository } from '../../../repositories/InquilinoRepository';
import { ListaInquilinosService } from './listaInquilinosService';
import { ListaInquilinoController } from './listaInquilinoController';

const inquilinoRepository = InquilinoRepository.getInstance();
const listaInquilinoService = new ListaInquilinosService(inquilinoRepository);
const listaInquilinoController = new ListaInquilinoController(listaInquilinoService);

export { listaInquilinoController };