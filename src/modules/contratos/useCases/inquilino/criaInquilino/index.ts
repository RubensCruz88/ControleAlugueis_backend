import { InquilinoRepository } from '../../../repositories/InquilinoRepository';
import { CriaInquilinoService } from './CriaInquilinoService';
import { CriaInquilinoController } from './CriaInquilinoController';

const inquilinoRepository = InquilinoRepository.getInstance();
const criaInquilinoService = new CriaInquilinoService(inquilinoRepository);
const criaInquilinoController = new CriaInquilinoController(criaInquilinoService);

export { criaInquilinoController };