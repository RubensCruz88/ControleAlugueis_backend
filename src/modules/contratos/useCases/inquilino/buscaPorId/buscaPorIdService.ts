import { inject, injectable} from 'tsyringe';
import { AppError } from '@errors/AppError';
import { Inquilino } from '../../../entities/Inquilino';
import { InquilinoRepository } from '../../../repositories/InquilinoRepository';

@injectable()
class BuscaPorIdService {
	constructor(
		@inject("InquilinoRepository")
		private inquilinoRepository: InquilinoRepository
	){}

	async execute(id: string): Promise<Inquilino> {
		const inquilino = await this.inquilinoRepository.buscaPorId(id);

		if(!inquilino){
			throw new AppError("Inquilino não encontrado");
		}

		return inquilino;
	}
}

export { BuscaPorIdService }

