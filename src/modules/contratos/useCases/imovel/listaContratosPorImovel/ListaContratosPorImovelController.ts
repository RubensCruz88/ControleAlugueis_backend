import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { ListaContratosPorImovelService } from './ListaContratosPorImovelService';

class ListaContratosPorImovelController {
	async handle(request: Request, response: Response): Promise<Response>{
		const { id } = request.params;

		const listaContratosPorImovelService = container.resolve(ListaContratosPorImovelService);

		const contratos = await listaContratosPorImovelService.execute(id);

		return response.json(contratos);
	}

}

export { ListaContratosPorImovelController }