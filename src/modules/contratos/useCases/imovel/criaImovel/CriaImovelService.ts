import { Imovel } from '../../../model/Imovel';
import { ImovelRepository } from '../../../repositories/ImovelRepository';

interface IRequest {
	nome: string;
	endereco: string;
	numero: number;
	valor: number;
	valor_iptu?: number;
}

class CriaImovelService {
	constructor(private imovelRepository: ImovelRepository){}

	execute(imovel: IRequest): Imovel {
		
		if(!imovel.nome){
			throw new Error("Nome do imóvel não informado");
		}

		const imovelExistente = this.imovelRepository.buscaPorNome(imovel.nome);

		if(imovelExistente){
			throw new Error("nome de imóvel já existe");
		}

		const retornoImovel = this.imovelRepository.criar(imovel);

		return retornoImovel

	}
}

export { CriaImovelService };

