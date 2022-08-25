import { inject, injectable} from 'tsyringe';
import { Contrato } from '../../../model/Contrato';
import { ContratoRepository } from '../../../repositories/ContratoRepository';

@injectable()
class ListaContratosService {
	constructor(
		@inject("ContratoRepository")
		private contratoRepository: ContratoRepository
	){}

	async execute(): Promise<Contrato[]>{
		const contratos = this.contratoRepository.listar();

		return contratos;
	}
}

export { ListaContratosService }