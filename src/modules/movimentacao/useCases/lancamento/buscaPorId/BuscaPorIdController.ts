import { Request, Response } from 'express';
import { container } from "tsyringe";
import { BuscaPorIdService } from './BuscaPorIdService';

class BuscaPorIdController {
	async handle(request: Request, response: Response){
		const { id } = request.params;

		const buscaPorIdService = container.resolve(BuscaPorIdService);

		const lancamento = await buscaPorIdService.execute(id);

		return response.json(lancamento);
	}

}

export { BuscaPorIdController }