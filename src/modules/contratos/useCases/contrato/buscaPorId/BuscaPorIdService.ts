import { inject, injectable } from 'tsyringe';
import { AppError } from '@errors/AppError';
import { Contrato } from '../../../entities/Contrato';
import { ContratoRepository } from '../../../repositories/ContratoRepository';

@injectable()
class BuscaPorIdService {
	constructor(
		@inject("ContratoRepository")
		private contratoRepository: ContratoRepository
	){}

	async execute(id: string): Promise<Contrato> {
		const contrato = await this.contratoRepository.buscaPorId(id);

		if(!contrato) {
			throw new AppError("Contrato não encontrado");
		}

		return contrato;
	}

}

export { BuscaPorIdService }