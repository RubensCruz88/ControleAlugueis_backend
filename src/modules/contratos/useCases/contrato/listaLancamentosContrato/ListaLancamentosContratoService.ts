import { Contrato } from "@modules/contratos/entities/Contrato";
import { ContratoRepository } from "@modules/contratos/repositories/ContratoRepository";
import { inject, injectable } from "tsyringe";

@injectable()
class ListaLancamentosContratoService {
	constructor(
		@inject("ContratoRepository")
		private contratoRepositorio: ContratoRepository
	){}

	async execute(contrato_id: string): Promise<Contrato>{
		const contrato = await this.contratoRepositorio.listaLancamentosContrato(contrato_id);

		return contrato
	}

}

export { ListaLancamentosContratoService }