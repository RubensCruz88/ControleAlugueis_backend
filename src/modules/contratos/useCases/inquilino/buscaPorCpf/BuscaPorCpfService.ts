import { Inquilino } from '../../../model/Inquilino';
import { InquilinoRepository } from '../../../repositories/InquilinoRepository';

class BuscaPorCpfService {
	constructor(private inquilinoRepository: InquilinoRepository){}

	execute(cpf: string): Inquilino {
		const inquilino = this.inquilinoRepository.buscaPorCPF(cpf);

		return inquilino;
	}

}

export { BuscaPorCpfService }