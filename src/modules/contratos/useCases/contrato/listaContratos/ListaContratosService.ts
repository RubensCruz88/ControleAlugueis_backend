import { Contrato } from '../../../model/Contrato';
import { ContratoRepository } from '../../../repositories/ContratoRepository';

class ListaContratosService {
	constructor(private contratoRepository: ContratoRepository){}

	execute(): Contrato[]{
		const contratos = this.contratoRepository.listar();

		return contratos;
	}
}

export { ListaContratosService }