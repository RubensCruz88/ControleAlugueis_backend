import { inject, injectable} from 'tsyringe';
import { Imovel } from '../../../entities/Imovel';
import { ImovelRepository } from '../../../repositories/ImovelRepository';

@injectable()
class ListaImoveisService {
	constructor(
		@inject("ImovelRepository")
		private imovelRepository: ImovelRepository
	){}

	async execute(): Promise<Imovel[]> {
		const retornoImoveis = await this.imovelRepository.listaImoveis();

		return retornoImoveis;
	}
}

export { ListaImoveisService }
