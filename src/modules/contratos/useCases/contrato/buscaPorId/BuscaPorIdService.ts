import { Contrato } from '../../../model/Contrato';
import { ContratoRepository } from '../../../repositories/ContratoRepository';

class BuscaPorIdService {
	constructor(private contratoRepository: ContratoRepository){}

	execute(id: string): Contrato {
		const contrato = this.contratoRepository.buscaPorId(id);

		if(!contrato) {
			throw new Error("Contrato não encontrado");
		}

		return contrato;
	}

}

export { BuscaPorIdService }