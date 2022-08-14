import { Imovel } from '../../../model/Imovel';
import { ImovelRepository } from '../../../repositories/ImovelRepository';

class ListaImoveisService {
	constructor( private imovelRepository: ImovelRepository){}

	execute(): Imovel[] {
		const retornoImovel = this.imovelRepository.listaImoveis();

		return retornoImovel;
	}
}

export { ListaImoveisService }
