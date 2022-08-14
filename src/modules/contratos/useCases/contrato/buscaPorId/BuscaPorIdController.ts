import { Request, Response } from 'express';
import { BuscaPorIdService } from './BuscaPorIdService'

class BuscaPorIDController {
	constructor( private buscaPorIdService: BuscaPorIdService){}

	handle(request: Request, response: Response): Response {
		const { id } = request.params;

		try {
			const contrato = this.buscaPorIdService.execute(id);

			return response.json(contrato);
		} catch (err){
			return response.status(404).json({erro: err.message});
		}
	}

}

export { BuscaPorIDController }