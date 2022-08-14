import { InquilinoRepository } from '../../../repositories/InquilinoRepository';

class ExcluiInquilinoService {
	constructor(private inquilinoRepository: InquilinoRepository){}

	execute(id: string): void {
		const inquilinoExiste = this.inquilinoRepository.buscaPorId(id);

		if(!inquilinoExiste){
			throw new Error("inquilino não encontrado");
		}

		this.inquilinoRepository.excluir(id);
	}

}

export { ExcluiInquilinoService }