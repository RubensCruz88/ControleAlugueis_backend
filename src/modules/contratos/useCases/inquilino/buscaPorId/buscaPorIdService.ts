import { Inquilino } from '../../../model/Inquilino';
import { InquilinoRepository } from '../../../repositories/InquilinoRepository';

class BuscaPorIdService {
	constructor(private inquilinoRepository: InquilinoRepository){}

	execute(id: string): Inquilino {
		const inquilino = this.inquilinoRepository.buscaPorId(id);

		if(!inquilino){
			throw new Error("Inquilino não encontrado");
		}

		return inquilino;
	}
}

export { BuscaPorIdService }

