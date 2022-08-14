import { ContratoRepository } from '../../../repositories/ContratoRepository';
import { ImovelRepository } from '../../../repositories/ImovelRepository';
import { InquilinoRepository } from '../../../repositories/InquilinoRepository';

import { CriaContratoService } from './CriaContratoService';
import { CriaContratoController } from './CriaContratoController';

const contratoRepository = ContratoRepository.getInstance();
const inquilinoRepository = InquilinoRepository.getInstance();
const imovelRepository = ImovelRepository.getInstance();

const criaContratoService = new CriaContratoService(
	contratoRepository,
	inquilinoRepository, 
	imovelRepository
);

const criaContratoController = new CriaContratoController(criaContratoService);

export { criaContratoController };