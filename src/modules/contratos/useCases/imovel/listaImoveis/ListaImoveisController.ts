import { container } from 'tsyringe';
import { Request, Response } from 'express';
import { ListaImoveisService } from './ListaImoveisService';

class ListaImoveisController {

	async handle(request: Request, response: Response): Promise<Response> {
		const listaImoveisService = container.resolve(ListaImoveisService);
		const imoveis = await listaImoveisService.execute();

		return response.json(imoveis);
	}
}

export { ListaImoveisController };