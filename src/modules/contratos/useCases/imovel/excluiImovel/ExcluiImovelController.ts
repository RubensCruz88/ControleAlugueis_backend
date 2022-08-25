import { container } from 'tsyringe';
import { Request, Response } from 'express';
import { ExcluiImovelService } from './ExcluiImovelService';

class ExcluiImovelController {
	async handle(request: Request, response: Response): Promise<Response> {
		const { id } = request.params;
		const excluiImovelService = container.resolve(ExcluiImovelService);

		try {
			await excluiImovelService.execute(id);

			return response.send();
		}catch(erro){
			return response.status(404).json({erro: erro.message});
		}
	}

}

export { ExcluiImovelController }