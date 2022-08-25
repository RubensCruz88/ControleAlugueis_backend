import { container } from 'tsyringe';
import { Request, Response } from 'express';
import { ExcluiInquilinoService } from './ExcluiInquilinoService'

class ExcluiInquilinoController {
	async handle(request: Request, response: Response): Promise<Response> {
		const { id } = request.params;
		const excluiInquilinoService = container.resolve(ExcluiInquilinoService);

		try {
			await excluiInquilinoService.execute(id);

			return response.send();
		} catch(err) {
			return response.status(400).json({erro: err.message});
		}
	}

}

export { ExcluiInquilinoController }