import { inject, injectable} from 'tsyringe';
import { AppError } from '../../../../../errors/AppError';
import { InquilinoRepository } from '../../../repositories/InquilinoRepository';

@injectable()
class ExcluiInquilinoService {
	constructor(
		@inject("InquilinoRepository")
		private inquilinoRepository: InquilinoRepository
	){}

	async execute(id: string): Promise<void> {
		const inquilinoExiste = await this.inquilinoRepository.buscaPorId(id);

		if(!inquilinoExiste){
			throw new AppError("inquilino não encontrado");
		}

		this.inquilinoRepository.excluir(id);
	}

}

export { ExcluiInquilinoService }