import { container } from 'tsyringe';

import { IImovelRepository,ImovelRepository } from '../../modules/contratos/repositories/ImovelRepository';
import { InquilinoRepository } from '../../modules/contratos/repositories/InquilinoRepository';
import { ContratoRepository } from '../../modules/contratos/repositories/ContratoRepository';
import { UsuarioRepository } from '../../modules/contas/repositories/UsuarioRepository';

container.registerSingleton<IImovelRepository>(
	"ImovelRepository",
	ImovelRepository
);

container.registerSingleton(
	"InquilinoRepository",
	InquilinoRepository
);

container.registerSingleton(
	"ContratoRepository",
	ContratoRepository
);

container.registerSingleton(
	"UsuarioRepository",
	UsuarioRepository
)