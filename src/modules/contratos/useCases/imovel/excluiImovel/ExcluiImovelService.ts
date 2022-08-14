import { Imovel } from '../../../model/Imovel';
import { ImovelRepository } from '../../../repositories/ImovelRepository';

class ExcluiImovelService {
	constructor( private imovelRepository: ImovelRepository){}

	execute(id: string): void {
		const imovel = this.imovelRepository.consultaPorId(id);

		if (!imovel){
			throw new Error("Imóvel não localizado");
		}

		this.imovelRepository.excluir(id);
		
	}

}

export { ExcluiImovelService }