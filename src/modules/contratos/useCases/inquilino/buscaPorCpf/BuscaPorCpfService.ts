import { inject, injectable} from 'tsyringe';
import { AppError } from '../../../../../errors/AppError';
import { Inquilino } from '../../../model/Inquilino';
import { InquilinoRepository } from '../../../repositories/InquilinoRepository';

@injectable()
class BuscaPorCpfService {
	constructor(
		@inject("InquilinoRepository")
		private inquilinoRepository: InquilinoRepository
	){}

	async execute(cpf: string): Promise<Inquilino> {
		const inquilino = await this.inquilinoRepository.buscaPorCPF(cpf);

		if(!inquilino){
			throw new AppError("Inquilino não encontrado");
		}

		return inquilino;
	}

}

export { BuscaPorCpfService }