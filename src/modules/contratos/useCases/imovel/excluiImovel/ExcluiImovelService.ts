import { inject, injectable} from 'tsyringe';
import { AppError } from '@errors/AppError';
import { ImovelRepository } from '../../../repositories/ImovelRepository';

@injectable()
class ExcluiImovelService {
	constructor(
		@inject("ImovelRepository")
		private imovelRepository: ImovelRepository
	){}

	async execute(id: string): Promise<void> {
		const imovel = await this.imovelRepository.buscaPorId(id);

		if (!imovel){
			throw new AppError("Imóvel não localizado");
		}

		await this.imovelRepository.excluir(id);
		
	}

}

export { ExcluiImovelService }