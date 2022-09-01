import { container } from 'tsyringe';
import { Request, Response } from 'express';
import { ExcluiInquilinoService } from './ExcluiInquilinoService'

class ExcluiInquilinoController {
	async handle(request: Request, response: Response): Promise<Response> {
		const { id } = request.params;
		const excluiInquilinoService = container.resolve(ExcluiInquilinoService);

		await excluiInquilinoService.execute(id);

		return response.send();
	}

}

export { ExcluiInquilinoController }