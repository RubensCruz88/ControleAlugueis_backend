import { Repository } from 'typeorm';
import { Contrato } from '../model/Contrato';
import { dataSource } from '../../../database/dataSource'

interface ICriaContratoDTO {
	inicio: Date;
	fim: Date;
	imovel_id: string;
	inquilino_id: string;
	vencimento_fatura: number;
}

class ContratoRepository {
	private repositorio: Repository<Contrato>;

	constructor(){
		this.repositorio = dataSource.getRepository(Contrato);
	};

	async criar({inicio, fim, imovel_id, inquilino_id, vencimento_fatura}: ICriaContratoDTO): Promise<Contrato>{
		const data_inicio = new Date(inicio);
		const data_fim = new Date(fim);

		const contrato = this.repositorio.create({inicio: data_inicio, fim: data_fim, imovel_id, inquilino_id, vencimento_fatura});

		await this.repositorio.save(contrato);

		return contrato;
	};

	async listar(): Promise<Contrato[]> {
		return await this.repositorio.find();
	};

	async buscaPorId(id: string): Promise<Contrato> | undefined {
		const contrato = await this.repositorio.findOneBy({id});

		return contrato;
	};

}

export { ContratoRepository }