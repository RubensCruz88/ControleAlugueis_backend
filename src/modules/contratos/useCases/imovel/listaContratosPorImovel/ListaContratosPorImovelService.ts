import { Imovel } from "@modules/contratos/entities/Imovel";
import { ImovelRepository } from "@modules/contratos/repositories/ImovelRepository";
import { inject, injectable } from "tsyringe";

@injectable()
class ListaContratosPorImovelService {
	constructor(
		@inject("ImovelRepository")
		private imovelRepository: ImovelRepository
	){}

	async execute(id: string): Promise<Imovel>{
		const imovel = await this.imovelRepository.listaContratos(id);

		return imovel
	}

}

export { ListaContratosPorImovelService }