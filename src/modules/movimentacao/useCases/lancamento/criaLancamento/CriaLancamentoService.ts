import { LancamentoRepository } from "@modules/movimentacao/repositories/LancamentoRepository";
import { Lancamento } from "@modules/movimentacao/entities/Lancamento";
import { inject, injectable } from "tsyringe";
import { AppError } from "@errors/AppError";
import { ContratoRepository } from "@modules/contratos/repositories/ContratoRepository";

interface IRequest {
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

@injectable()
class CriaLancamentoService {
	constructor(
		@inject("LancamentoRepository")
		private lancamentoRepository: LancamentoRepository,
		@inject("ContratoRepository")
		private contratoRepository: ContratoRepository
	){}

	async execute({periodo, contrato_id, valor_bruto, iptu, abono, multa, reembolso, valor_pago, data_pagamento, observacao}: IRequest): Promise<Lancamento> {
		const contrato = await this.contratoRepository.buscaPorId(contrato_id);

		if(!contrato){
			throw new AppError("Contrato informado não existe");
		}

		const periodoInicioMes = new Date(periodo.substring(2) + '-' + periodo.substring(0,2) + "-01");
		const periodoFinalMes = new Date(periodoInicioMes.getFullYear(), periodoInicioMes.getMonth() + 1, 0);

		if(periodoFinalMes < contrato.inicio || periodoInicioMes > contrato.fim){
			throw new AppError("Período informado está fora da vigência do contrato");
		}

		const lancamentoExiste = await this.lancamentoRepository.buscaPorContratoPeriodo(contrato_id, periodo);

		if(lancamentoExiste){
			throw new AppError("Já existe um lançamento para este contrato e período");
		}

		const lancamento = await this.lancamentoRepository.criar({periodo, contrato_id, valor_bruto, iptu, abono, multa, reembolso, valor_pago, data_pagamento, observacao})

		return lancamento;
	}
}

export { CriaLancamentoService }