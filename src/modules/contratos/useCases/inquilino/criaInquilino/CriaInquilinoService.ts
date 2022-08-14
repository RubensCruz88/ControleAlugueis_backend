import { Inquilino } from '../../../model/Inquilino';
import { InquilinoRepository } from '../../../repositories/InquilinoRepository';

interface IRequest {
	cpf: string;
	nome: string;
	telefone: string;
	email: string;
}

class CriaInquilinoService {
	constructor(private inquilinoRepository: InquilinoRepository){}

	execute(inquilino: IRequest): Inquilino {

		if(!inquilino.cpf){
			throw new Error("CPF não informado");
		}

		const inquilinoExiste = this.inquilinoRepository.buscaPorCPF(inquilino.cpf);

		if(inquilinoExiste){
			throw new Error("CPF já cadastrado");
		}

		const inquilinoCriado = this.inquilinoRepository.criar(inquilino);

		return inquilinoCriado;
	}
}

export { CriaInquilinoService };