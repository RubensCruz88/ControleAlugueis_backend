import { Request, Response } from 'express';
import { BuscaPorIdService } from './buscaPorIdService';

class BuscaPorIdController {
	constructor( private buscaPorIdService: BuscaPorIdService){}

	handle(request: Request, response: Response): Response {
		const { id } = request.params

		try {
			const inquilino = this.buscaPorIdService.execute(id);

			return response.json(inquilino);
		} catch(err) {
			return response.status(404).json({erro: err.message});
		}
	}

}

export { BuscaPorIdController }