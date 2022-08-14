import { InquilinoRepository } from '../../../repositories/InquilinoRepository';
import { BuscaPorCpfService } from './BuscaPorCPFService';
import { BuscaPorCpfController } from './BuscaPorCPFController';

const inquilinoRepository = InquilinoRepository.getInstance();
const buscaPorCpfService = new BuscaPorCpfService(inquilinoRepository);
const buscaPorCpfController = new BuscaPorCpfController(buscaPorCpfService);

export { buscaPorCpfController };