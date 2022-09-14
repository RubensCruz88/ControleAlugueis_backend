import { Lancamento } from "@modules/movimentacao/entities/Lancamento";
import { LancamentoRepository } from "@modules/movimentacao/repositories/LancamentoRepository";
import { inject, injectable } from "tsyringe";

@injectable()
class BuscaPorIdService {
	constructor(
		@inject("LancamentoRepository")
		private lancamentoRepository: LancamentoRepository
	){}

	async execute(id: string): Promise<Lancamento>{
		const lancamento = await this.lancamentoRepository.buscaPorId(id);

		return lancamento;

	}

}

export { BuscaPorIdService }