import { container } from 'tsyringe';
import { Request, Response } from 'express';
import { ListaImovelPorIdService } from './ListaImovelPorIdService';

class ListaImovelPorIdController {
	async handle(request: Request, response: Response): Promise<Response> {
		const {id} = request.params;

		const listaImovelPorIdService = container.resolve(ListaImovelPorIdService);

		const imovel = await listaImovelPorIdService.execute(id);

		return response.json(imovel);
	}
}

export { ListaImovelPorIdController }