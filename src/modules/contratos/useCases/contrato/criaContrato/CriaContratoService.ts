import { inject, injectable} from 'tsyringe';
import { AppError } from '../../../../../errors/AppError';
import { Contrato } from '../../../model/Contrato'
import { ContratoRepository } from '../../../repositories/ContratoRepository';
import { ImovelRepository } from '../../../repositories/ImovelRepository';
import { InquilinoRepository } from '../../../repositories/InquilinoRepository';

interface IRequest {
	inicio: Date;
	fim: Date;
	imovel_id: string; 
	inquilino_id: string;
	vencimento_fatura: number;
}

@injectable()
class CriaContratoService {
	constructor(
		@inject("ContratoRepository")
		private contratoRepository: ContratoRepository,

		@inject("InquilinoRepository")
		private inquilinoRepository: InquilinoRepository,

		@inject("ImovelRepository")
		private imovelRepository: ImovelRepository
	){}

	async execute({inicio, fim, imovel_id, inquilino_id, vencimento_fatura}: IRequest): Promise<Contrato> | undefined {
		const inquilinoExiste = await this.inquilinoRepository.buscaPorId(inquilino_id);

		if(!inquilinoExiste){
			throw new AppError("Inquilino informado não existe");
		}

		const imovelExiste = await this.imovelRepository.buscaPorId(imovel_id);

		if(!imovelExiste){
			throw new AppError("Imóvel informado não existe");
		}

		const novoContrato = await this.contratoRepository.criar({inicio, fim, imovel_id, inquilino_id, vencimento_fatura});

		return novoContrato;
	}

}

export { CriaContratoService }