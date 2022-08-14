import { Inquilino } from '../../../model/Inquilino';
import { InquilinoRepository } from '../../../repositories/InquilinoRepository';

class ListaInquilinosService {
	constructor(private inquilinoRepository: InquilinoRepository){}

	execute(): Inquilino[]{
		const inquilinos = this.inquilinoRepository.listar();

		return inquilinos;
	}

}

export { ListaInquilinosService }
