import { container } from 'tsyringe';
import { Request, Response } from 'express';
import { BuscaPorIdService } from './buscaPorIdService';

class BuscaPorIdController {
	async handle(request: Request, response: Response): Promise<Response> {
		const { id } = request.params

		const buscaPorIdService = container.resolve(BuscaPorIdService);

		try {
			const inquilino = await buscaPorIdService.execute(id);

			return response.json(inquilino);
		} catch(err) {
			return response.status(404).json({erro: err.message});
		}
	}

}

export { BuscaPorIdController }