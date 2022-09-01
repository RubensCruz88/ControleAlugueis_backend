import { container } from 'tsyringe';
import { Request, Response } from 'express';
import { BuscaPorIdService } from './buscaPorIdService';

class BuscaPorIdController {
	async handle(request: Request, response: Response): Promise<Response> {
		const { id } = request.params

		const buscaPorIdService = container.resolve(BuscaPorIdService);

		const inquilino = await buscaPorIdService.execute(id);

		return response.json(inquilino);
	}

}

export { BuscaPorIdController }