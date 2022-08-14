import { Contrato } from '../../../model/Contrato'
import { ContratoRepository } from '../../../repositories/ContratoRepository';
import { ImovelRepository } from '../../../repositories/ImovelRepository';
import { InquilinoRepository } from '../../../repositories/InquilinoRepository';

interface IRequest {
	inicio: Date;
	fim: Date;
	imovel_id: string; 
	inquilino_id: string;
	vencimento: Date;
}

class CriaContratoService {
	constructor(
		private contratoRepository: ContratoRepository,
		private inquilinoRepository: InquilinoRepository,
		private imovelRepository: ImovelRepository
	){}

	execute(contrato: IRequest): Contrato | undefined {
		const inquilinoExiste = this.inquilinoRepository.buscaPorId(contrato.inquilino_id);

		if(!inquilinoExiste){
			throw new Error("Inquilino informado não existe");
		}

		const imovelExiste = this.imovelRepository.consultaPorId(contrato.imovel_id);

		if(!imovelExiste){
			throw new Error("Imóvel informado não existe");
		}

		const novoContrato = this.contratoRepository.criar(contrato);

		return novoContrato;
	}

}

export { CriaContratoService }