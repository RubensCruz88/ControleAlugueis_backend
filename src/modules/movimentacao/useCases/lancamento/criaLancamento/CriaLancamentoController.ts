import { Request, Response } from 'express';
import { container } from "tsyringe";
import { CriaLancamentoService } from "./CriaLancamentoService";

class CriaLancamentoController {
	async handle(request: Request, response: Response){
		const {periodo, contrato_id, valor_bruto, iptu, abono, multa, reembolso, valor_pago, data_pagamento, observacao} = request.body;

		const criaLancamentoService = container.resolve(CriaLancamentoService);

		const lancamento = await criaLancamentoService.execute({
			periodo,
			contrato_id,
			valor_bruto,
			iptu,
			abono,
			multa,
			reembolso,
			valor_pago,
			data_pagamento,
			observacao
		});

		return response.json(lancamento);
	}


}

export { CriaLancamentoController }