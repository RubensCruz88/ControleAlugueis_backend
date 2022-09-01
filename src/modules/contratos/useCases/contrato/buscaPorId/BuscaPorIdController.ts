import { container } from 'tsyringe';
import { Request, Response } from 'express';
import { BuscaPorIdService } from './BuscaPorIdService'

class BuscaPorIDController {
	async handle(request: Request, response: Response): Promise<Response> {
		const { id } = request.params;

		const buscaPorIdService = container.resolve(BuscaPorIdService)

		const contrato = await buscaPorIdService.execute(id);

		return response.json(contrato);
	}

}

export { BuscaPorIDController }