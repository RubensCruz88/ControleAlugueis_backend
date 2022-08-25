import { inject, injectable} from 'tsyringe';
import { Imovel } from '../../../model/Imovel';
import { ImovelRepository } from '../../../repositories/ImovelRepository';

interface IRequest {
	nome: string;
	endereco: string;
	numero: number;
	valor_aluguel?: number;
	valor_iptu?: number;
}

@injectable()
class CriaImovelService {
	constructor(
		@inject("ImovelRepository")
		private imovelRepository: ImovelRepository
	){}

	async execute(imovel: IRequest): Promise<Imovel> {
		
		if(!imovel.nome){
			throw new Error("Nome do imóvel não informado");
		}

		const imovelExistente = await this.imovelRepository.buscaPorNome(imovel.nome);

		if(imovelExistente){
			throw new Error("nome de imóvel já existe");
		}

		const retornoImovel = await this.imovelRepository.criar(imovel);

		return retornoImovel

	}
}

export { CriaImovelService };

