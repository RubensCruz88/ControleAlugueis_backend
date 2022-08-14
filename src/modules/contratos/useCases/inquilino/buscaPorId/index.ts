import { InquilinoRepository } from '../../../repositories/InquilinoRepository';
import { BuscaPorIdService } from './buscaPorIdService';
import { BuscaPorIdController } from './buscaPorIdController';

const inquilinoRepository = InquilinoRepository.getInstance();
const buscaPorIdService = new BuscaPorIdService(inquilinoRepository);
const buscaPorIdController = new BuscaPorIdController(buscaPorIdService);

export { buscaPorIdController };