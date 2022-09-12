import { Contrato } from "@modules/contratos/entities/Contrato";
import { ContratoRepository } from "@modules/contratos/repositories/ContratoRepository";
import { inject, injectable } from "tsyringe";

@injectable()
class ListaContratosAtivosService {
	constructor(
		@inject("ContratoRepository")
		private contratoRepository: ContratoRepository
	){}

	async execute(): Promise<Contrato[]> {
		const contratos = this.contratoRepository.listaAtivos();

		return contratos;
	}

}

export { ListaContratosAtivosService }