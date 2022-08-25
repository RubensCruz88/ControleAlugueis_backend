import { container } from 'tsyringe';
import { Request, Response } from 'express';
import { BuscaPorCpfService } from './BuscaPorCpfService'

class BuscaPorCpfController {
	async handle(request: Request, response: Response): Promise<Response> {
		const { cpf } = request.params;

		const buscaPorCpfService = container.resolve(BuscaPorCpfService);

		try {
			const inquilino = await buscaPorCpfService.execute(cpf);

			return response.json(inquilino);
		} catch(err){
			return response.status(404).json({erro: err.message});
		}
	}

}

export { BuscaPorCpfController }