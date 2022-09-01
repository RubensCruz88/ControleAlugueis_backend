import { inject, injectable} from 'tsyringe';
import { AppError } from '../../../../../errors/AppError';
import { Imovel } from '../../../model/Imovel';
import { ImovelRepository } from '../../../repositories/ImovelRepository';

@injectable()
class ListaImovelPorIdService {
	constructor(
		@inject("ImovelRepository")
		private imovelRepository: ImovelRepository
	){}

	async execute(id: string): Promise<Imovel> {
		const imovel = await this.imovelRepository.buscaPorId(id);

		if(!imovel){
			throw new AppError("Imóvel não encontrado");
		}

		return imovel;
	}
}

export { ListaImovelPorIdService }