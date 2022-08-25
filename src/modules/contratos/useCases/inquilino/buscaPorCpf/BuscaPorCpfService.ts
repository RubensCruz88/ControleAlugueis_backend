import { inject, injectable} from 'tsyringe';
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
			throw new Error("Inquilino não encontrado");
		}

		return inquilino;
	}

}

export { BuscaPorCpfService }