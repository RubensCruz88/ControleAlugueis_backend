import { dataSource } from "@database/dataSource"
import { Lancamento } from "@modules/movimentacao/entities/Lancamento"
import { Repository } from "typeorm";

interface ICriaLancamento {
	periodo: string;
	contrato_id: string;
	valor_bruto: number;
	iptu: number;
	abono: number;
	multa: number;
	reembolso: number;
	valor_pago: number;
	data_pagamento: Date;
	observacao: string;
}

class LancamentoRepository {
	private repositorio: Repository<Lancamento>;

	constructor(){
		this.repositorio = dataSource.getRepository(Lancamento);
	}

	async criar({periodo, contrato_id, valor_bruto, iptu = 0, abono = 0, multa = 0, reembolso = 0, valor_pago, data_pagamento, observacao}: ICriaLancamento): Promise<Lancamento> {
		const valor_liquido = valor_bruto + iptu + abono + multa - reembolso;
		
		const lancamento = this.repositorio.create({
			periodo,
			contrato_id,
			valor_bruto,
			iptu,
			abono,
			multa,
			reembolso,
			valor_pago,
			valor_liquido,
			data_pagamento,
			observacao
		});

		await this.repositorio.save(lancamento);

		return lancamento;
	};

	async buscaPorContratoPeriodo(contrato_id: string, periodo: string): Promise<Lancamento> {
		const lancamento = await this.repositorio.findOne({
			where: [
				{
					contrato_id,
					periodo
				}
			]
		});

		return lancamento;
	};

	async buscaPorId(id: string): Promise<Lancamento> {
		const lancamento = await this.repositorio.findOneBy({id});

		return lancamento;
	};

	// async buscaPorContrato(contrato_id: string): Promise<Lancamento> {
	// 	const lancamentos = await this.repositorio.createQueryBuilder()
	// 	})
	// }

}

export { LancamentoRepository }