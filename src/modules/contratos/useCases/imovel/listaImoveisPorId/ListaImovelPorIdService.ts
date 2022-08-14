import { Imovel } from '../../../model/Imovel';
import { ImovelRepository } from '../../../repositories/ImovelRepository';

class ListaImovelPorIdService {
	constructor( private imovelRepository: ImovelRepository){}

	execute(id: string): Imovel {
		const imovel = this.imovelRepository.consultaPorId(id);

		if(!imovel){
			throw new Error("Imóvel não encontrado");
		}

		return imovel;
	}
}

export { ListaImovelPorIdService }