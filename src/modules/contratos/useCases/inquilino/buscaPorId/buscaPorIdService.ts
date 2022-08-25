import { inject, injectable} from 'tsyringe';
import { Inquilino } from '../../../model/Inquilino';
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
			throw new Error("Inquilino não encontrado");
		}

		return inquilino;
	}
}

export { BuscaPorIdService }

