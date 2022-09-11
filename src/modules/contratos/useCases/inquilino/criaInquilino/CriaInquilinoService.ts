import { inject, injectable} from 'tsyringe';
import { AppError } from '@errors/AppError';
import { Inquilino } from '../../../entities/Inquilino';
import { InquilinoRepository } from '../../../repositories/InquilinoRepository';

interface IRequest {
	cpf: string;
	nome: string;
	telefone: string;
	email: string;
}

@injectable()
class CriaInquilinoService {
	constructor(
		@inject("InquilinoRepository")
		private inquilinoRepository: InquilinoRepository
	){}

	async execute(inquilino: IRequest): Promise<Inquilino> {

		if(!inquilino.cpf){
			throw new AppError("CPF não informado");
		}

		const inquilinoExiste = await this.inquilinoRepository.buscaPorCPF(inquilino.cpf);

		if(inquilinoExiste){
			throw new AppError("CPF já cadastrado");
		}

		const inquilinoCriado = await this.inquilinoRepository.criar(inquilino);

		return inquilinoCriado;
	}
}

export { CriaInquilinoService };