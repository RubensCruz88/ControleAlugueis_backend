import { InquilinoRepository } from '../../../repositories/InquilinoRepository';
import { ExcluiInquilinoService } from './ExcluiInquilinoService';
import { ExcluiInquilinoController } from './ExcluiInquilinoController';

const inquilinoRepository = InquilinoRepository.getInstance();
const excluiInquilinoService = new ExcluiInquilinoService(inquilinoRepository);
const excluiInquilinoController = new ExcluiInquilinoController(excluiInquilinoService);

export { excluiInquilinoController };