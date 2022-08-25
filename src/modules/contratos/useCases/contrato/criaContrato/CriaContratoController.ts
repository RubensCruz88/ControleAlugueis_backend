import { container } from 'tsyringe';
import { Request, Response } from 'express';
import { CriaContratoService } from './CriaContratoService'

class CriaContratoController {
	async handle(request: Request, response: Response): Promise<Response> {
		const {inicio, fim, imovel_id, inquilino_id, vencimento_fatura} = request.body;

		const criaContratoService = container.resolve(CriaContratoService);

		try {
			const novoContrato = await criaContratoService.execute({inicio, fim, imovel_id, inquilino_id, vencimento_fatura} );

			return response.json(novoContrato);
		} catch(err){
			return response.status(400).json({erro: err.message});
		}
	}

}

export { CriaContratoController }