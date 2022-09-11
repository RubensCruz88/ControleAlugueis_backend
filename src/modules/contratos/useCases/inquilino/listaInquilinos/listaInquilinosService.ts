import { inject, injectable} from 'tsyringe';
import { Inquilino } from '../../../entities/Inquilino';
import { InquilinoRepository } from '../../../repositories/InquilinoRepository';

@injectable()
class ListaInquilinosService {
	constructor(
		@inject("InquilinoRepository")
		private inquilinoRepository: InquilinoRepository
	){}

	async execute(): Promise<Inquilino[]>{
		const inquilinos = await this.inquilinoRepository.listar();

		return inquilinos;
	}

}

export { ListaInquilinosService }
